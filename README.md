<div align="center">
  <img src="assets/logo/favicon.svg" width="64" height="64" alt="Taeyang Han logo">

  <h1>Taeyang Han — Design System</h1>

  <p><strong><em>Build systems. Level up life.</em></strong></p>
  <p>A playful, game-inspired design language: pixel-art warmth, bold ink borders, and chunky hard-offset shadows on a cream notebook page.</p>
</div>

---

This is the documented, portable source of truth for the **Taeyang Han** visual identity — packaged so it can be reused with [Claude / Claude Design](docs/BRIEF.md), referenced in code, or handed to any design tool. The live implementation ships in the [portfolio](https://github.com/ammarhakimi) (see [Source of truth](#source-of-truth)).

## What's inside

```
taeyang-design-system/
├── docs/
│   ├── DESIGN_SYSTEM.md   ← the full spec (colors, type, components, motion)
│   ├── BRIEF.md           ← condensed copy-paste prompt for Claude
│   └── USAGE.md           ← how to drive the system day to day
├── tokens/
│   ├── tokens.css         ← CSS custom properties (canonical, synced from portfolio)
│   └── tokens.json        ← portable JSON export for tooling
├── components/
│   ├── components.css     ← button, panel, badge, pill, progress, quest-row
│   └── preview.html       ← living style guide (open in a browser; has a dark-mode toggle)
└── assets/logo/           ← brand mark
```

## Quick start

**Designing with Claude:** paste [`docs/BRIEF.md`](docs/BRIEF.md) as your first message, then describe what you want. For exact specs, paste [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) instead. Full guidance in [`docs/USAGE.md`](docs/USAGE.md).

**In code:**

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/components.css">
```

**Preview:** open [`components/preview.html`](components/preview.html) in a browser.

## The essentials

| | |
|---|---|
| **Colors** | sunshine `#FFD859` · coral `#FF6B6B` · sky `#6EC6FF` · mint `#7EE6A7` · purple `#B084F5` · ink `#1E1E1E` · cream `#FFF7E6` |
| **Type** | DM Sans (display) · Inter (body) · Press Start 2P (pixel labels) · Caveat (handwriting) |
| **Signature** | thick ink borders + hard offset shadow, **no blur** (`4px 4px 0`); hover lifts, press sinks |
| **Shapes** | 8px radii (999px pills), 8pt spacing, 1040px container |

## Source of truth

The live **portfolio** repo is canonical — its `src/styles/` is where the design actually ships and evolves. This repo is a documented snapshot/package of that system. Changes flow **portfolio → here**, never the reverse, so the two never disagree. See [`docs/USAGE.md`](docs/USAGE.md#source-of-truth--syncing) for the sync steps.

> The original brand-identity board (Cherry Bomb One, Comic Neue) was the *inspiration*. The shipped site — DM Sans + Inter — is what's documented here and what wins.

## License & brand

The **code** in this repo (tokens, component CSS, examples) is released under the [MIT License](LICENSE) — learn from it, adapt the patterns.

The **brand identity** — the name "Taeyang Han", the logo, mascot, likeness, and overall visual persona — is **© Taeyang Han, all rights reserved** and is *not* covered by the MIT license. Use the system as inspiration or scaffolding for your own brand; don't reproduce this one.
