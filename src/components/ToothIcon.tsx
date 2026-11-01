import type { SVGProps } from 'react';

/**
 * Custom tooth glyph — lucide-react does not ship a tooth icon,
 * so we provide one matching their stroke style for the brand logo.
 */
export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5.5c-1.5-1-3-1.2-4.5-.5C5.5 6 4 8 4 11c0 2 .5 4 1 5.5.4 1 .8 1.5 1.5 1.5s1-.8 1.2-2c.2-1 .5-2 1.3-2 .8 0 1 .8 1.3 2 .3 1.2.5 2 1.2 2s1.1-.5 1.5-1.5c.5-1.5 1-3.5 1-5.5 0-3-1.5-5-3.5-5.5-1.5-.7-3-.5-4.5.5" />
    </svg>
  );
}
