'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Logo from '@/components/PartnerLogo';
import { partners, type Partner } from '@/content/partners';
// Four copies of a row, panned by half: a half-list row is narrower than a wide screen, and the loop must never show a gap.
const cells = (list: Partner[]) =>
  [0, 1, 2, 3].flatMap((copy) =>
    list.map((p) => (
      <div key={`${copy}-${p.slug}`} className="fs-logocell">
        <Logo p={p} alt="" />
      </div>
    )),
  );

// Alternate partners between the rows, so no wordmark appears in both.
const rowA = partners.filter((_, i) => i % 2 === 0);
const rowB = partners.filter((_, i) => i % 2 === 1);

/**
 * Home's partner band: two rows of wordmarks (each partner in one row) panning in opposite directions, each
 * pausing on hover, with one pause button for both. The moving copies are hidden from screen readers, which
 * get the plain name list instead. Under reduced motion the rows give way to a static grid and the pause
 * button hides.
 */
export default function LogoBand() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="fs-band fs-on-dark" aria-labelledby="partners-title">
      <div className="fs-wrap fs-band-head">
        <h2 className="t-display-h2" id="partners-title">Partners who build with us</h2>
        <div className="fs-row-actions">
          <button type="button" className="fs-iconbtn fs-marquee-pause" aria-label="Pause partner logos" aria-pressed={paused} onClick={() => setPaused(!paused)}>
            <Icon name={paused ? 'play' : 'pause'} />
          </button>
          <Link href="/partners" className="fs-pill fs-pill--orange">Partner with us</Link>
        </div>
      </div>
      <ul className="fs-sr">
        {partners.map((p) => <li key={p.slug}>{p.name}</li>)}
      </ul>
      <div className={`fs-marquee-wrap${paused ? ' fs-paused' : ''}`} aria-hidden="true">
        <div className="fs-marquee">{cells(rowA)}</div>
        <div className="fs-marquee fs-marquee--rev">{cells(rowB)}</div>
      </div>
      <div className="fs-wrap">
        <ul className="fs-logos fs-marquee-static" aria-hidden="true">
          {partners.map((p) => (
            <li key={p.slug} className="fs-logocell"><Logo p={p} alt="" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
