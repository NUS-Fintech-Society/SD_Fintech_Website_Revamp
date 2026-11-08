'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import EventCard from '@/components/EventCard';
import ExternalLink from '@/components/ExternalLink';
import Icon from '@/components/Icon';
import { events } from '@/content/events';
import { TELEGRAM_URL } from '@/content/site';
import { splitEvents } from '@/lib/events';
import { useNow } from '@/lib/use-now';

const MOBILE = '(max-width: 700px)';
const subscribe = (cb: () => void) => {
  const mq = matchMedia(MOBILE);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};
const smooth = () => (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');

/**
 * Home "Coming up": up to 3 upcoming events, a static row on desktop and a swipe carousel at 700px and below.
 * With nothing upcoming it shows the latest past event instead, skipping Summits because the Summit band
 * follows on the same page.
 */
export default function ComingUp({ buildNow }: { buildNow: number }) {
  const { upcoming, years } = splitEvents(events, useNow(buildNow));
  const shown = upcoming.slice(0, 3);
  const latest = years.flatMap((y) => y.events).find((e) => e.format !== 'Summit');
  const mobile = useSyncExternalStore(subscribe, () => matchMedia(MOBILE).matches, () => false);

  const row = useRef<HTMLDivElement>(null);
  const prev = useRef<HTMLButtonElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const [arrows, setArrows] = useState({ show: false, atStart: true, atEnd: true });

  const sync = useCallback(() => {
    const sc = row.current;
    if (!sc) return;
    const atStart = sc.scrollLeft < 2;
    const atEnd = sc.scrollLeft + sc.clientWidth >= sc.scrollWidth - 2;
    // Hand focus to the other arrow before the focused one disables, so focus never drops to the page.
    if (atEnd && document.activeElement === next.current) prev.current?.focus();
    if (atStart && document.activeElement === prev.current) next.current?.focus();
    setArrows({ show: mobile && sc.scrollWidth > sc.clientWidth + 1, atStart, atEnd });
  }, [mobile]);
  useEffect(() => {
    sync();
    addEventListener('resize', sync);
    return () => removeEventListener('resize', sync);
  }, [sync, shown.length]);

  const step = (dir: 1 | -1) => {
    const sc = row.current;
    const card = sc?.firstElementChild;
    if (!sc || !card) return;
    sc.scrollBy({ left: dir * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(sc).columnGap)), behavior: smooth() });
  };

  const allEvents = (cls: string) => <Link href="/events" className={`fs-pill fs-pill--outline ${cls}`}>All events</Link>;
  const title = shown.length ? 'Coming up' : 'Latest event';

  return (
    <section id="coming-up" className="hm-sec" aria-labelledby="coming-title" aria-roledescription={mobile && shown.length ? 'carousel' : undefined}>
      <div className="fs-wrap">
        <div className="fs-carousel-head">
          <h2 className="t-display-h2" id="coming-title">{title}</h2>
          {arrows.show && (
            <div className="fs-carousel-arrows">
              <button ref={prev} type="button" className="fs-iconbtn" aria-label="Previous event" disabled={arrows.atStart} onClick={() => step(-1)}>
                <Icon name="prev" />
              </button>
              <button ref={next} type="button" className="fs-iconbtn" aria-label="Next event" disabled={arrows.atEnd} onClick={() => step(1)}>
                <Icon name="next" />
              </button>
            </div>
          )}
          {allEvents('hm-top-only')}
        </div>

        {shown.length ? (
          <div
            ref={row}
            className="hm-row"
            onScroll={sync}
            onFocus={(e) => mobile && e.target.closest('[data-slide]')?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: smooth() })}
          >
            {shown.map((e, i) => (
              <div key={e.slug} data-slide role={mobile ? 'group' : undefined} aria-roledescription={mobile ? 'slide' : undefined} aria-label={mobile ? `${i + 1} of ${shown.length}` : undefined}>
                <EventCard event={e} buildNow={buildNow} />
              </div>
            ))}
          </div>
        ) : latest ? (
          <div className="hm-wide">
            <EventCard
              event={latest}
              buildNow={buildNow}
              note={<>Nothing else is scheduled yet. New dates are posted here and on our <ExternalLink href={TELEGRAM_URL} className="fs-link">Telegram channel</ExternalLink>.</>}
            />
          </div>
        ) : (
          <p>Nothing is scheduled yet. New dates are posted here and on our <ExternalLink href={TELEGRAM_URL} className="fs-link">Telegram channel</ExternalLink>.</p>
        )}

        {allEvents('hm-bottom-only')}
      </div>
    </section>
  );
}
