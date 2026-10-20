#!/usr/bin/env python3
"""Browser checks for the HOODRAT static-site controls and approved destinations."""

from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:3000/"
EXPECTED_ROUTES = {
    "buy": "https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4",
    "explorer": "https://robinhoodchain.blockscout.com/token/0x05b806651e071dea47bd214008b632ddc7970ca4",
    "chart": "https://dexscreener.com/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4",
    "x": "https://x.com/RodentFinance",
    "discord": "https://discord.gg/y3kAtRzRA",
    "officialWebsite": "https://hoodrat.onhood.cc",
}


def first_visible(locator):
    for index in range(locator.count()):
        candidate = locator.nth(index)
        if candidate.is_visible():
            return candidate
    raise AssertionError(f"No visible control matched {locator}")


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(executable_path="/usr/bin/chromium", args=["--no-sandbox"])
    context = browser.new_context(viewport={"width": 1212, "height": 900})
    page = context.new_page()
    browser_errors = []
    page.on("pageerror", lambda error: browser_errors.append(f"pageerror: {error}"))
    page.on("console", lambda message: browser_errors.append(f"console: {message.text}") if message.type == "error" else None)
    page.goto(BASE_URL, wait_until="networkidle")

    # Each rendered external link retains its approved value and hardened new-tab attributes.
    for key, expected_url in EXPECTED_ROUTES.items():
        links = page.locator(f'a[data-link="{key}"]')
        assert links.count() > 0, f"No rendered control for {key}"
        for index in range(links.count()):
            link = links.nth(index)
            assert link.get_attribute("href") == expected_url, (key, index)
            assert link.get_attribute("target") == "_blank", (key, index)
            assert "noopener" in (link.get_attribute("rel") or ""), (key, index)

    # Every normal in-page anchor reaches its unique target.
    internal_destinations = sorted(
        {
            link.get_attribute("href")
            for index in range(page.locator('a[href^="#"]').count())
            if (link := page.locator('a[href^="#"]').nth(index)).get_attribute("href") not in {"#faq", "#main-content"}
        }
    )
    for destination in internal_destinations:
        page.goto(BASE_URL, wait_until="networkidle")
        first_visible(page.locator(f'a[href="{destination}"]')).click()
        page.wait_for_timeout(100)
        assert page.url.endswith(destination), destination
        assert page.locator(destination).count() == 1, destination

    # Keyboard-accessible skip link targets the main landmark.
    page.goto(BASE_URL, wait_until="networkidle")
    page.locator(".skip-link").focus()
    page.locator(".skip-link").press("Enter")
    assert page.url.endswith("#main-content")

    # FAQ dialog and all five accordions operate correctly.
    page.goto(BASE_URL, wait_until="networkidle")
    first_visible(page.locator("[data-open-faq]")).click()
    dialog = page.locator("#faq-modal")
    assert dialog.evaluate("element => element.open")
    details = dialog.locator("details")
    assert details.count() == 5
    for index in range(details.count()):
        item = details.nth(index)
        item.locator("summary").click()
        assert item.evaluate("element => element.open")
    dialog.locator("[data-close-faq]").click()
    assert not dialog.evaluate("element => element.open")

    # Mobile navigation opens, exposes its purchase control, and collapses after navigation.
    page.set_viewport_size({"width": 540, "height": 1212})
    page.goto(BASE_URL, wait_until="networkidle")
    menu = page.locator("#mobile-menu-button")
    assert menu.get_attribute("aria-expanded") == "false"
    menu.click()
    assert menu.get_attribute("aria-expanded") == "true"
    assert page.locator("#primary-navigation").get_attribute("aria-hidden") == "false"
    assert page.locator('.mobile-nav-actions [data-link="buy"]').count() == 1
    page.locator('#primary-navigation a[href="#token"]').click()
    assert menu.get_attribute("aria-expanded") == "false"
    assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")

    # Each unique external action creates a new tab. Destination availability is checked separately,
    # because third-party pages can reject automation or use client-side rendering.
    page.set_viewport_size({"width": 1212, "height": 900})
    page.goto(BASE_URL, wait_until="networkidle")
    for key in EXPECTED_ROUTES:
        with page.expect_popup(timeout=10_000) as popup_info:
            first_visible(page.locator(f'a[data-link="{key}"]')).click()
        popup_info.value.close()

    assert not browser_errors, browser_errors
    browser.close()

print("HOODRAT interaction verification: PASS")
