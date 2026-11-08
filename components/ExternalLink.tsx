import type { ComponentProps } from 'react';

const NOTE = ' (opens in new tab)';

/**
 * A link to another site: opens in a new tab and tells screen-reader users so. No `rel`: browsers imply
 * noopener for target="_blank", and keeping the referrer lets partner sites see where visits come from.
 */
export default function ExternalLink({ children, 'aria-label': label, ...props }: ComponentProps<'a'>) {
  return (
    <a {...props} target="_blank" aria-label={label && label + NOTE}>
      {children}
      {!label && <span className="fs-sr">{NOTE}</span>}
    </a>
  );
}
