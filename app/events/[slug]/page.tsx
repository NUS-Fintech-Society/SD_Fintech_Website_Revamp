import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import EventCard, { RelativeDate, UpcomingOnly } from '@/components/EventCard';
import PhotoGrid from '@/components/PhotoGrid';
import { events, getEvent, type SocietyEvent } from '@/content/events';
import { SITE_URL, SUMMIT_URL } from '@/content/site';
import { factDate, googleCalendarUrl, isUpcoming, moreEvents, summary } from '@/lib/events';

type Props = { params: Promise<{ slug: string }> };

// Static pages: the build time, which the browser replaces with its own clock where it matters (RSVP, relative dates).
const builtAt = Date.now();

export const dynamicParams = false;
export const generateStaticParams = () => events.map((e) => ({ slug: e.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getEvent((await params).slug);
  return e ? { title: e.name, description: summary(e) } : {};
}

const jsonLd = (e: SocietyEvent) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: e.name,
  description: summary(e),
  startDate: e.datesOnly ? e.start.slice(0, 10) : e.start,
  endDate: e.datesOnly ? e.end.slice(0, 10) : e.end,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  // A venue in [brackets] is a placeholder: leave it out of search data until the real venue is filled in.
  location: e.venue.name.startsWith('[') ? undefined : { '@type': 'Place', name: e.venue.name, address: e.venue.address },
  image: e.cover ? [new URL(e.cover.src.src, SITE_URL).href] : undefined,
  organizer: { '@type': 'Organization', name: 'NUS Fintech Society', url: SITE_URL },
});

export default async function EventPage({ params }: Props) {
  const e = getEvent((await params).slug);
  if (!e) notFound();
  const past = !isUpcoming(e, builtAt);
  const when = factDate(e);
  // A gallery that is only the cover repeats it, so the Photos section is left out.
  const gallery = e.gallery.length === 1 && e.gallery[0] === e.cover ? [] : e.gallery;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(e)).replace(/</g, '\\u003c') }} />
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/'], ['Events', '/events']]} current={e.name} />
        <h1 className="t-h1 max-w-measure" id="event-title">{e.name}</h1>
      </div>

      <div className="fs-wrap ev-sec-last">
        <div className="ev-detail">
          <div className="ev-cover">
            {e.cover ? (
              <Image src={e.cover.src} alt={e.cover.alt} fill preload className={e.cover.poster ? 'fs-poster' : undefined} sizes="(max-width: 1000px) 100vw, 66vw" />
            ) : (
              <span className="fs-card-noimg" aria-hidden="true">{e.name}</span>
            )}
          </div>

          <aside className="fs-panel fs-facts fs-facts--sticky ev-facts" aria-label="Event facts">
            <dl>
              <div>
                <dt>Date and time</dt>
                <dd className="font-bold">{when.date}</dd>
                {when.time && <dd>{when.time}</dd>}
                {!past && <dd><RelativeDate event={e} buildNow={builtAt} chip={false} /></dd>}
              </div>
              <div>
                <dt>Venue</dt>
                <dd className="font-bold">{e.venue.name}</dd>
                <dd>{e.venue.address}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd className="font-bold">{e.format}</dd>
              </div>
              {e.coHosts.length > 0 && (
                <div>
                  <dt>With</dt>
                  <dd className="font-bold">{e.coHosts.join(' and ')}</dd>
                </div>
              )}
            </dl>
            {!past && (
              <UpcomingOnly event={e} buildNow={builtAt}>
                <div className="ev-split">
                  {e.rsvp.state === 'open' && e.rsvp.url && (
                    <a href={e.rsvp.url} className="fs-pill fs-pill--primary fs-pill--block" aria-describedby="event-title">RSVP</a>
                  )}
                  {e.rsvp.state === 'closed' && <p className="font-bold">RSVP closed</p>}
                  {e.rsvp.state === 'none' && <p className="font-bold">Open to all, no RSVP needed.</p>}
                  <div className="ev-stack-sm">
                    <p className="t-tag fs-muted">Add to calendar</p>
                    <div className="fs-row-actions">
                      <a href={googleCalendarUrl(e)} className="fs-pill fs-pill--outline fs-pill--small">Google Calendar</a>
                      <a href={`/events/${e.slug}/event.ics`} className="fs-pill fs-pill--outline fs-pill--small" download>Apple or Outlook (.ics)</a>
                    </div>
                  </div>
                </div>
              </UpcomingOnly>
            )}
            {e.format === 'Summit' && (
              <div className="ev-split">
                <a href={SUMMIT_URL} className="fs-pill fs-pill--primary fs-pill--block">Visit the Summit site</a>
              </div>
            )}
          </aside>

          <div className="ev-content">
            <section aria-labelledby="about-title">
              <h2 className="t-h2" id="about-title">About</h2>
              {e.about.map((p) => <p key={p} className="t-body">{p}</p>)}
            </section>
            {e.learn && (
              <section aria-labelledby="learn-title">
                <h2 className="t-h2" id="learn-title">{past ? 'What it covered' : "What you'll learn"}</h2>
                <ul>{e.learn.map((l) => <li key={l}>{l}</li>)}</ul>
              </section>
            )}
            {past && e.recap && (
              <section aria-labelledby="recap-title">
                <h2 className="t-h2" id="recap-title">Recap</h2>
                {e.recap.map((p) => <p key={p} className="t-body">{p}</p>)}
              </section>
            )}
            {past && gallery.length > 0 && (
              <section className="ev-photos" aria-labelledby="photos-title">
                <h2 className="t-h2" id="photos-title">Photos</h2>
                <PhotoGrid photos={gallery} eventName={e.name} />
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Known limit: picked at build; an ended upcoming event stays first here until the next deploy. */}
      <section className="ev-sec-last" aria-labelledby="more-title">
        <div className="fs-wrap ev-stack">
          <h2 className="t-h2" id="more-title">More events</h2>
          <div className="fs-cards">
            {moreEvents(events, e, builtAt).map((m) => <EventCard key={m.slug} event={m} buildNow={builtAt} />)}
          </div>
        </div>
      </section>
    </>
  );
}
