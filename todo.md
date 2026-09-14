# Delimwitu codebase audit

## 1. Critical Issues
- [README.md](README.md) is materially out of sync with the actual app: it references authentication, cart, dashboard, and routes that are not present in the active codebase.
- The project contains multiple menu data sources: [data/menuData.ts](data/menuData.ts), [data/menuDataComplete.ts](data/menuDataComplete.ts), [data/menuDataCompleteNew.ts](data/menuDataCompleteNew.ts), and category-specific files. This creates ambiguity about which dataset is authoritative.
- [next.config.mjs](next.config.mjs) disables `reactStrictMode` with a comment that it is temporary; this should be reviewed before future development.
- [actions/emails.ts](actions/emails.ts) relies on environment-based email configuration and includes placeholder contact text and a hardcoded phone placeholder in generated content.
- The public menu folder contains a large number of generated placeholder assets and duplicate naming patterns, suggesting a leftover asset library rather than a production asset set.

## 2. Unused Files
- [data/menuData.ts](data/menuData.ts) — legacy menu dataset, not imported by active app code.
- [data/menuDataCompleteNew.ts](data/menuDataCompleteNew.ts) — not imported by any active route or component.
- [scripts/rename_branding.js](scripts/rename_branding.js), [scripts/rename_branding.py](scripts/rename_branding.py), [scripts/replace_branding.py](scripts/replace_branding.py) — branding/migration scripts with no active runtime use.
- [public/menu/README.md](public/menu/README.md) — placeholder-generation documentation, not runtime-critical.
- [public/IMAGE_LINKS_AND_ORGANIZATION.txt](public/IMAGE_LINKS_AND_ORGANIZATION.txt) — reference document, not used at runtime.
- [public/content.txt](public/content.txt) — no active code references found.

## 3. Unused Folders
- [public/menu](public/menu) still contains multiple legacy placeholder inventories and old category folders that do not appear to be referenced by the active menu system.
- [public/menu/breakfast](public/menu/breakfast), [public/menu/everydayclassic](public/menu/everydayclassic), and [public/menu/lunch&dinner](public/menu/lunch&dinner) look like historical content folders rather than active runtime assets.

## 4. Unused Assets
- Used: [public/logo.svg](public/logo.svg), [public/logo.png](public/logo.png), [public/whatsapp.png](public/whatsapp.png), [public/pin-solid.svg](public/pin-solid.svg), [public/manifest.json](public/manifest.json), [public/google0f3391708059f299.html](public/google0f3391708059f299.html), [public/mpesa.png](public/mpesa.png), [public/airtel.png](public/airtel.png), [public/visa.png](public/visa.png).
- Possibly used: selected menu item images referenced by the active data sources under [public/menu](public/menu).
- Unused / likely dead: duplicate files with generic names such as `download.jpg`, `download (1).jpg`, `download (2).jpg`, and other repeated menu files without active references.
- Duplicate: repeated asset names across category folders and duplicate menu data patterns.
- Unknown: many asset files in [public/menu](public/menu) still need manual verification before removal.

## 5. Duplicate Code
- A legacy dataset and a complete aggregate dataset overlap in purpose and represent the same domain from different sources.
- The menu is split between multiple data files and asset folders, creating duplicated logic and unclear ownership.
- [README.md](README.md) includes repeated sections and outdated claims copied across blocks.

## 6. Unused Dependencies
- `restaurant-ui-2: link:` appears suspicious and likely unnecessary; it should be confirmed before removal.
- `next-sitemap` is present, but the project relies on the app-level [app/sitemap.ts](app/sitemap.ts) instead of a separate active sitemap workflow.
- `framer-motion`, `react-scroll`, `react-responsive`, `react-icons`, `date-fns`, and `leaflet` should be validated before cleanup; some may be legacy baggage or package bloat.
- `@netlify/plugin-nextjs` is deployment-specific and may not be needed depending on hosting, but it is not necessarily unused.

## 7. Broken/Dead Code
- [README.md](README.md) documents features that are not present in the current app, including auth, cart, and dashboard flows.
- [public/menu/README.md](public/menu/README.md) explicitly says the directory is a placeholder library, indicating that placeholder content remains in the production ship set.
- [components/Footer.tsx](components/Footer.tsx) contains placeholder `href="#"` links and non-implemented customer service entries.
- [actions/emails.ts](actions/emails.ts) contains placeholder contact details and is not production-safe as currently structured.

