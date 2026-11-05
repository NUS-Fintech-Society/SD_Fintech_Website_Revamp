'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { departments } from '@/content/departments';

/**
 * Home "What we do": one photo strip per department, one open at a time. Strips open on click, tap, Enter or Space,
 * never on focus or hover. The open strip can't collapse, so its button is aria-disabled but stays focusable.
 */
export default function Accordion() {
  const [open, setOpen] = useState<string>('blockchain');
  return (
    <div className="fs-acc">
      {departments.map((d) => {
        const isOpen = d.slug === open;
        return (
          <div key={d.slug} className={`fs-strip fs-on-dark${isOpen ? ' fs-strip--open' : ''}`}>
            <Image src={d.photo.src} alt="" fill sizes="(max-width: 700px) 100vw, 60vw" />
            <div className="fs-strip-scrim" />
            <h3 className="fs-strip-head">
              <button
                type="button"
                id={`strip-btn-${d.slug}`}
                className="fs-strip-btn"
                aria-expanded={isOpen}
                aria-disabled={isOpen || undefined}
                aria-controls={`strip-${d.slug}`}
                onClick={() => setOpen(d.slug)}
              >
                <span className="fs-strip-label t-fact">{d.name}</span>
              </button>
            </h3>
            <div className="fs-strip-body" id={`strip-${d.slug}`} role="region" aria-labelledby={`strip-btn-${d.slug}`} hidden={!isOpen}>
              <p className="t-open" aria-hidden="true">{d.name}</p>
              <p className="t-body">{d.lead}</p>
              <Link href={`/departments/${d.slug}`} className="fs-pill fs-pill--white fs-pill--small">Explore {d.name}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
