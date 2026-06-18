/* @ds-bundle: {"format":3,"namespace":"TaeyangHanDesignSystem_01d505","components":[{"name":"ICON_PATHS","sourcePath":"assets/icons/icons.js"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"QuestRow","sourcePath":"components/core/QuestRow.jsx"}],"sourceHashes":{"assets/icons/icons.js":"6ab0c33f188c","components/core/Badge.jsx":"4affa3bd08ed","components/core/Button.jsx":"7709e94a043a","components/core/Icon.jsx":"60a3780b890b","components/core/Panel.jsx":"f95c7928e7d7","components/core/Pill.jsx":"1e3cdfe59084","components/core/ProgressBar.jsx":"1bbd10b59f00","components/core/QuestRow.jsx":"615efea347ff","ui_kits/portfolio/About.jsx":"1df7b5663d12","ui_kits/portfolio/Footer.jsx":"43b704aadbb5","ui_kits/portfolio/Hero.jsx":"16d521be7334","ui_kits/portfolio/Nav.jsx":"e08d060c18dc","ui_kits/portfolio/Specializations.jsx":"4dd790b1700d","ui_kits/portfolio/data.js":"62c30f28312d"},"inlinedExternals":[],"unexposedExports":[{"name":"iconSvg","sourcePath":"assets/icons/icons.js"},{"name":"injectIcons","sourcePath":"assets/icons/icons.js"}]} */