## 8. Performance Issues
- The repo includes a large number of menu image files, many of which appear redundant, placeholder-like, or not used by active routes.
- Extra asset weight increases deployment size and slows page loading when the site is not using all files.
- Placeholder-heavy menu directories are not optimized for production readiness.

## 9. SEO Issues
- SEO metadata is present in [app/layout.tsx](app/layout.tsx), and a sitemap is generated in [app/sitemap.ts](app/sitemap.ts), which is a good baseline.
- However, the overall site metadata and route documentation appear slightly generic and may not match the final production structure.
- Alt text, canonical checks, and menu detail URL consistency should be reviewed before final production hardening.

## 10. Accessibility Issues
- Some interactive elements are present without a fully production-grade accessibility review, particularly placeholder links and static icon/link setups.
- The floating WhatsApp action should be checked for focus and keyboard accessibility.
- Decorative patterns in [components/HomePage.tsx](components/HomePage.tsx) and [app/menu/page.tsx](app/menu/page.tsx) should be reviewed for color contrast and non-essential semantics.

## 11. Security Concerns
- [actions/emails.ts](actions/emails.ts) and [actions/reservations.ts](actions/reservations.ts) require `EMAIL_USER` and `EMAIL_PASSWORD` environment values, which should be reviewed for safe hosting and environment handling.
- Email templates still include placeholder phone text and contact details instead of final production-safe values.
- No obvious secret values were found in source control, but environment handling should be confirmed before launch.

## 12. Code Quality
- The repo drifts between a template-era project and a production restaurant experience.
- Docs, data, and asset inventory are inconsistent.
- There is a strong likelihood of stale generated placeholder content being carried into production builds.

## 13. Recommended Refactors
- Consolidate the active menu source into a single authoritative data file.
- Audit and archive legacy public menu images instead of shipping all placeholder files.
- Remove outdated documentation and migration scripts that are no longer part of the runtime pipeline.
- Validate the dependency list before any uninstall work.
- Harden the email flow and final production contact details.

## 14. Future Improvements
- Maintain a runtime asset inventory mapping every file in [public](public) to a live reference in the app.
- Add a CI rule to flag dead imports and broken asset references.
- Standardize on one menu dataset and one image source of truth.
- Review bundle weight and optimize menu image usage before expansion.

## 15. Items Requiring My Approval
- Deleting legacy menu assets and placeholder files inside [public/menu](public/menu)
- Removing duplicate menu datasets such as [data/menuData.ts](data/menuData.ts) and [data/menuDataCompleteNew.ts](data/menuDataCompleteNew.ts)
- Removing migration/branding tooling under [scripts](scripts)
- Pruning dependencies after usage confirmation
- Cleaning up placeholder content and email configuration in [actions/emails.ts](actions/emails.ts)

## Asset usage status summary
- USED: [public/about](public/about), [public/hero](public/hero), [public/logo.svg](public/logo.svg), [public/logo.png](public/logo.png), [public/whatsapp.png](public/whatsapp.png), [public/pin-solid.svg](public/pin-solid.svg), [public/manifest.json](public/manifest.json), [public/google0f3391708059f299.html](public/google0f3391708059f299.html), [public/mpesa.png](public/mpesa.png), [public/airtel.png](public/airtel.png), [public/visa.png](public/visa.png).
- POSSIBLY USED: selected menu images referenced by active data files under [public/menu](public/menu).
- UNUSED: placeholder and generic files such as `download.jpg`, `download (1).jpg`, `download (2).jpg`, and similar repeated names without active references.
- DUPLICATE: repeated menu data and repeated asset naming patterns across menu categories.
- UNKNOWN: some large placeholder folders still need manual verification before deletion.

## Proposed cleanup batches
- Batch 1 — Unused public images and placeholder menu assets
- Batch 2 — Duplicate assets and stale menu data files
- Batch 3 — Legacy branding scripts and support docs
- Batch 4 — Unused dependencies
- Batch 5 — Other cleanup after direct review

No destructive actions have been taken yet.
