# Usage

How to actually drive this design system day to day.

## With Claude / Claude Design

Pick the level of fidelity you need:

| You want… | Paste this |
|---|---|
| A quick on-brand mockup | [`BRIEF.md`](./BRIEF.md) (the condensed prompt) |
| Pixel-faithful output with exact specs | [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) |
| Real, runnable CSS | [`../tokens/tokens.css`](../tokens/tokens.css) + [`../components/components.css`](../components/components.css) |

Then describe the screen, component, or graphic you want. Example opener:

> Using the design system below, design a "Resources" page header with a section badge, title, and three resource cards in the game-panel style.
> *(paste BRIEF.md)*

Tip: when you want a specific component to match exactly, paste that component's markup from [`../components/preview.html`](../components/preview.html) alongside the brief and say "reuse this pattern."

## In code

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/components.css">
```

Then use the classes: `.btn`, `.panel`, `.badge`, `.pill`, `.progress`, `.quest-row`. Toggle dark mode with `data-theme="dark"` on `<html>`. Open [`components/preview.html`](../components/preview.html) in a browser to see everything live, including the theme toggle.

## Source of truth & syncing

The **live portfolio** (`scds7xdxnd-bit/portfolio`) is canonical — its `src/styles/tokens.css` and `src/styles/components/*` are where the design actually ships and evolves. This repo is a **documented, portable package** of that system for use with Claude Design and as a reference.

When the portfolio's tokens or components change, re-sync here:

```bash
# from the portfolio repo root
cp src/styles/tokens.css   ../taeyang-design-system/tokens/tokens.css
# then update components/components.css + tokens.json by hand if components changed,
# bump the version in CHANGELOG.md, and commit.
```

Keep changes flowing **portfolio → design-system**, not the other way around, so the two never disagree about what's real.
