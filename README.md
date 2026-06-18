# Taeyang Han — Design System

> **"Build systems. Level up life."**
> A playful, game-inspired design language: pixel-art warmth, bold solid ink borders, and chunky hard-offset shadows on a cream notebook page.

This design system was extracted from the live portfolio and personal brand of **Taeyang Han (한태양)** — a Chemical Engineering + Business dual-degree student at Sogang University (Seoul), official Korean–English–Malay interpreter (TOPIK 6, work covered by Yonhap News), and builder of 6+ deployed web apps. His through-line: *designing systems that help people learn, live, and grow.* The brand turns a résumé into a game — work is framed as **quests**, progress as **XP / %**, sections as **panels**, with a pixel-art mascot-and-Seoul-skyline world behind it.

There is **one product**: the portfolio website — a "Web4 agentic" personal site (it serves humans *and* AI agents, with an MCP server, an ask-me terminal, and a JD-tailoring endpoint).

## Sources used (explore these to go deeper)
- **GitHub — design system:** `scds7xdxnd-bit/taeyang-design-system` — https://github.com/scds7xdxnd-bit/taeyang-design-system — the formal brand brief, `tokens/tokens.css`, `components/components.css`. *The source of truth as shipped.*
- **GitHub — live site:** `scds7xdxnd-bit/portfolio` — https://github.com/scds7xdxnd-bit/portfolio
- **Attached codebase:** `portfolio/` (Vite + vanilla JS) — `styles.css` + `src/styles/`, `src/data/specializations.js`, `public/profile.json`, `public/llms.txt`, `src/lib/icons.js`.
- **Live site:** https://portfolio-han-taeyangs-projects.vercel.app
> *Readers with access can browse the GitHub repos above to build richer, more accurate designs against this brand.*

---

## CONTENT FUNDAMENTALS — how the brand writes

**Voice:** short, clear, encouraging, "level-up" energy. Story-driven and concrete — always backed by *real proof*, never self-scored hype. Reads like a friendly builder, not a corporate bio.

- **Person:** first-person **I / my** for Taeyang's own voice ("I build fun, practical systems…"); second-person **you / your** when addressing a visitor or AI agent. Warm and direct.
- **Casing:** Sentence case for headlines and body. **UPPERCASE only** for tiny pixel labels (`BUILD · TEST · IMPROVE · REPEAT`, `CURRENT QUESTS`, badge text). Never all-caps a sentence.
- **Game framing (signature):** sections are *panels*, achievements are *quests*, skill levels are *mastery %* and *LVL.24*, status is *Building / Live / In development*. Calls-to-action are quests: "**Start Quest**", "**Start a quest together**".
- **Punctuation:** em dashes and middle dots (`·`) to separate facts; arrows (`→`, `↗`) for flow and outbound links. Numbers are specific and verifiable ("150+ mentees", "TOPIK 6 · 265/300", "6 deployed systems").
- **Tone examples:**
  - Hero: *"I build fun, practical systems that help people learn, live better, and chase big goals."*
  - Annotation (handwriting): *"every number here is backed by proof"*
  - Sign-off: *"Thanks for stopping by — now go build something."*
  - Beliefs: *"Systems beat willpower." · "Build to understand." · "Real proof, not self-score."*
- **Emoji:** used deliberately as expressive accents — domain markers (🌐 ⚗️ 💻 🤝 📊), a waving 👋 greeting, flags for languages (🇬🇧 🇰🇷 🇨🇳 🇲🇾), and pixel-spirit icons (⭐ ❤️ ⚡ 🚩). Never decorative spam; one per idea.
- **Multilingual:** English-primary, with first-class Korean (한국어) and Chinese (中文); handwriting font swaps per language.

---

## VISUAL FOUNDATIONS

**The big idea:** a *cream notebook page, inked in black, stickered in sunshine.* Everything looks like a physical sticker or game panel pressed onto paper.

