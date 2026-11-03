import type { Intake } from '@/content/join';
import { dateRange, dayNumber, parts } from '@/lib/events';

export type IntakeState = 'before' | 'open' | 'closed';

/** Every place that shows the intake reads this, so the panels, the rail and the facts can't disagree. */
export const intakeState = (i: Intake, now: number): IntakeState =>
  now < Date.parse(i.opens) ? 'before' : now <= Date.parse(i.closes) ? 'open' : 'closed';

/** "Wed 24 Jun 2026", "Thu 12 Nov 2026, 11:59pm" (a time unless it's midnight), or "16–20 Nov 2026" for a range. */
export const whenLabel = (start: string, end?: string) => {
  if (end) return dateRange({ start, end });
  const p = parts(start);
  return p.time === '12:00am' ? p.date : `${p.date}, ${p.time}`;
};

export const statusText = (i: Intake, state: IntakeState) =>
  state === 'before'
    ? `Applications open on ${whenLabel(i.opens)}.`
    : state === 'open'
      ? `Applications open until ${whenLabel(i.closes)}.`
      : `Applications are closed. Next intake: ${i.nextIntakeLabel}`;

/** "Closes today", "Closes in 1 day" or "Closes in N days" while open and 14 days or fewer remain; otherwise null. */
export const closesIn = (i: Intake, now: number) => {
  if (intakeState(i, now) !== 'open') return null;
  const days = dayNumber(i.closes) - dayNumber(new Date(now).toISOString());
  if (days > 14) return null;
  return days === 0 ? 'Closes today' : `Closes in ${days} ${days === 1 ? 'day' : 'days'}`;
};

/**
 * The rail: the latest step that has started is current, the ones before it are done. Before the first step
 * nothing is current; after the last step ends the rail is neutral (finished) and shows no dates.
 */
export const railProgress = (i: Intake, now: number) => {
  const last = i.steps[i.steps.length - 1];
  const finished = now > Date.parse(last.end ?? last.start);
  const current = finished ? -1 : i.steps.findLastIndex((s) => Date.parse(s.start) <= now);
  return { finished, current };
};
