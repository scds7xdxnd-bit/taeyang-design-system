import React from 'react';

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
  const s = document.createElement('style'); s.id = 'thds-btn-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The brand's primary action — chunky, ink-bordered, hard offset shadow that
 * lifts on hover and sinks on press (the "physical sticker" feel).
 */
export function Button({
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
  const cls = [
    'thds-btn',
    `thds-btn--${variant}`,
    size === 'small' ? 'thds-btn--small' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {icon && !iconRight ? <span className="thds-btn__icon">{icon}</span> : null}
      {children}
      {icon && iconRight ? <span className="thds-btn__icon">{icon}</span> : null}
    </>
  );

  if (href && !disabled) {
    return <a href={href} className={cls} {...rest}>{inner}</a>;
  }
  return <button type="button" className={cls} disabled={disabled} {...rest}>{inner}</button>;
}