- **Color:** warm cream page (`#FFF7E6`), white panels, near-black **ink** (`#1E1E1E`) for all text/borders/shadows. Five saturated accent "sticker" colors — **sunshine** `#FFD859` (primary), **coral** `#FF6B6B`, **sky** `#6EC6FF`, **mint** `#7EE6A7`, **purple** `#B084F5`. Coral & purple fills take **white** text; sunshine/sky/mint take **ink** text; never grey text on a colored fill. A full **dark "Night World"** theme inverts ink to warm off-white and mutes the accents (`[data-theme="dark"]`).
- **Type:** **DM Sans** (700–800, `-0.02em` tracking) for display/headings/"game" UI; **Inter** for body (16px / 1.6); **Press Start 2P** pixel font for *tiny UPPERCASE labels, badges, % and EXP only — never body*; **Caveat** handwriting for speech bubbles and human annotations.
- **The signature look:** thick **2–3px solid ink borders** + **hard offset shadows with NO blur** (`4px 4px 0 #1E1E1E`). On **hover**: lift `translateY(-2px)` and grow the shadow. On **press**: sink `translateY(+1px)` and shrink it (`1px 1px 0`). This "physical sticker / pressable" feel is the heart of the brand — apply to cards, buttons, pills, badges.
- **Corners & shape:** gentle radii — `4 / 8 / 12px`, and `999px` pills. Nothing sharp, nothing very round. Buttons & panels at 8px; chips/badges fully pill.
- **Cards:** white surface, 3px ink border, 8px radius, small offset shadow at rest → larger offset + 1px lift on hover. Panels often carry a **colored header** (sunshine bg / ink text by default; ink bg / sunshine pixel-label for the "CURRENT QUESTS" treatment; ink-fill `--dark` variant).
- **Spacing:** 8pt-ish scale — `4 / 8 / 16 / 24 / 32 / 48 / 64`. Container max `1040px`. Section padding `64px 24px` desktop → `48px 16px` mobile.
- **Backgrounds & texture:** the cream page carries a **faint fractal-noise paper grain** (~5–6% opacity, fixed overlay) so it reads like a notebook. A **pixel-art world map** (boy + Shiba dog, Namsan/Seoul skyline) sits behind the hero. Sticky-note callouts (rotated sunshine pills) and a `BUILD → TEST → IMPROVE → REPEAT` strip add the game-world layer. No gradients-as-decoration beyond a soft sky-to-cream hero wash.
- **Motion:** `--ease-bounce` `cubic-bezier(0.34,1.56,0.64,1)` for interactions/presses; `--ease-smooth` `cubic-bezier(0.2,0.8,0.2,1)` for reveals & progress fills. Durations 150 / 250 / 400ms. Scroll reveals fade + rise `translateY(20px)→0`. Progress bars animate width over 0.8s. Always honor `prefers-reduced-motion`.
- **Hover / press states:** lift+grow-shadow on hover; sink+shrink on press; quiet rows (quest rows, dropdown items) highlight with a cream/sunshine background instead of moving. Ghost buttons gain an ink border on hover.
- **Focus:** always-visible `3px solid coral` outline, 2px offset — on-brand and accessible.
- **Transparency & blur:** sparing — the fixed nav uses an 82%-opacity page background with a 14px backdrop blur; dark bands use white at 12% for inset chips. Otherwise surfaces are solid.
- **Imagery vibe:** real screenshots and photos, warm, sat, framed in a 2px ink border with an offset shadow — treated like stickers, not edge-to-edge.

---

## ICONOGRAPHY

Two layers, used together:

