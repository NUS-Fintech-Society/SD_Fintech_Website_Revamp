import type { SocietyEvent } from '@/content/events';

// Every date shows in Singapore time, whatever the reader's or the server's time zone.
const parts = (iso: string) => {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Singapore', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true,
    }).formatToParts(new Date(iso)).map((x) => [x.type, x.value]),
  );
  const ymd = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Singapore' }).format(new Date(iso));
  return {
    date: `${p.weekday} ${p.day} ${p.month} ${p.year}`,
    day: p.day, month: p.month, year: p.year,
    time: `${p.hour}:${p.minute}${p.dayPeriod.toLowerCase()}`,
    ymd, // 2026-01-05
  };
};

const DAY = 86_400_000;
const dayNumber = (iso: string) => Date.parse(`${parts(iso).ymd}T00:00:00Z`) / DAY;

const dateRange = (e: SocietyEvent) => {
  const a = parts(e.start), b = parts(e.end);
  if (a.ymd === b.ymd) return a.date;
  if (a.month === b.month && a.year === b.year) return `${a.day}–${b.day} ${b.month} ${b.year}`;
  return `${a.day} ${a.month}${a.year === b.year ? '' : ` ${a.year}`}–${b.day} ${b.month} ${b.year}`;
};

export const isUpcoming = (e: SocietyEvent, now: number) => Date.parse(e.end) > now;

/** The card's date label: "Wed 10 Sep 2025, 3:00pm", or "5–9 Jan 2026" when only dates are known. */
export const cardDate = (e: SocietyEvent) => (e.datesOnly ? dateRange(e) : `${parts(e.start).date}, ${parts(e.start).time}`);

/** The facts panel's two lines. */
export const factDate = (e: SocietyEvent) => {
  if (e.datesOnly) {
    const days = dayNumber(e.end) - dayNumber(e.start) + 1;
    return { date: dateRange(e), time: days === 1 ? 'All day' : `${days} days` };
  }
  return { date: dateRange(e), time: `${parts(e.start).time}–${parts(e.end).time}` };
};

/** "Happening now", "Today", "Tomorrow", "In N days" (up to 14), or nothing. */
export const relativeLabel = (e: SocietyEvent, now: number): { live: boolean; text: string } | null => {
  const start = Date.parse(e.start), end = Date.parse(e.end);
  if (now >= end) return null;
  if (now >= start) return { live: true, text: 'Happening now' };
  const days = dayNumber(e.start) - dayNumber(new Date(now).toISOString());
  if (days === 0) return { live: false, text: 'Today' };
  if (days === 1) return { live: false, text: 'Tomorrow' };
  return days <= 14 ? { live: false, text: `In ${days} days` } : null;
};

/** NUS academic year (Aug–Jul) of the start date: "AY2025/26". */
export const academicYear = (iso: string) => {
  const { ymd } = parts(iso);
  const y = Number(ymd.slice(0, 4)), m = Number(ymd.slice(5, 7));
  const from = m >= 8 ? y : y - 1;
  return `AY${from}/${String((from + 1) % 100).padStart(2, '0')}`;
};

export const splitEvents = (all: SocietyEvent[], now: number) => {
  const upcoming = all.filter((e) => isUpcoming(e, now)).sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
  const past = all.filter((e) => !isUpcoming(e, now)).sort((a, b) => Date.parse(b.start) - Date.parse(a.start));
  const years: { label: string; events: SocietyEvent[] }[] = [];
  for (const e of past) {
    const label = academicYear(e.start);
    const year = years.find((y) => y.label === label);
    if (year) year.events.push(e);
    else years.push({ label, events: [e] });
  }
  return { upcoming, years };
};

/** Three cards for "More events": upcoming first, then the latest past, never the current event. */
export const moreEvents = (all: SocietyEvent[], current: SocietyEvent, now: number) => {
  const { upcoming, years } = splitEvents(all.filter((e) => e.slug !== current.slug), now);
  return [...upcoming, ...years.flatMap((y) => y.events)].slice(0, 3);
};

/** First sentence of About: the meta description. */
export const summary = (e: SocietyEvent) => (e.about[0] ?? '').split(/(?<=\.)\s/)[0];

const utcStamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const dateStamp = (iso: string, addDays = 0) =>
  new Date((dayNumber(iso) + addDays) * DAY).toISOString().slice(0, 10).replace(/-/g, '');
// All-day ranges end the day after the last day (RFC 5545 and Google both treat the end as exclusive).
const calendarDates = (e: SocietyEvent) =>
  e.datesOnly ? [dateStamp(e.start), dateStamp(e.end, 1)] : [utcStamp(e.start), utcStamp(e.end)];
const place = (e: SocietyEvent) => `${e.venue.name}, ${e.venue.address}`;

export const googleCalendarUrl = (e: SocietyEvent) => {
  const q = new URLSearchParams({
    action: 'TEMPLATE', text: e.name, dates: calendarDates(e).join('/'), details: summary(e), location: place(e),
  });
  return `https://calendar.google.com/calendar/render?${q}`;
};

const icsText = (s: string) => s.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

/** `stamp` (DTSTAMP) is when the file was made: the build, for the static route. */
export const icsFile = (e: SocietyEvent, site: string, stamp = new Date().toISOString()) => {
  const [start, end] = calendarDates(e);
  const kind = e.datesOnly ? ';VALUE=DATE' : '';
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//NUS Fintech Society//Events//EN', 'BEGIN:VEVENT',
    `UID:${e.slug}@fintechsociety.comp.nus.edu.sg`, `DTSTAMP:${utcStamp(stamp)}`,
    `DTSTART${kind}:${start}`, `DTEND${kind}:${end}`,
    `SUMMARY:${icsText(e.name)}`, `DESCRIPTION:${icsText(summary(e))}`, `LOCATION:${icsText(place(e))}`,
    `URL:${site}/events/${e.slug}`, 'END:VEVENT', 'END:VCALENDAR', '',
  ].join('\r\n');
};
