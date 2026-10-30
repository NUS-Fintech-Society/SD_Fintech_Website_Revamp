'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { SocietyEvent } from '@/content/events';
import { cardDate, isUpcoming, relativeLabel } from '@/lib/events';
import { useNow } from '@/lib/use-now';

/** The relative date as graphite text; "Happening now" is a chip on cards only, and plain text everywhere else. */
export function RelativeDate({ event, buildNow, chip = true }: { event: SocietyEvent; buildNow: number; chip?: boolean }) {
  const rel = relativeLabel(event, useNow(buildNow));
  if (!rel) return null;
  return rel.live && chip ? <span className="t-tag fs-chip fs-chip--live">{rel.text}</span> : <span className="fs-reltext">{rel.text}</span>;
}

/** Renders its children only while the event hasn't ended, by the browser's clock after hydrating. */
export function UpcomingOnly({ event, buildNow, children }: { event: SocietyEvent; buildNow: number; children: ReactNode }) {
  return isUpcoming(event, useNow(buildNow)) ? children : null;
}

/** The one event card: photo, date, title, one line, and "Event details" as the only link. */
export default function EventCard({ event: e, buildNow, level = 'h3' }: { event: SocietyEvent; buildNow: number; level?: 'h3' | 'h4' }) {
  const upcoming = isUpcoming(e, useNow(buildNow));
  const Title = level;
  const line = upcoming ? e.venue.name : e.coHosts.length ? `With ${e.coHosts.join(' and ')}` : null;
  return (
    <article className="fs-card">
      <div className="fs-card-media">
        {e.cover ? (
          <Image src={e.cover.src} alt={e.cover.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
        ) : (
          <span className="fs-card-noimg" aria-hidden="true">{e.name}</span>
        )}
        <span className="t-tag fs-chip fs-chip--photo">{e.format}</span>
      </div>
      <div className="fs-card-when">
        <p className="t-label">{cardDate(e)}</p>
        {upcoming && <RelativeDate event={e} buildNow={buildNow} />}
      </div>
      <Title className="t-h3">{e.name}</Title>
      {line && <p className="fs-muted">{line}</p>}
      <Link href={`/events/${e.slug}`} className="fs-pill fs-pill--outline fs-pill--small">
        Event details<span className="fs-sr"> for {e.name}</span>
      </Link>
    </article>
  );
}
