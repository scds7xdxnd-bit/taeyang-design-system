import React from 'react';

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
  const s = document.createElement('style'); s.id = 'thds-progress-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Slim ink-outlined progress / XP / stat meter. Fill color maps to the palette;
 * the bar animates its width over 0.8s.
 */
export function ProgressBar({ value = 0, color = 'sunshine', className = '', style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={['thds-progress', className].filter(Boolean).join(' ')}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      style={style}
      {...rest}
    >
      <div className={`thds-progress__fill thds-progress__fill--${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}
