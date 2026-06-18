import React from 'react';

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
  const s = document.createElement('style'); s.id = 'thds-pill-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Rounded 2px-ink-border chip for filters, skills, tech tags, and status.
 * Set `active` for the ink-filled selected state, or `tone` for a status color.
 */
export function Pill({
  tone = 'default',
  active = false,
  interactive = false,
  as = 'span',
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = [
    'thds-pill',
    tone !== 'default' ? `thds-pill--${tone}` : '',
    interactive ? 'thds-pill--interactive' : '',
    active ? 'is-active' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
