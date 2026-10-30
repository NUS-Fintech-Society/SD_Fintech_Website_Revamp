'use client';

import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import EventCard from '@/components/EventCard';
import { events } from '@/content/events';
import { TELEGRAM_URL } from '@/content/site';
import { splitEvents } from '@/lib/events';
import { useNow } from '@/lib/use-now';

const SHOWN_YEARS = 2;

/** Upcoming and Past events, split by end time at build and again in the browser, so ended events move on their own. */
export default function EventLists({ buildNow }: { buildNow: number }) {
  const { upcoming, years } = splitEvents(events, useNow(buildNow));
  const [showAll, setShowAll] = useState(false);
  const earlier = useRef<HTMLDivElement>(null);
  const yearBlock = (y: (typeof years)[number]) => (
    <div key={y.label} className="ev-stack ev-year">
      <h3 className="t-h3">{y.label}</h3>
      <div className="fs-cards">
        {y.events.map((e) => <EventCard key={e.slug} event={e} buildNow={buildNow} level="h4" />)}
      </div>
    </div>
  );

  return (
    <>
      <section className="ev-sec" aria-labelledby="upcoming-title">
        <div className="fs-wrap ev-stack">
          <h2 className="t-h2" id="upcoming-title">Upcoming</h2>
          {upcoming.length ? (
            <div className="fs-cards">
              {upcoming.map((e) => <EventCard key={e.slug} event={e} buildNow={buildNow} />)}
            </div>
          ) : (
            <div className="fs-panel ev-empty">
              <p className="t-lead">Nothing scheduled right now. New events are announced on our Telegram channel first.</p>
              <a href={TELEGRAM_URL} className="fs-pill fs-pill--primary">Join the Telegram channel</a>
            </div>
          )}
        </div>
      </section>

      <section id="past" className="ev-sec-last" aria-labelledby="past-title">
        <div className="fs-wrap ev-stack">
          <h2 className="t-h2" id="past-title">Past events</h2>
          <div>{years.slice(0, SHOWN_YEARS).map(yearBlock)}</div>
          {years.length > SHOWN_YEARS && (
            <>
              <div id="earlier-events" ref={earlier} hidden={!showAll}>{years.slice(SHOWN_YEARS).map(yearBlock)}</div>
              {!showAll && (
                <button
                  type="button"
                  className="fs-pill fs-pill--outline self-center"
                  aria-expanded={showAll}
                  aria-controls="earlier-events"
                  onClick={() => {
                    flushSync(() => setShowAll(true));
                    earlier.current?.querySelector('a')?.focus();
                  }}
                >
                  Show earlier events
                </button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
