'use client';

import Image from 'next/image';
import { events } from '@/content/events';
import { SUMMIT_LINE, SUMMIT_PRIZE, SUMMIT_URL } from '@/content/site';
import { dayNumber, isUpcoming, parts } from '@/lib/events';
import { useNow } from '@/lib/use-now';
import summitPhoto from '@/public/images/events/nus-fintech-summit-2026/photo-07.jpg';

// "5 January 2026". Built by hand for ranges: formatRange spaces the dash differently in Node and in browsers,
// which would make the server and browser text disagree.
const long = (iso: string) => new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Singapore' }).format(new Date(iso));
const longRange = (start: string, end: string) => {
  const a = long(start), b = long(end);
  if (a === b) return a;
  return a.slice(a.indexOf(' ')) === b.slice(b.indexOf(' ')) ? `${parts(start).day}–${b}` : `${a}–${b}`;
};

/** The next Summit if one is scheduled, else the latest one, worded in the future or past tense to match. */
export default function SummitBand({ buildNow }: { buildNow: number }) {
  const now = useNow(buildNow);
  const summits = events.filter((e) => e.format === 'Summit').sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
  const summit = summits.find((e) => isUpcoming(e, now)) ?? summits[summits.length - 1];
  if (!summit) return null;
  const upcoming = isUpcoming(summit, now);
  const days = dayNumber(summit.end) - dayNumber(summit.start) + 1;
  const dates = longRange(summit.start, summit.end);

  return (
    <section className="hm-summit" aria-labelledby="summit-title">
      <div className="fs-wrap hm-summit-inner">
        <div className="hm-summit-media">
          <Image src={summitPhoto} alt="Two students presenting their project to judges in a seminar room" fill sizes="(max-width: 1000px) 100vw, 50vw" />
        </div>
        <div className="hm-summit-text">
          <h2 className="t-display-h2" id="summit-title">NUS Fintech Summit</h2>
          <p className="t-lead">{SUMMIT_LINE}</p>
          <ul className="fs-figs fs-figs--on-accent">
            <li className="fs-fig">
              <span className="t-fig">{days} days</span>
              <span className="fs-fig-label t-fact">{upcoming ? `Next edition: ${dates}` : `Held ${dates}`}</span>
            </li>
            <li className="fs-fig">
              <span className="t-fig">{SUMMIT_PRIZE}</span>
              <span className="fs-fig-label t-fact">{upcoming ? 'in prizes' : 'in prizes awarded'}</span>
            </li>
          </ul>
          <a href={SUMMIT_URL} className="fs-pill fs-pill--primary">Visit the Summit site</a>
        </div>
      </div>
    </section>
  );
}
