import React from 'react';

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
  const s = document.createElement('style'); s.id = 'thds-panel-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The core "game panel" surface — white card, thick ink border, offset shadow,
 * with an optional colored header. `variant="quests"` gives the ink+pixel
 * "CURRENT QUESTS" header treatment; `variant="dark"` is the ink-filled panel.
 */
export function Panel({
  title = null,
  headerRight = null,
  variant = 'default',
  hoverable = false,
  children,
  className = '',
  bodyClassName = '',
  ...rest
}) {
  const cls = [
    'thds-panel',
    variant !== 'default' ? `thds-panel--${variant}` : '',
    hoverable ? 'thds-panel--hoverable' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {title != null && (
        <div className="thds-panel__header">
          <span style={{ flex: 1, minWidth: 0 }}>{title}</span>
          {headerRight}
        </div>
      )}
      <div className={['thds-panel__body', bodyClassName].filter(Boolean).join(' ')}>{children}</div>
    </div>
  );
}