1. **Stroke icons (functional)** — a small **Lucide-style** set: 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, **stroke-width 2**, round caps & joins. Ported verbatim from the site's `src/lib/icons.js` into **`assets/icons/icons.js`** (`globe`, `flask`, `code`, `users`, `cap`, `dashboard`, `book`, `award`, `check`, plus `arrowRight` / `external`). Use `iconSvg(name, size)` (also exported from the component bundle) or `injectIcons(root)` for `[data-icon]` elements. They're drawn in ink (or `currentColor`) and usually sit in a 32px ink-bordered chip. For anything not in the set, use **Lucide** (https://lucide.dev) at the same weight — it's the closest match. *(No icon font; no PNG icons; brand SVGs are inline.)*
2. **Emoji (expressive)** — used as domain/category markers and emotional accents (🌐 ⚗️ 💻 🤝 📊 ⭐ 🚩 👋) and language flags. Deliberate, one-per-idea — never a wall of emoji.

The **logo** (`assets/logo/favicon.svg`) is a rounded ink tile with a **mint "T"** in DM Sans; it locks up beside the "Taeyang Han" wordmark (with "Han" in coral on the site).

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (imports only). Consumers link this one file.
- `tokens/` — `fonts.css` (Google Fonts), `colors.css` (palette + semantic + dark theme), `typography.css` (stacks + scale), `spacing.css` (spacing · radii · borders · shadows · motion).
- `assets/` — `logo/favicon.svg`, `icons/icons.js`, `img/` (portrait, Sogang logo, pixel world bg), `projects/` (featured screenshots).
- `SKILL.md` — Agent-Skills-compatible entry for use in Claude Code.

**Components** (`components/core/`) — React primitives, exposed on `window.TaeyangHanDesignSystem_01d505`:
- `Button` — 4 variants (primary / secondary / coral / ghost), 2 sizes, icon support.
- `Badge` — pixel-font UPPERCASE micro-label (star / sky / mint / coral / purple / ghost).
- `Pill` — filter / skill / status chip, with `active` and status tones.
- `Panel` — the game-panel card (default / dark / quests headers).
- `ProgressBar` — XP / mastery meter, palette-colored.
- `QuestRow` — the icon + title + desc + progress/proof list item.
- Each ships `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the showcase.

**UI kits** (`ui_kits/`)
- `portfolio/` — interactive recreation of the portfolio home (nav, hero, manifesto, journey, specializations, contact, footer). See its `README.md`.

**Guidelines** (`guidelines/`) — foundation specimen cards rendered in the Design System tab: Colors (brand / neutrals / contrast & status), Type (display / body / pixel / handwriting), Spacing (scale / radii & borders / the signature shadow / motion), Brand (logo / iconography / texture & motifs).

---

## Quick brief (paste into a prompt)
> Design in the **Taeyang Han** style: a playful, game-inspired system on a **cream** (`#FFF7E6`) notebook background. Colors: sunshine `#FFD859` (primary), coral `#FF6B6B`, sky `#6EC6FF`, mint `#7EE6A7`, purple `#B084F5`, ink `#1E1E1E` (text/borders/shadows). Type: DM Sans (bold, -0.02em) for display, Inter for body, Press Start 2P for tiny UPPERCASE pixel labels only, Caveat for handwriting. Signature: thick 2–3px **ink borders** + **hard offset shadows, no blur** (`4px 4px 0`); hover lifts & grows the shadow, press sinks & shrinks it — like physical stickers. 8px radii, 999px pills, 8pt spacing. Frame content as game **panels** with colored headers, **quests** with progress %, status pills, badges. Coral/purple fills use white text; sunshine/sky/mint use ink. Tone: short, clear, encouraging, level-up energy.

> **Font note:** all four families are Google Fonts (DM Sans, Inter, Press Start 2P, Caveat + CJK fallbacks Noto Sans KR / Nanum Pen Script / Klee One / ZCOOL KuaiLe), loaded via `@import` in `tokens/fonts.css` — no local binaries to ship.

---

## Also in this repo

Beyond the skill files above, this repo carries a few extras for humans and tooling:

- **`docs/`** — the long-form spec ([`DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)), a condensed copy-paste prompt ([`BRIEF.md`](docs/BRIEF.md)), and a usage + sync guide ([`USAGE.md`](docs/USAGE.md)).
- **`components/preview.html`** — a standalone living style guide (open in a browser; has a dark-mode toggle), built on `components/components.css`.
- **`tokens/tokens.json`** — the tokens as portable JSON, for tooling that can't parse CSS.
- **`CHANGELOG.md`** — versioned history.

Two token entry points coexist by design: link **`styles.css`** (which `@import`s the split `tokens/*.css`) for the full system, or **`tokens/tokens.css`** for the same values in a single file. Likewise, `components/core/` holds the React primitives while `components/components.css` is their vanilla-CSS counterpart.

## License & brand

The **code** here (tokens, component CSS/JSX, examples) is released under the [MIT License](LICENSE) — learn from it, adapt the patterns.

The **brand identity** — the name "Taeyang Han", the logo and mascot, likeness, written bio, and overall visual persona — is **© Taeyang Han, all rights reserved** and is *not* covered by the MIT license. Use the system as inspiration or scaffolding for your own brand; don't reproduce this one.
