import React from 'react';
import { ICON_PATHS } from '../../assets/icons/icons.js';

/**
 * Lucide-style stroke icon (24×24, weight 2, round caps) drawn in `currentColor`.
 * Names: globe, flask, code, users, cap, dashboard, book, award, check, arrowRight, external.
 */
export function Icon({ name, size = 24, className = '', style, ...rest }) {
  const p = ICON_PATHS[name];
  if (!p) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={{ display: 'block', ...style }}
      dangerouslySetInnerHTML={{ __html: p }}
      {...rest}
    />
  );
}
