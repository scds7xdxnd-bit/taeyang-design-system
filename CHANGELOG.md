# Changelog

All notable changes to this design system are documented here. Versions follow
[Semantic Versioning](https://semver.org/): MAJOR for breaking token/component
changes, MINOR for additions, PATCH for fixes.

## [0.2.0] — 2026-06-18

Merged the Claude Design skill export into the repo — it's now a full, re-importable design-system **skill**, not just tokens + docs.

### Added
- `SKILL.md` — Agent-Skills entry so the system can be loaded as a Claude skill.
- React primitives in `components/core/` (`Button`, `Badge`, `Pill`, `Panel`, `ProgressBar`, `QuestRow`, `Icon`) — each with a `.prompt.md` and a `core.card.html` showcase.
- Foundation specimen cards in `guidelines/` (color · type · spacing · motion · brand).
- `ui_kits/portfolio/` — an interactive recreation of the portfolio home.
- Split token entry: `styles.css` + `tokens/{fonts,colors,typography,spacing}.css`.
- Brand assets: `assets/icons/icons.js` (now incl. `arrowRight`/`external`), `assets/img/`, `assets/projects/`.
- Claude Design machinery: `_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json`, `.thumbnail`.

### Changed
- `README.md` replaced with the comprehensive skill readme (content/visual/iconography rules + index), plus repo-extras and license sections.
- `assets/logo/favicon.svg` refreshed to the design-system version.

### Kept (the "similar ones")
- `docs/` (DESIGN_SYSTEM.md, BRIEF.md, USAGE.md), `tokens/tokens.css` + `tokens.json`, `components/components.css` + `preview.html`, LICENSE, `.gitignore`.

### Deliberately not committed
- `Taeyang Han — Life Systems Designer.pdf` (1.2 MB source input, unreferenced by the system) and the export `.zip` — left out to keep the repo lean.

## [0.1.0] — 2026-06-18

Initial release. Extracted and packaged from the live portfolio.

### Added
- Design tokens in CSS (`tokens/tokens.css`) and JSON (`tokens/tokens.json`) — brand palette, semantic light/dark, typography, spacing, radius, border, shadow, motion.
- Component styles (`components/components.css`): button, panel, badge, pill, progress / stat-meter, quest-row, plus `.game-panel` / `.pressable` utilities.
- Living style guide (`components/preview.html`) with a dark-mode toggle.
- Documentation: full spec (`docs/DESIGN_SYSTEM.md`), Claude prompt brief (`docs/BRIEF.md`), usage guide (`docs/USAGE.md`).
- Brand mark (`assets/logo/favicon.svg`).
