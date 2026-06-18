import React from 'react';

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
  const s = document.createElement('style'); s.id = 'thds-badge-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Tiny pixel-font UPPERCASE pill — the brand's micro-label. Use for status,
 * categories, "NEW", XP tags. Coral/purple fills get white text; others get ink.
 */
export function Badge({ tone = 'star', children, className = '', ...rest }) {
  const cls = ['thds-badge', `thds-badge--${tone}`, className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
