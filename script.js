(() => {
  const config = window.HOODRAT_CONFIG;
  if (!config) return;

  const externalLinks = new Set(["buy", "explorer", "chart", "x", "discord", "officialWebsite"]);
  const getValue = (path) => path.split(".").reduce((value, key) => value?.[key], config);
  const iconMap = {
    community: "◌",
    chain: "↗",
    diamond: "◇",
    heart: "♥",
    growth: "↗",
    check: "✓",
    pumpkin: "◒",
    gear: "⚙",
    rocket: "↗",
  };

  document.querySelectorAll("[data-fill]").forEach((element) => {
    const value = getValue(element.dataset.fill);
    if (typeof value === "string" || typeof value === "number") element.textContent = value;
  });

  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.dataset.link;
    const href = config.links[key];
    if (!href) return;
    anchor.href = href;
    if (externalLinks.has(key)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
  });

  const featureGrid = document.querySelector("#feature-grid");
  if (featureGrid) {
    featureGrid.innerHTML = config.features
      .map(
        (feature) => `
          <article class="feature-item">
            <span class="feature-icon" aria-hidden="true">${iconMap[feature.icon] || "◆"}</span>
            <strong>${feature.label}</strong>
            <span>${feature.caption}</span>
          </article>`,
      )
      .join("");
  }

  const checklist = document.querySelector("#about-checklist");
  if (checklist) checklist.innerHTML = config.about.checklist.map((item) => `<li>${item}</li>`).join("");

  const roadmap = document.querySelector("#roadmap-list");
  if (roadmap) {
    roadmap.innerHTML = config.roadmap
      .map(
        (item) => `
          <li class="roadmap-item${item.completed ? " is-complete" : ""}">
            <span class="roadmap-icon" aria-hidden="true">${iconMap[item.icon] || "◆"}</span>
            <strong>${item.title}</strong>
            <span>${item.subtitle}</span>
            <em>${item.status}</em>
          </li>`,
      )
      .join("");
  }

  const faqList = document.querySelector("#faq-list");
  if (faqList) {
    faqList.innerHTML = config.faqs
      .map(
        (item) => `
          <details>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>`,
      )
      .join("");
  }

  const menuButton = document.querySelector("#mobile-menu-button");
  const navigation = document.querySelector("#primary-navigation");
  if (menuButton && navigation) {
    const mobileViewport = window.matchMedia("(max-width: 900px)");
    const setNavigationState = (opened) => {
      navigation.classList.toggle("is-open", opened);
      menuButton.setAttribute("aria-expanded", String(opened));
      if (mobileViewport.matches) {
        navigation.setAttribute("aria-hidden", String(!opened));
      } else {
        navigation.removeAttribute("aria-hidden");
      }
    };
    const syncNavigationForViewport = () => setNavigationState(false);
    syncNavigationForViewport();
    mobileViewport.addEventListener("change", syncNavigationForViewport);
    menuButton.addEventListener("click", () => {
      setNavigationState(!navigation.classList.contains("is-open"));
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileViewport.matches) setNavigationState(false);
      });
    });
  }

  const toast = document.querySelector("#toast");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  };

  document.querySelectorAll("[data-copy-contract]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(config.token.contract);
        showToast("Contract address copied.");
      } catch {
        showToast("Copy unavailable. Select the address manually.");
      }
    });
  });

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  if (config.site.publicOrigin) {
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = config.site.publicOrigin;
    document.head.append(canonical);
  }
})();
