import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

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
  const s = document.createElement('style'); s.id = 'thds-quest-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * The "quest list" row — icon chip + title + description, with an optional
 * progress bar + pixel % or a "proof" pill on the right. Renders as an <a> when
 * `href` is set. This is the brand's core list-item pattern.
 */
export function QuestRow({
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
  return (
    <Tag className={cls} href={href} {...rest}>
      <span className="thds-quest__icon" aria-hidden="true">{icon}</span>
      <span className="thds-quest__info">
        <span className="thds-quest__title">{title}</span>
        {desc != null && <span className="thds-quest__desc">{desc}</span>}
        {progress != null && (
          <span className="thds-quest__prow">
            <ProgressBar value={progress} color={progressColor} />
            <span className="thds-quest__pct">{progress}%</span>
          </span>
        )}
      </span>
      {proof != null && <span className="thds-quest__proof">{proof}</span>}
    </Tag>
  );
}
