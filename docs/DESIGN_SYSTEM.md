# Taeyang Han — Design System

> **"Build systems. Level up life."**
> A playful, game-inspired design language: pixel-art warmth, bold solid borders, and chunky offset shadows on a cream notebook page.
>
> **How to use this in Claude / Claude Design:** paste the whole file as context, then ask for a screen, component, or graphic. The [Copy-paste brief](#copy-paste-brief-for-claude) at the bottom is a condensed version for quick prompts.

These tokens are the **source of truth as shipped** (extracted from `src/styles/tokens.css`). The uploaded brand board was the inspiration; where it differs from the live site, the live site wins.

---

## 1. Brand personality

| Trait | Meaning |
|---|---|
| 🌟 Playful | Enjoy the process — design should feel like a game, not a résumé. |
| 🔍 Curious | Ask questions, explore. |
| 🔧 Practical | Build useful things. Function first. |
| 🌍 Open-minded | Learn from everywhere. |
| 🚩 Determined | Keep going, one level at a time. |

**Voice:** short, clear, story-driven, step-by-step, real examples, fun visuals. Frame work as **quests**, progress as **XP / %**, sections as **panels**.

---

## 2. Color

### Brand palette
| Token | Hex | Name | Use |
|---|---|---|---|
| `--sunshine` | `#FFD859` | Sunshine | Primary accent, badges, panel headers, highlights |
| `--coral` | `#FF6B6B` | Coral | Alerts, focus rings, energetic CTAs, "in development" |
| `--sky` | `#6EC6FF` | Sky | Info, cool accents |
| `--mint` | `#7EE6A7` | Mint | Success, "active/completed" status |
| `--purple` | `#B084F5` | Purple | Special / creative accents |
| `--ink` | `#1E1E1E` | Ink | Text, borders, shadows, dark fills |
| `--grey-dark` | `#555555` | Dark Grey | Secondary text |
| `--grey-light` | `#DCDCDC` | Light Grey | Subtle borders, tracks, dividers |
| `--cream` | `#FFF7E6` | Cream | Page background (the "notebook page") |

### Semantic tokens
| Token | Light | Dark |
|---|---|---|
| `--bg-primary` | `#FFF7E6` (cream) | `#1A1917` |
| `--bg-panel` | `#FFFFFF` | `#242220` |
| `--text-primary` | `#1E1E1E` | `#E8E6E0` |
| `--text-secondary` | `#555555` | `#A8A29E` |
| `--text-muted` | `#9CA3AF` | `#6B6760` |
| `--border-main` | `#1E1E1E` | `#E8E6E0` |
| `--surface-invert` | `#1E1E1E` | `#100F0E` (stays dark in both themes — footer/manifesto band) |

### Dark mode ("Night World")
Accents are slightly muted, ink inverts to a warm off-white, shadows flip to the light ink:
`--sunshine #D4A800` · `--coral #E05555` · `--sky #5AAEE0` · `--mint #5DC985` · `--purple #9B6FE0`

**Contrast rules:** Coral & Purple fills use **white** text. Sunshine, Sky & Mint fills use **ink** text. Never put grey text on a colored fill.

---

## 3. Typography

**Shipped (source of truth):**
| Role | Token | Font stack |
|---|---|---|
| Body | `--font-body` | `'Inter', system-ui, -apple-system, 'Noto Sans KR', sans-serif` |
| Display / "game" | `--font-game` | `'DM Sans', 'Noto Sans KR', system-ui, sans-serif` |
| Pixel accent | `--font-pixel` | `'Press Start 2P', 'Courier New', monospace` |
| Handwriting | `--font-hand` | `'Caveat', cursive` (KO `Nanum Pen Script`, JA `Klee One`, ZH `ZCOOL KuaiLe`) |

> **Inspiration (from the uploaded brand board):** the board explored Display = **Cherry Bomb One**, Secondary = **Comic Neue**, Accent = **Press Start 2P**. The shipped site is the source of truth — DM Sans + Inter is canonical; the board was the mood, not the spec. Press Start 2P carried over from the board into the live pixel accents.

### Type scale (as used)
| Style | Font | Size | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Section title | game | `clamp(1.35rem, 3.5vw, 1.75rem)` | 800 | -0.02em | line-height 1.2 |
| Headline | game | `clamp(1.25rem, 3vw, 1.5rem)` | 700 | -0.02em | |
| Panel header | game | 13px | 700 | — | |
| Quest title | game | 13px | 700 | — | |
| Body | body | ~16px | 400 | — | line-height 1.6 |
| Quest desc | body | 11px | 400 | — | |
| Badge / pixel micro | pixel | 10–11px | 700 | 0.08–0.1em | UPPERCASE |

**Rule:** Pixel font is for *labels and micro-accents only* (badges, panel labels, %, EXP) — never body copy.

---

## 4. Spacing, radius, borders, shadows

```css
/* Spacing scale (8pt-ish) */
--space-xs: 4px;  --space-sm: 8px;  --space-md: 16px;
--space-lg: 24px; --space-xl: 32px; --space-2xl: 48px; --space-3xl: 64px;

/* Radii */
--radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-pill: 999px;

/* Borders — bold & solid, always ink */
--border-thick: 3px solid var(--ink);
--border-thin:  2px solid var(--ink);
--border-subtle: 2px solid var(--grey-light);

/* Shadows — hard offset, NO blur (the signature look) */
--shadow-offset:    4px 4px 0 var(--ink);
--shadow-offset-sm: 2px 2px 0 var(--ink);
--shadow-pressed:   1px 1px 0 var(--ink);
```

**The signature:** thick ink borders + a hard offset shadow (no blur). On hover, lift up and grow the shadow; on press, sink and shrink it. This "physical sticker" feel is the heart of the brand — apply it to cards, buttons, pills, badges.

---

## 5. Motion

```css
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);  /* interactions, presses */
--ease-smooth: cubic-bezier(0.2, 0.8, 0.2, 1);     /* reveals, progress */
--duration-fast: 150ms; --duration-medium: 250ms; --duration-slow: 400ms;

--hover-lift: translateY(-2px);
--active-press: translateY(1px);
```

- **Hover:** lift `-2px` + grow shadow (use `--ease-bounce`).
- **Active:** press `+1px` + shrink shadow.
- **Scroll reveal:** fade + `translateY(20px)→0` over `--duration-slow` `--ease-smooth`.
- Always honor `prefers-reduced-motion`.

---

## 6. Components

### Button (`.btn`) — min-height 48px, `--border-thick`, `--radius-md`, offset shadow
| Variant | Background | Text | Border |
|---|---|---|---|
| `--primary` | ink | white | ink (dark mode: light pill + dark text) |
| `--secondary` | white | ink | ink |
| `--coral` | coral | white | ink |
| `--ghost` | transparent | grey-dark → ink on hover | grey-light → ink on hover |
| `--small` | min-height 36px, 12px text, 2px border | | |

### Game panel / card (`.game-panel`, `.panel`)
White surface, `--border-thick`, `--radius-md`, `--shadow-offset-sm`; hover → `--shadow-offset` + lift `-1px`.
- `.panel__header`: sunshine background, ink text, game font 13px, bottom ink border.
- `.panel--quests .panel__header`: ink background, sunshine text, **pixel** font UPPERCASE — the "CURRENT QUESTS" look.
- `.panel--dark`: ink fill, white text, sunshine header text.

### Badge (`.badge`) — pixel font 10px UPPERCASE, pill, `--border-thin`
Variants: `--star` (sunshine), `--sky`, `--mint`, `--coral` (white text), `--purple` (white text).

### Pill (`.pill`) — min-height 32px, pill radius, 2px ink border, 12px/600
Used for filters, skills, tech tags, status. `.is-active` → ink fill + white text. Status: `--status` mint, `--status--active` sunshine, `--status--in-development` coral, `--status--completed` mint.

### Progress / stat meter (`.progress`, `.stat-meter`)
8px tall, grey-light track, 1.5px ink border, pill radius. Fill colors map to palette: `--sunshine / --coral / --sky / --mint / --purple`. Animate width over 0.8s `--ease-smooth`.

### Quest row (`.quest-row`)
Icon chip (32px, ink border, `--radius-sm`) + title (game 13/700) + desc (11px grey) + progress bar + % (pixel) + optional proof pill. The core "quest list" pattern.

---

## 7. Layout

- Container: `max-width: 1040px; margin: 0 auto;`
- Section padding: `64px 24px` desktop → `48px 16px` mobile (`@media max-width: 768px`).
- Section badge → section title pattern at the top of each section.
- `.section--alt`: white panel bg with thin ink top/bottom borders.

---

## 8. Texture & details (the "humanness" layer)

- **Paper grain:** a faint (5% opacity) fractal-noise SVG overlay fixed over the whole page makes the cream read like a notebook. Subtle — don't overdo.
- **Focus state:** `3px solid var(--coral)` outline, 2px offset — always visible, on-brand.
- Pixel-art mascot (boy + Shiba dog), Seoul/Namsan tower skyline, speech bubbles, ⭐❤️⚡ pixel icons, sticky-note callouts ("BUILD · TEST · IMPROVE · REPEAT").

---

## Copy-paste brief (for Claude)

> Design in the **Taeyang Han** style: a playful, game-inspired system on a **cream** (`#FFF7E6`) notebook background.
> **Colors:** sunshine `#FFD859` (primary accent), coral `#FF6B6B`, sky `#6EC6FF`, mint `#7EE6A7`, purple `#B084F5`, ink `#1E1E1E` (text/borders/shadows).
> **Type:** DM Sans (bold, -0.02em tracking) for display/headings, Inter for body, Press Start 2P for tiny UPPERCASE pixel labels/badges only.
> **Signature look:** thick 2–3px **ink borders** + **hard offset shadows with no blur** (`4px 4px 0 #1E1E1E`). On hover, lift 2px and grow the shadow; on press, sink and shrink it — like physical stickers.
> **Shapes:** 8px radii (999px pills), 8pt spacing.
> **Patterns:** frame content as game "panels" with colored headers, "quests" with progress bars and % labels, status pills, badges. Coral/purple fills use white text; sunshine/sky/mint fills use ink text.
> **Tone:** short, clear, encouraging, level-up energy. Optional pixel-art mascot + Seoul skyline.