(() => {

const __ds_ns = (window.TaeyangHanDesignSystem_01d505 = window.TaeyangHanDesignSystem_01d505 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/icons.js
try { (() => {
// Taeyang Han — icon set.
// Lucide-style stroke icons (24×24, stroke-width 2, round caps) ported from the
// live portfolio (src/lib/icons.js). The brand uses these for domain/nav glyphs;
// emoji are used SEPARATELY as expressive accents (see ICONOGRAPHY in README).
const ICON_PATHS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6l-4.6 8.2A1.5 1.5 0 0 0 6.7 20h10.6a1.5 1.5 0 0 0 1.3-2.2L14 9V3"/><path d="M7.5 15h9"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.3 2.7 3 6 3s6-1.7 6-3v-5"/>',
  dashboard: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
};
function iconSvg(name, size = 24) {
  const p = ICON_PATHS[name];
  if (!p) return '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
function injectIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(el => {
    const svg = iconSvg(el.dataset.icon);
    if (svg) el.innerHTML = svg;
  });
}
Object.assign(__ds_scope, { ICON_PATHS, iconSvg, injectIcons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icons.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.thds-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-pixel); font-size: 10px; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 10px; border: var(--border-thin); border-radius: var(--radius-pill);
  background: var(--bg-panel); color: var(--ink); white-space: nowrap; line-height: 1;
}
.thds-badge--star   { border-color: var(--sunshine); background: var(--sunshine); color: var(--ink); }
.thds-badge--sky    { border-color: var(--sky);      background: var(--sky);      color: var(--ink); }
.thds-badge--mint   { border-color: var(--mint);     background: var(--mint);     color: var(--ink); }
.thds-badge--coral  { border-color: var(--coral);    background: var(--coral);    color: #fff; }
.thds-badge--purple { border-color: var(--purple);   background: var(--purple);   color: #fff; }
.thds-badge--ghost  { border-color: var(--ink);      background: var(--bg-panel); color: var(--ink); }
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-badge-css')) {
  const s = document.createElement('style');
  s.id = 'thds-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Tiny pixel-font UPPERCASE pill — the brand's micro-label. Use for status,
 * categories, "NEW", XP tags. Coral/purple fills get white text; others get ink.
 */
function Badge({
  tone = 'star',
  children,
  className = '',
  ...rest
}) {
  const cls = ['thds-badge', `thds-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Inject component CSS once (self-contained; references design-system tokens).
const CSS = `
.thds-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 48px; padding: 0 20px;
  font-family: var(--font-game); font-size: 14px; font-weight: 700;
  border-radius: var(--radius-md); border: var(--border-thick);
  cursor: pointer; position: relative; white-space: nowrap;
  box-shadow: var(--shadow-offset-sm);
  transition: transform var(--duration-fast) var(--ease-bounce),
              box-shadow var(--duration-fast) var(--ease-bounce);
}
.thds-btn:hover  { transform: var(--hover-lift); box-shadow: var(--shadow-offset); }
.thds-btn:active { transform: var(--active-press); box-shadow: var(--shadow-pressed); }
.thds-btn:focus-visible { outline: 3px solid var(--coral); outline-offset: 2px; }
.thds-btn--primary   { background: var(--ink); color: var(--text-on-dark); border-color: var(--ink); }
.thds-btn--secondary { background: var(--bg-panel); color: var(--ink); border-color: var(--ink); }
.thds-btn--coral     { background: var(--coral); color: #fff; border-color: var(--ink); }
.thds-btn--ghost     { background: transparent; color: var(--grey-dark); border-color: var(--grey-light); font-size: 12px; box-shadow: none; }
.thds-btn--ghost:hover { border-color: var(--ink); color: var(--ink); box-shadow: var(--shadow-offset-sm); }
.thds-btn--small  { min-height: 36px; padding: 0 14px; font-size: 12px; border-width: 2px; }
.thds-btn:disabled, .thds-btn[aria-disabled="true"] {
  opacity: 0.45; cursor: not-allowed; pointer-events: none;
  transform: none; box-shadow: var(--shadow-pressed);
}
[data-theme="dark"] .thds-btn--primary { color: var(--bg-primary); }
.thds-btn__icon { display: inline-flex; line-height: 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-btn-css')) {
  const s = document.createElement('style');
  s.id = 'thds-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The brand's primary action — chunky, ink-bordered, hard offset shadow that
 * lifts on hover and sinks on press (the "physical sticker" feel).
 */
function Button({
  variant = 'primary',
  size = 'medium',
  icon = null,
  iconRight = false,
  href,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['thds-btn', `thds-btn--${variant}`, size === 'small' ? 'thds-btn--small' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && !iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "thds-btn__icon"
  }, icon) : null, children, icon && iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "thds-btn__icon"
  }, icon) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucide-style stroke icon (24×24, weight 2, round caps) drawn in `currentColor`.
 * Names: globe, flask, code, users, cap, dashboard, book, award, check, arrowRight, external.
 */
function Icon({
  name,
  size = 24,
  className = '',
  style,
  ...rest
}) {
  const p = __ds_scope.ICON_PATHS[name];
  if (!p) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: className,
    style: {
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: p
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.thds-panel {
  background: var(--bg-panel);
  border: var(--border-thick);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-fast) var(--ease-bounce),
              transform var(--duration-fast) var(--ease-bounce);
}
.thds-panel--hoverable:hover { box-shadow: var(--shadow-offset); transform: translateY(-1px); }
.thds-panel--dark { background: var(--ink); border-color: var(--ink); color: var(--text-on-dark); }
.thds-panel__header {
  font-family: var(--font-game); font-size: 13px; font-weight: 700;
  padding: 12px 16px; border-bottom: var(--border-thin);
  background: var(--sunshine); color: var(--ink);
  display: flex; align-items: center; gap: 6px;
}
.thds-panel--dark .thds-panel__header {
  background: var(--ink); color: var(--sunshine); border-bottom-color: rgba(255,255,255,0.12);
}
.thds-panel--quests .thds-panel__header {
  background: var(--ink); color: var(--sunshine); border-bottom-color: rgba(255,255,255,0.12);
  font-family: var(--font-pixel); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
}
.thds-panel__body { padding: 12px 16px; display: flex; flex-direction: column; gap: 10px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-panel-css')) {
  const s = document.createElement('style');
  s.id = 'thds-panel-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The core "game panel" surface — white card, thick ink border, offset shadow,
 * with an optional colored header. `variant="quests"` gives the ink+pixel
 * "CURRENT QUESTS" header treatment; `variant="dark"` is the ink-filled panel.
 */
function Panel({
  title = null,
  headerRight = null,
  variant = 'default',
  hoverable = false,
  children,
  className = '',
  bodyClassName = '',
  ...rest
}) {
  const cls = ['thds-panel', variant !== 'default' ? `thds-panel--${variant}` : '', hoverable ? 'thds-panel--hoverable' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), title != null && /*#__PURE__*/React.createElement("div", {
    className: "thds-panel__header"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title), headerRight), /*#__PURE__*/React.createElement("div", {
    className: ['thds-panel__body', bodyClassName].filter(Boolean).join(' ')
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.thds-pill {
  display: inline-flex; align-items: center; gap: 6px;
  min-height: 32px; padding: 0 12px;
  font-family: var(--font-body); font-size: 12px; font-weight: 600;
  border-radius: var(--radius-pill); border: 2px solid var(--ink);
  background: var(--bg-panel); color: var(--ink);
  transition: transform var(--duration-fast) var(--ease-bounce),
              box-shadow var(--duration-fast) var(--ease-bounce),
              background var(--duration-fast), color var(--duration-fast);
}
.thds-pill--interactive { cursor: pointer; }
.thds-pill--interactive:hover  { transform: var(--hover-lift); box-shadow: var(--shadow-offset-sm); }
.thds-pill--interactive:active { transform: var(--active-press); box-shadow: var(--shadow-pressed); }
.thds-pill--interactive:focus-visible { outline: 3px solid var(--coral); outline-offset: 2px; }
.thds-pill.is-active { background: var(--ink); color: var(--text-on-dark); box-shadow: var(--shadow-offset-sm); transform: translateY(-1px); }
.thds-pill--mint     { background: var(--mint);     color: var(--ink); }
.thds-pill--sunshine { background: var(--sunshine); color: var(--ink); }
.thds-pill--coral    { background: var(--coral);    color: var(--ink); }
.thds-pill--sky      { background: var(--sky);      color: var(--ink); }
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-pill-css')) {
  const s = document.createElement('style');
  s.id = 'thds-pill-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Rounded 2px-ink-border chip for filters, skills, tech tags, and status.
 * Set `active` for the ink-filled selected state, or `tone` for a status color.
 */
function Pill({
  tone = 'default',
  active = false,
  interactive = false,
  as = 'span',
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['thds-pill', tone !== 'default' ? `thds-pill--${tone}` : '', interactive ? 'thds-pill--interactive' : '', active ? 'is-active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.thds-progress {
  width: 100%; height: 8px;
  background: var(--grey-light);
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-pill);
  overflow: hidden;
}
.thds-progress__fill { height: 100%; border-radius: var(--radius-pill); transition: width 0.8s var(--ease-smooth); }
.thds-progress__fill--sunshine { background: var(--sunshine); }
.thds-progress__fill--coral    { background: var(--coral); }
.thds-progress__fill--sky      { background: var(--sky); }
.thds-progress__fill--mint     { background: var(--mint); }
.thds-progress__fill--purple   { background: var(--purple); }
.thds-progress__fill--ink      { background: var(--ink); }
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-progress-css')) {
  const s = document.createElement('style');
  s.id = 'thds-progress-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Slim ink-outlined progress / XP / stat meter. Fill color maps to the palette;
 * the bar animates its width over 0.8s.
 */
function ProgressBar({
  value = 0,
  color = 'sunshine',
  className = '',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['thds-progress', className].filter(Boolean).join(' '),
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `thds-progress__fill thds-progress__fill--${color}`,
    style: {
      width: `${pct}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/QuestRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.thds-quest {
  display: flex; align-items: center; gap: 10px;
  padding: 8px; text-decoration: none; color: inherit;
  border-radius: var(--radius-sm);
  transition: background var(--duration-fast), transform var(--duration-fast);
}
.thds-quest--link { cursor: pointer; }
.thds-quest--link:hover  { background: var(--bg-primary); }
.thds-quest--link:active { transform: var(--active-press); }
.thds-quest--link:focus-visible { outline: 2px solid var(--coral); outline-offset: -2px; }
.thds-quest + .thds-quest { border-top: 1px solid var(--grey-light); margin-top: 2px; padding-top: 10px; }
.thds-quest__icon {
  flex-shrink: 0; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; line-height: 0;
  background: var(--bg-primary); border: 2px solid var(--ink); border-radius: var(--radius-sm);
}
.thds-quest__info  { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.thds-quest__title { font-family: var(--font-game); font-size: 13px; font-weight: 700; color: var(--ink); line-height: 1.3; }
.thds-quest__desc  { font-size: 11px; color: var(--grey-dark); line-height: 1.4; margin-bottom: 4px; }
.thds-quest__prow  { display: flex; align-items: center; gap: 8px; margin-top: 4px; }
.thds-quest__pct {
  font-family: var(--font-pixel); font-size: 11px; font-weight: 700; color: var(--ink);
  flex-shrink: 0; min-width: 28px; text-align: right;
}
.thds-quest__proof {
  flex-shrink: 0; margin-left: auto; align-self: center;
  font-family: var(--font-pixel); font-size: 10px; font-weight: 700; color: var(--ink);
  background: var(--bg-primary); border: 2px solid var(--ink); border-radius: var(--radius-pill);
  padding: 3px 9px; white-space: nowrap; line-height: 1.2;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('thds-quest-css')) {
  const s = document.createElement('style');
  s.id = 'thds-quest-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The "quest list" row — icon chip + title + description, with an optional
 * progress bar + pixel % or a "proof" pill on the right. Renders as an <a> when
 * `href` is set. This is the brand's core list-item pattern.
 */
function QuestRow({
  icon,
  title,
  desc,
  progress = null,
  progressColor = 'sunshine',
  proof = null,
  href,
  className = '',
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  const cls = ['thds-quest', href ? 'thds-quest--link' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__icon",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__title"
  }, title), desc != null && /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__desc"
  }, desc), progress != null && /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__prow"
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: progress,
    color: progressColor
  }), /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__pct"
  }, progress, "%"))), proof != null && /*#__PURE__*/React.createElement("span", {
    className: "thds-quest__proof"
  }, proof));
}
Object.assign(__ds_scope, { QuestRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuestRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// Manifesto band + journey timeline.
const {
  Pill: AbPill
} = window.TaeyangHanDesignSystem_01d505;
const abStyles = {
  manifesto: {
    background: 'var(--surface-invert)',
    color: '#fff',
    padding: '40px 24px'
  },
  mInner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr',
    gap: 28
  },
  label: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--sunshine)',
    margin: '0 0 12px'
  },
  story: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.88)',
    margin: 0
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  li: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.88)',
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  },
  dot: {
    color: 'var(--mint)'
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  },
  techPill: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 30,
    padding: '0 12px',
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    background: 'rgba(255,255,255,0.12)',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.2)'
  },
  journey: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '48px 24px'
  },
  jLabel: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--grey-dark)',
    margin: '0 0 20px'
  },
  track: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: 0,
    overflowX: 'auto'
  },
  stop: {
    flex: 1,
    minWidth: 150,
    position: 'relative',
    paddingTop: 22,
    paddingRight: 14
  },
  line: {
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    height: 2,
    background: 'var(--grey-light)'
  },
  jdot: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    borderRadius: '50%',
    background: 'var(--sunshine)',
    border: '2px solid var(--ink)'
  },
  jdotNow: {
    background: 'var(--coral)'
  },
  year: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 15,
    color: 'var(--ink)'
  },
  event: {
    fontSize: 12,
    color: 'var(--grey-dark)',
    lineHeight: 1.5,
    marginTop: 4,
    display: 'block',
    maxWidth: 160
  }
};
function PortfolioAbout() {
  const stack = ['Claude Code', 'Next.js', 'Python', 'Flask', 'PostgreSQL', 'TypeScript'];
  const beliefs = ['Systems beat willpower', 'Build to understand', 'Real proof, not self-score'];
  const j = window.PORTFOLIO.journey;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: abStyles.manifesto,
    "aria-label": "About"
  }, /*#__PURE__*/React.createElement("div", {
    style: abStyles.mInner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: abStyles.label
  }, "The Short Version"), /*#__PURE__*/React.createElement("p", {
    style: abStyles.story
  }, "Malaysian, based in Seoul. I study chemical engineering at Sogang, build software, and interpret Korean\u2013English\u2013Malay \u2014 three things I do because they genuinely interest me.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: abStyles.label
  }, "What I Believe"), /*#__PURE__*/React.createElement("ul", {
    style: abStyles.list
  }, beliefs.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: abStyles.li
  }, /*#__PURE__*/React.createElement("span", {
    style: abStyles.dot
  }, "\u25C6"), b)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: abStyles.label
  }, "Daily Stack"), /*#__PURE__*/React.createElement("div", {
    style: abStyles.pills
  }, stack.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: abStyles.techPill
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    style: abStyles.journey,
    "aria-label": "Journey"
  }, /*#__PURE__*/React.createElement("p", {
    style: abStyles.jLabel
  }, "Journey"), /*#__PURE__*/React.createElement("ol", {
    style: abStyles.track
  }, j.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.year,
    style: abStyles.stop
  }, /*#__PURE__*/React.createElement("span", {
    style: abStyles.line
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...abStyles.jdot,
      ...(s.now ? abStyles.jdotNow : {})
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: abStyles.year
  }, s.year), /*#__PURE__*/React.createElement("span", {
    style: abStyles.event
  }, s.event))))));
}
window.PortfolioAbout = PortfolioAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Contact section + footer band with signature.
const {
  Panel: FPanel,
  Button: FButton
} = window.TaeyangHanDesignSystem_01d505;
const ftStyles = {
  contact: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '48px 24px'
  },
  badge: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--grey-dark)'
  },
  title: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)',
    letterSpacing: '-0.02em',
    margin: '10px 0 6px',
    color: 'var(--ink)'
  },
  sub: {
    fontSize: 14,
    color: 'var(--grey-dark)',
    maxWidth: 560,
    margin: '0 0 24px',
    lineHeight: 1.6
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16
  },
  cardLabel: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 9,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--grey-dark)',
    margin: '0 0 10px'
  },
  response: {
    fontSize: 12,
    color: 'var(--grey-dark)',
    margin: '10px 0 0'
  },
  langs: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontSize: 14,
    color: 'var(--ink)'
  },
  findLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  findLink: {
    fontFamily: 'var(--font-game)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--ink)',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  footer: {
    background: 'var(--surface-invert)',
    color: '#fff',
    padding: '36px 24px'
  },
  fInner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap'
  },
  tagline: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: '-0.02em',
    margin: 0
  },
  sign: {
    fontFamily: 'var(--font-hand)',
    fontSize: 30,
    color: 'var(--sunshine)'
  },
  note: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 4
  }
};
function PortfolioFooter() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: ftStyles.contact
  }, /*#__PURE__*/React.createElement("p", {
    style: ftStyles.badge
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: ftStyles.title
  }, "Start a quest together"), /*#__PURE__*/React.createElement("p", {
    style: ftStyles.sub
  }, "I'm a student open to internships, collaborations, and interesting problems. Not available for full-time until 2027."), /*#__PURE__*/React.createElement("div", {
    style: ftStyles.grid
  }, /*#__PURE__*/React.createElement(FPanel, null, /*#__PURE__*/React.createElement("p", {
    style: ftStyles.cardLabel
  }, "Primary contact"), /*#__PURE__*/React.createElement(FButton, {
    variant: "coral",
    size: "small"
  }, "Email me \u2192"), /*#__PURE__*/React.createElement("p", {
    style: ftStyles.response
  }, "Typically responds within 24 h")), /*#__PURE__*/React.createElement(FPanel, null, /*#__PURE__*/React.createElement("p", {
    style: ftStyles.cardLabel
  }, "Available to work in"), /*#__PURE__*/React.createElement("div", {
    style: ftStyles.langs
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDEC\uD83C\uDDE7 English"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDF0\uD83C\uDDF7 \uD55C\uAD6D\uC5B4"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDE8\uD83C\uDDF3 \u4E2D\u6587"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDF2\uD83C\uDDFE Malay"))), /*#__PURE__*/React.createElement(FPanel, null, /*#__PURE__*/React.createElement("p", {
    style: ftStyles.cardLabel
  }, "Find me"), /*#__PURE__*/React.createElement("div", {
    style: ftStyles.findLinks
  }, /*#__PURE__*/React.createElement("a", {
    style: ftStyles.findLink,
    href: "#"
  }, "GitHub \u2197"), /*#__PURE__*/React.createElement("a", {
    style: ftStyles.findLink,
    href: "#"
  }, "LinkedIn \u2197"), /*#__PURE__*/React.createElement("a", {
    style: ftStyles.findLink,
    href: "#"
  }, "\u5C0F\u7EA2\u4E66 \u2197"))))), /*#__PURE__*/React.createElement("footer", {
    style: ftStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: ftStyles.fInner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: ftStyles.tagline
  }, "Build systems. Level up life."), /*#__PURE__*/React.createElement("p", {
    style: ftStyles.note
  }, "Thanks for stopping by \u2014 now go build something.")), /*#__PURE__*/React.createElement("span", {
    style: ftStyles.sign
  }, "Taeyang Han"))));
}
window.PortfolioFooter = PortfolioFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — "Game Start Screen": player-profile panel + current-quests panel + build strip.
const {
  Panel: HPanel,
  Badge: HBadge,
  Button: HButton,
  QuestRow: HQuestRow
} = window.TaeyangHanDesignSystem_01d505;
const HIcon = window.TaeyangHanDesignSystem_01d505.Icon || (({
  name,
  size = 24,
  style
}) => {
  const p = window.TaeyangHanDesignSystem_01d505.ICON_PATHS[name];
  return p ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: p
    }
  }) : null;
});
const heroStyles = {
  wrap: {
    position: 'relative',
    padding: '40px 24px 48px',
    overflow: 'hidden'
  },
  bg: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backgroundImage: 'linear-gradient(180deg, color-mix(in srgb, var(--sky) 22%, var(--bg-primary)) 0%, var(--bg-primary) 55%)'
  },
  inner: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: 24,
    alignItems: 'start'
  },
  top: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start'
  },
  avatar: {
    position: 'relative',
    flexShrink: 0
  },
  img: {
    width: 96,
    height: 96,
    borderRadius: 'var(--radius-md)',
    border: 'var(--border-thick)',
    objectFit: 'cover',
    display: 'block'
  },
  lvl: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'var(--font-pixel)',
    fontSize: 8,
    background: 'var(--ink)',
    color: 'var(--sunshine)',
    padding: '3px 6px',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap'
  },
  hello: {
    fontFamily: 'var(--font-hand)',
    fontSize: 22,
    color: 'var(--grey-dark)',
    lineHeight: 1
  },
  greeting: {
    fontFamily: 'var(--font-game)',
    fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    margin: '2px 0 6px',
    color: 'var(--ink)'
  },
  name: {
    color: 'var(--coral)'
  },
  roles: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 10
  },
  role: {
    fontFamily: 'var(--font-game)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--grey-dark)'
  },
  stats: {
    display: 'flex',
    gap: 22,
    margin: '4px 0 4px'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column'
  },
  statLabel: {
    fontSize: 11,
    color: 'var(--grey-dark)'
  },
  statVal: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 20,
    color: 'var(--ink)'
  },
  speech: {
    position: 'relative',
    background: 'var(--bg-panel)',
    border: 'var(--border-thick)',
    borderRadius: 'var(--radius-md)',
    padding: '14px 16px',
    boxShadow: 'var(--shadow-offset-sm)'
  },
  speechP: {
    fontFamily: 'var(--font-hand)',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: 0
  },
  actions: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 4
  },
  strip: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 'var(--container-max)',
    margin: '28px auto 0',
    padding: '14px 20px',
    textAlign: 'center',
    fontFamily: 'var(--font-pixel)',
    fontSize: 12,
    letterSpacing: '0.1em',
    color: 'var(--ink)',
    borderTop: 'var(--border-thin)',
    borderBottom: 'var(--border-thin)'
  },
  stripChip: {
    display: 'inline-block',
    padding: '2px 10px',
    background: 'var(--sunshine)',
    border: '2px solid var(--ink)',
    borderRadius: 'var(--radius-pill)',
    margin: '0 4px'
  }
};
function PortfolioHero({
  onCopyEmail,
  copied
}) {
  const quests = window.PORTFOLIO.quests;
  return /*#__PURE__*/React.createElement("header", {
    id: "hero",
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.bg,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.inner
  }, /*#__PURE__*/React.createElement(HPanel, {
    title: "Player Profile",
    headerRight: /*#__PURE__*/React.createElement(HBadge, {
      tone: "mint"
    }, "Building")
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.top
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.avatar
  }, /*#__PURE__*/React.createElement("img", {
    style: heroStyles.img,
    src: "../../assets/img/hero-sm.webp",
    alt: "Portrait of Taeyang Han"
  }), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.lvl
  }, "LVL.24")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.hello
  }, "\uD83D\uDC4B Hi"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.greeting
  }, "I'm ", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.name
  }, "Taeyang Han")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.roles
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.role
  }, "Systems Builder"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.role
  }, "Language Explorer"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.role
  }, "Life Designer")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.stats
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stat
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statVal
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statLabel
  }, "Languages")), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stat
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statVal
  }, "30+"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statLabel
  }, "Certificates")), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stat
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statVal
  }, "5yrs"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.statLabel
  }, "Building"))))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.speech
  }, /*#__PURE__*/React.createElement("p", {
    style: heroStyles.speechP
  }, "I build fun, practical systems that help people learn, live better, and chase big goals.")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.actions
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    onClick: () => document.querySelector('#specializations').scrollIntoView({
      behavior: 'smooth'
    })
  }, "Start Quest"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    onClick: onCopyEmail
  }, copied ? 'Copied ✓' : 'Copy Email'), /*#__PURE__*/React.createElement(HButton, {
    variant: "ghost"
  }, "Download CV"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(HPanel, {
    title: "Current Quests",
    variant: "quests"
  }, quests.map(q => /*#__PURE__*/React.createElement(HQuestRow, {
    key: q.title,
    href: q.href,
    icon: /*#__PURE__*/React.createElement(HIcon, {
      name: q.icon,
      size: 16
    }),
    title: q.title,
    desc: q.desc,
    proof: q.proof,
    onClick: e => {
      e.preventDefault();
      const el = document.querySelector(q.href);
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.strip
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stripChip
  }, "BUILD"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stripChip
  }, "TEST"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stripChip
  }, "IMPROVE"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.stripChip
  }, "REPEAT")));
}
window.PortfolioHero = PortfolioHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Portfolio nav — fixed bar, logo lockup, links, theme + lang toggles.
const navStyles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'color-mix(in srgb, var(--bg-primary) 82%, transparent)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderBottom: 'var(--border-thick)'
  },
  inner: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 24px',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    gap: 16
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginRight: 'auto',
    textDecoration: 'none'
  },
  mark: {
    width: 34,
    height: 34,
    borderRadius: 8
  },
  word: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 17,
    letterSpacing: '-0.02em',
    color: 'var(--ink)'
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: 26
  },
  link: {
    fontFamily: 'var(--font-game)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0
  },
  toggle: {
    borderRadius: 'var(--radius-pill)',
    border: '2px solid var(--ink)',
    background: 'transparent',
    height: 34,
    padding: '0 12px',
    fontSize: 12,
    fontWeight: 700,
    color: 'var(--ink)',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)'
  },
  iconBtn: {
    width: 34,
    height: 34,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-sm)',
    border: '2px solid var(--ink)',
    background: 'transparent',
    color: 'var(--ink)',
    cursor: 'pointer',
    fontSize: 15
  }
};
function PortfolioNav({
  theme,
  onToggleTheme
}) {
  const links = [['About', '#hero'], ['Work', '#specializations'], ['Opinions', '#opinions'], ['Contact', '#contact']];
  const go = h => {
    const el = document.querySelector(h);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: navStyles.inner
  }, /*#__PURE__*/React.createElement("a", {
    style: navStyles.brand,
    onClick: e => {
      e.preventDefault();
      go('#hero');
    },
    href: "#hero"
  }, /*#__PURE__*/React.createElement("img", {
    style: navStyles.mark,
    src: "../../assets/logo/favicon.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: navStyles.word
  }, "Taeyang Han")), /*#__PURE__*/React.createElement("div", {
    className: "pf-nav-links",
    style: navStyles.links
  }, links.map(([label, h]) => /*#__PURE__*/React.createElement("button", {
    key: h,
    style: navStyles.link,
    onClick: () => go(h),
    onMouseEnter: e => e.currentTarget.style.color = 'var(--ink)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-secondary)'
  }, label))), /*#__PURE__*/React.createElement("button", {
    style: navStyles.iconBtn,
    "aria-label": "Toggle theme",
    onClick: onToggleTheme
  }, theme === 'dark' ? '☀' : '◐'), /*#__PURE__*/React.createElement("button", {
    style: navStyles.toggle
  }, "EN\xA0\xB7\xA0\u4E2D\u6587\xA0\xB7\xA0\uD55C\uAD6D\uC5B4")));
}
window.PortfolioNav = PortfolioNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Specializations.jsx
try { (() => {
// Specializations — sticky tab bar + interactive domain panel (the core "Work" section).
const {
  Panel: SPanel,
  Pill: SPill,
  Badge: SBadge,
  Button: SButton,
  ProgressBar: SProgress
} = window.TaeyangHanDesignSystem_01d505;
const SIcon = window.TaeyangHanDesignSystem_01d505.Icon || (({
  name,
  size = 24,
  style
}) => {
  const p = window.TaeyangHanDesignSystem_01d505.ICON_PATHS[name];
  return p ? /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: p
    }
  }) : null;
});
const spStyles = {
  section: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '8px 24px 56px'
  },
  title: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    margin: '12px 0 6px',
    color: 'var(--ink)'
  },
  sub: {
    fontSize: 15,
    color: 'var(--grey-dark)',
    margin: '0 0 22px'
  },
  tabs: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 22,
    position: 'sticky',
    top: 60,
    zIndex: 20,
    background: 'var(--bg-primary)',
    padding: '10px 0'
  },
  tab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    cursor: 'pointer'
  },
  panelGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 20,
    alignItems: 'start'
  },
  domainHead: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4
  },
  emoji: {
    fontSize: 26
  },
  dTitle: {
    fontFamily: 'var(--font-game)',
    fontWeight: 800,
    fontSize: 20,
    color: 'var(--ink)',
    letterSpacing: '-0.02em'
  },
  headline: {
    fontFamily: 'var(--font-game)',
    fontWeight: 700,
    fontSize: 16,
    color: 'var(--ink)',
    margin: '8px 0 6px'
  },
  blurb: {
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--grey-dark)',
    margin: '0 0 14px'
  },
  masteryRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16
  },
  masteryLabel: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 9,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--grey-dark)',
    whiteSpace: 'nowrap'
  },
  pct: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 11,
    color: 'var(--ink)'
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  item: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    fontSize: 13,
    color: 'var(--ink)'
  },
  check: {
    color: 'var(--mint)',
    flexShrink: 0
  },
  shot: {
    width: '100%',
    aspectRatio: '16/10',
    objectFit: 'cover',
    borderRadius: 'var(--radius-sm)',
    border: '2px solid var(--ink)',
    display: 'block',
    marginBottom: 10
  },
  fTitle: {
    fontFamily: 'var(--font-game)',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--ink)',
    margin: '2px 0'
  },
  fMeta: {
    fontSize: 12,
    color: 'var(--grey-dark)',
    lineHeight: 1.5,
    marginBottom: 10
  }
};
function PortfolioSpecs() {
  const domains = window.PORTFOLIO.domains;
  const [active, setActive] = React.useState(domains[0].id);
  const d = domains.find(x => x.id === active);
  return /*#__PURE__*/React.createElement("section", {
    id: "specializations",
    style: spStyles.section
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: "ghost"
  }, "\u2605 Specializations"), /*#__PURE__*/React.createElement("h2", {
    style: spStyles.title
  }, "What I Build & Why It Matters"), /*#__PURE__*/React.createElement("p", {
    style: spStyles.sub
  }, "Five domains. Five years of deliberate practice. One integrated story."), /*#__PURE__*/React.createElement("div", {
    style: spStyles.tabs
  }, domains.map(x => /*#__PURE__*/React.createElement(SPill, {
    key: x.id,
    interactive: true,
    active: x.id === active,
    as: "button",
    onClick: () => setActive(x.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: spStyles.tab
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: x.icon,
    size: 16
  }), " ", x.tab)))), /*#__PURE__*/React.createElement("div", {
    id: d.id,
    style: spStyles.panelGrid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: spStyles.domainHead
  }, /*#__PURE__*/React.createElement("span", {
    style: spStyles.emoji
  }, d.emoji), /*#__PURE__*/React.createElement("span", {
    style: spStyles.dTitle
  }, d.tab)), /*#__PURE__*/React.createElement("p", {
    style: spStyles.headline
  }, d.headline), /*#__PURE__*/React.createElement("p", {
    style: spStyles.blurb
  }, d.blurb), /*#__PURE__*/React.createElement("div", {
    style: spStyles.masteryRow
  }, /*#__PURE__*/React.createElement("span", {
    style: spStyles.masteryLabel
  }, "Mastery"), /*#__PURE__*/React.createElement(SProgress, {
    value: d.mastery,
    color: d.accent
  }), /*#__PURE__*/React.createElement("span", {
    style: spStyles.pct
  }, d.mastery, "%")), /*#__PURE__*/React.createElement("div", {
    style: spStyles.items
  }, d.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: spStyles.item
  }, /*#__PURE__*/React.createElement("span", {
    style: spStyles.check
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "check",
    size: 16
  })), it)))), /*#__PURE__*/React.createElement(SPanel, {
    hoverable: true
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: d.accent === 'sunshine' ? 'star' : d.accent
  }, "Featured"), /*#__PURE__*/React.createElement("img", {
    style: spStyles.shot,
    src: `../../assets/projects/${d.featured.img}.webp`,
    alt: d.featured.title
  }), /*#__PURE__*/React.createElement("p", {
    style: spStyles.fTitle
  }, d.featured.title), /*#__PURE__*/React.createElement("p", {
    style: spStyles.fMeta
  }, d.featured.meta), /*#__PURE__*/React.createElement(SButton, {
    variant: "coral",
    size: "small",
    icon: /*#__PURE__*/React.createElement(SIcon, {
      name: "external",
      size: 15
    }),
    iconRight: true
  }, d.featured.tag))));
}
window.PortfolioSpecs = PortfolioSpecs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Specializations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Portfolio UI-kit content — lifted from the live site (profile.json / specializations.js).
window.PORTFOLIO = {
  quests: [{
    icon: 'dashboard',
    title: 'LifeOS',
    desc: 'Build my personal operating system',
    proof: 'LIVE',
    href: '#builder'
  }, {
    icon: 'flask',
    title: 'Reaction Simulator',
    desc: 'Interactive CSTR/PFR reactor network',
    proof: 'LIVE',
    href: '#engineer'
  }, {
    icon: 'users',
    title: 'PALS Mentoring',
    desc: '150+ students. Still growing.',
    proof: '150+',
    href: '#community'
  }, {
    icon: 'globe',
    title: 'Language Learning',
    desc: '5 languages. One adventure.',
    proof: 'TOPIK 6',
    href: '#linguist'
  }, {
    icon: 'book',
    title: 'Case Studies',
    desc: 'Projects & field notes',
    proof: '↗',
    href: '#opinions'
  }],
  journey: [{
    year: '2021',
    event: 'First app shipped — personal accounting system (still running)'
  }, {
    year: '2022',
    event: 'Sogang University — dual degree + full-tuition scholarship'
  }, {
    year: '2023',
    event: "Interpreter for Supreme Prosecutors' Office · TOPIK 6 (265/300)"
  }, {
    year: '2024',
    event: 'PALS Co-President · Samsung Dream Scholar · 4 apps deployed'
  }, {
    year: '2025',
    event: 'APEC interpreter (Yonhap News) · LifeOS launched · 6 apps live'
  }, {
    year: '2026 →',
    event: 'BLCU exchange · TA at Sogang · Building in public',
    now: true
  }],
  domains: [{
    id: 'linguist',
    tab: 'Linguist',
    icon: 'globe',
    emoji: '🌐',
    accent: 'sky',
    mastery: 90,
    headline: 'Official Korean–English–Malay interpreter',
    blurb: 'Diplomatic-level interpretation for government and institutional clients. Work covered by Yonhap News Agency.',
    featured: {
      title: 'APEC Cooperation Dialogue',
      meta: 'Gyeongbuk Governor ↔ Malaysian Ambassador · Feb 2025',
      img: 'apec_cooperation_dialogue',
      tag: 'Yonhap News ↗'
    },
    items: ['Gyeongbuk Provincial Government', "Supreme Prosecutors' Office", 'Anti-Corruption & Civil Rights Commission', 'Sogang University OIA', 'Malaysian Embassy Seoul']
  }, {
    id: 'engineer',
    tab: 'Engineer',
    icon: 'flask',
    emoji: '⚗️',
    accent: 'coral',
    mastery: 85,
    headline: 'Tools that make process engineering tangible',
    blurb: 'Chemical Engineering + Business dual degree at Sogang. Teaching Assistant ×3. I build interactive simulators for things textbooks only describe.',
    featured: {
      title: 'Reaction Simulator',
      meta: 'CSTR/PFR network · Levenspiel plots · thermal diagram',
      img: 'reaction_simulator',
      tag: 'Live ↗'
    },
    items: ['Fugacity Simulator — Peng-Robinson EOS', 'Process Game', 'Apple SCM Analysis', 'LP Diet Optimization']
  }, {
    id: 'builder',
    tab: 'Builder',
    icon: 'code',
    emoji: '💻',
    accent: 'mint',
    mastery: 87,
    headline: '6 deployed systems across full-stack & ML',
    blurb: '5 years building. First app shipped 2021, still in production. Next.js, Flask, PostgreSQL, TensorFlow.',
    featured: {
      title: 'LifeOS',
      meta: 'Unified life OS · 6 domains · LP macro optimizer',
      img: 'lifeos',
      tag: 'Live ↗'
    },
    items: ['Bullwhip Effect Simulator', 'Personal Accounting System (5+ yrs)', 'CNN Emotion Classifier', 'Scholarship writing system']
  }, {
    id: 'community',
    tab: 'Community',
    icon: 'users',
    emoji: '🤝',
    accent: 'purple',
    mastery: 92,
    headline: 'PALS President · 150+ mentees',
    blurb: 'Led an international peer-mentoring org across 4 semesters. Authored its first constitution. Samsung Dream Scholars President for a 210+ scholar camp.',
    featured: {
      title: 'PALS Co-President',
      meta: 'Peer Assisted Learning System · Sogang University',
      img: 'pals_copresident',
      tag: 'Award ↗'
    },
    items: ['Samsung Dream Scholars President', 'SEA Study Club President', 'Event Host / Emcee ×7', 'Rainbow Stepping Stone mentor']
  }, {
    id: 'scholar',
    tab: 'Scholar',
    icon: 'cap',
    emoji: '📊',
    accent: 'sunshine',
    mastery: 88,
    headline: '7 scholarships across 4 institutions',
    blurb: 'Samsung Dream Scholarship (Global Hope), Lee & Won Excellence Award, Sogang full-tuition admission scholarship, and recurring alumni awards.',
    featured: {
      title: 'Samsung Dream Scholarship',
      meta: 'Global Hope · 5 semesters · panel selection',
      img: 'samsung_dream_scholars_president',
      tag: 'Webzine ↗'
    },
    items: ['Lee & Won Asian Fellowship — Excellence', 'Sogang 1st-Class Admission — full tuition', 'Sogang Alumni Scholarship ×4', 'TOPIK 6 (265/300)']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.QuestRow = __ds_scope.QuestRow;

})();
