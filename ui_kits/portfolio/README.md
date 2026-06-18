# Portfolio — UI kit

An interactive recreation of [Taeyang Han's portfolio](https://portfolio-han-taeyangs-projects.vercel.app) — the single product this design system was extracted from. A "Web4 agentic" personal site framed as a game start-screen.

## What's here
- **`index.html`** — the full home page, wired and interactive (theme toggle, scroll-nav, switchable Specializations tabs, copy-email). Mounts the screen components below.
- **`Nav.jsx`** — sticky top bar: logo lockup, links, theme + language toggles.
- **`Hero.jsx`** — the "Game Start Screen": **Player Profile** panel (avatar + LVL badge, stats, handwriting speech bubble, action buttons) beside the **Current Quests** panel (`Panel variant="quests"` + `QuestRow`s), over a build strip.
- **`About.jsx`** — the dark **manifesto** band (story / beliefs / daily stack) and the **journey** timeline.
- **`Specializations.jsx`** — the "Work" section: sticky `Pill` tab bar over an interactive domain panel (mastery `ProgressBar`, proof list, featured-project `Panel`).
- **`Footer.jsx`** — contact cards + the dark footer with the handwriting signature.
- **`data.js`** — all copy (quests, journey, five domains) lifted from `profile.json` / `specializations.js`.

## How it's built
Screen components compose the design-system **primitives** from the bundle (`window.TaeyangHanDesignSystem_01d505`): `Button`, `Badge`, `Pill`, `Panel`, `ProgressBar`, `QuestRow`, plus `iconSvg`. They do **not** re-implement primitives. Styling is inline style objects that reference the design-system CSS custom properties, so light/dark themes and tokens flow through automatically.

This is a cosmetic, click-through recreation — not production code. Interactions are faked (no real clipboard target text content guaranteed, links are stubs). The goal is pixel-faithful coverage of the brand's surfaces.
