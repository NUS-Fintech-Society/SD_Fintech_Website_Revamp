'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { events } from '@/content/events';
import { intake } from '@/content/join';
import { BLURB } from '@/content/site';
import { isUpcoming } from '@/lib/events';
import { intakeState, whenLabel } from '@/lib/intake';
import { useNow } from '@/lib/use-now';
import heroPhoto from '@/public/images/events/nus-fintech-summit-2026/photo-11.jpg';

const words = ['Ideate', 'Innovate', 'Inspire'];

/** Full-height photo, the motto, two buttons. The first follows the intake, then whether events are coming up. */
export default function HomeHero({ buildNow }: { buildNow: number }) {
  const now = useNow(buildNow);
  const open = intakeState(intake, now) === 'open';
  const first = open
    ? { label: 'Join us', href: '/join' }
    : events.some((e) => isUpcoming(e, now))
      ? { label: 'See upcoming events', href: '/events' }
      : { label: 'See past events', href: '/events#past' };

  // The cue points to Coming up, so it hides while Coming up is already in view.
  const [cueHidden, setCueHidden] = useState(false);
  useEffect(() => {
    const next = document.getElementById('coming-up');
    if (!next) return;
    const io = new IntersectionObserver(([entry]) => setCueHidden(entry.isIntersecting));
    io.observe(next);
    return () => io.disconnect();
  }, []);

  return (
    <section className="fs-hero fs-on-dark" aria-labelledby="hero-title">
      <Image src={heroPhoto} alt="Group photo of participants, judges and organisers" fill preload sizes="100vw" />
      <div className="fs-hero-scrim" />
      <div className="fs-wrap fs-hero-inner">
        <div className="fs-hero-text">
          <p className="t-label fs-hero-name">NUS Fintech Society</p>
          <h1 className="t-display-h1 fs-motto" id="hero-title">
            {words.map((w, i) => (
              <Fragment key={w}>
                {i > 0 && <span className="fs-motto-div" aria-hidden="true" />}
                <span>{w}</span>
                <span className="fs-sr">. </span>
              </Fragment>
            ))}
          </h1>
          <p className="t-lead">{BLURB}</p>
          <div className="fs-row-actions">
            <Link href={first.href} className="fs-pill fs-pill--orange">{first.label}</Link>
            <Link href="#what-we-do" className="fs-pill fs-pill--white">Explore what we do</Link>
          </div>
          {open && <p className="t-ui">Applications open until {whenLabel(intake.closes)}</p>}
        </div>
      </div>
      <a href="#coming-up" className="fs-cue" aria-label="Scroll to Coming up" hidden={cueHidden}>
        <Icon name="down" />
      </a>
    </section>
  );
}
