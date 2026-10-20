# HOODRAT Deployment and Safe Domain Migration

This repository is ready for static GitHub Pages deployment, but Pages has **not** been enabled and no DNS or custom-domain configuration has been changed.

## Before enabling hosting

1. Review the local preview and the desktop/mobile screenshots in `docs/screenshots/`.
2. Confirm that the desired GitHub repository contains the verified files and that the live Tokly website must remain untouched during the test.
3. Update `config.js` only if the contract, approved social links, copy, or source-labelled market snapshot needs correction.
4. If using a new public domain, set `site.publicOrigin` in `config.js`, then replace the empty sitemap URL set with that approved absolute origin before publishing. Do not use `hoodrat.onhood.cc` as the replacement canonical until it is intentionally migrated.

## Enable a GitHub Pages test deployment after approval

1. Push the reviewed source to the target repository’s `main` branch.
2. In the repository’s **Settings → Pages**, select **GitHub Actions** as the Pages source. This is a public-hosting action; complete it only after the owner approves publication.
3. In **Actions**, open **Deploy HOODRAT to GitHub Pages** and choose **Run workflow**. The workflow is manual-only, so a normal commit cannot publish accidentally.
4. Wait for the workflow to report a successful GitHub Pages URL.
5. Open that URL on desktop and mobile. Verify the home route, `/manus-routes.json`, local images, Buy button, Explorer, X, Discord, and chart links. Keep the current live site in place while this independent URL is reviewed.

## Custom-domain migration: `hoodrat.onhood.cc`

Only begin after the independent GitHub Pages test has been approved.

1. Record the current DNS records and any existing Tokly hosting settings before editing them. Preserve these values as the rollback record.
2. In GitHub repository **Settings → Pages**, add `hoodrat.onhood.cc` as the custom domain and follow GitHub’s currently displayed domain-verification/DNS instructions. Do not guess or reuse old provider values.
3. Update the required DNS record at the current DNS provider exactly as GitHub instructs. Do not delete unrelated mail, verification, or other service records.
4. Wait for GitHub Pages to verify the domain and HTTPS certificate. Test the migrated domain on a normal browser connection, then test the Buy, Explorer, X, Discord and chart destinations again.
5. Only after that verification should the old Tokly deployment be considered for retirement.

## Rollback

If the migrated domain fails or behaves unexpectedly, restore the saved pre-migration DNS record(s) and leave the GitHub Pages deployment intact for investigation. This returns traffic to the existing site without deleting either source repository or deployment. Do not force-push, delete the GitHub repository, or discard the current website while diagnosing a migration.
