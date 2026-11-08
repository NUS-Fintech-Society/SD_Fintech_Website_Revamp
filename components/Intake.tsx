'use client';

import ExternalLink from '@/components/ExternalLink';
import { intake } from '@/content/join';
import { TELEGRAM_URL } from '@/content/site';
import { closesIn, intakeState, railProgress, statusText, whenLabel, type IntakeState } from '@/lib/intake';
import { useNow } from '@/lib/use-now';

// Everything here reads the intake state from the build time while prerendering and the browser's clock after
// hydrating, so the Join page and the role pages never show a stale state.

const NOTE: Record<IntakeState, string> = {
  before: 'Get the dates first on our Telegram channel.',
  open: 'One form for every department. You choose your roles in it.',
  closed: 'New dates are announced on our Telegram channel first.',
};

/** The state's one main action: the form while open, otherwise the Telegram channel. Never a dead button. */
function MainPill({ state, block, describedBy }: { state: IntakeState; block?: boolean; describedBy?: string }) {
  const className = `fs-pill fs-pill--primary${block ? ' fs-pill--block' : ''}`;
  if (state === 'open') return <ExternalLink href={intake.applyUrl} className={className} aria-describedby={describedBy}>Apply now</ExternalLink>;
  return <ExternalLink href={TELEGRAM_URL} className={className}>{state === 'before' ? 'Get notified on Telegram' : 'Join the Telegram channel'}</ExternalLink>;
}

function Caution({ now }: { now: number }) {
  const text = closesIn(intake, now);
  return text && <span className="t-tag fs-chip fs-chip--caution">{text}</span>;
}

/** The Join status panel under the h1, or (closing) the same sentence and pill at the foot of the page. */
export function IntakePanel({ buildNow, closing = false }: { buildNow: number; closing?: boolean }) {
  const now = useNow(buildNow);
  const state = intakeState(intake, now);
  return (
    <div className={`fs-panel ev-empty${closing ? '' : ' jn-panel'}`}>
      <div className="jn-status">
        <div className="jn-statusline">
          <p className="t-lead font-bold">{statusText(intake, state)}</p>
          {!closing && <Caution now={now} />}
        </div>
        {!closing && <p className="fs-muted">{NOTE[state]}</p>}
      </div>
      <div className="fs-row-actions">
        <MainPill state={state} />
        {!closing && state === 'open' && <a href="#how" className="fs-pill fs-pill--outline">How applying works</a>}
      </div>
    </div>
  );
}

/** Under the Roles heading while applications aren't open: the roles are last intake's, to read ahead. */
export function ReadAhead({ buildNow }: { buildNow: number }) {
  return intakeState(intake, useNow(buildNow)) === 'open' ? null : (
    <p className="t-lead fs-muted">{`From the ${intake.ay} intake, to read ahead.`}</p>
  );
}

/** How applying works: the time-progress rail, filled down to the current step. */
export function HowSection({ buildNow }: { buildNow: number }) {
  const now = useNow(buildNow);
  const state = intakeState(intake, now);
  const { finished, current } = railProgress(intake, now);
  return (
    <section id="how" className="ev-sec" aria-labelledby="how-title">
      <div className="fs-wrap fs-split">
        <div className="fs-split-side">
          <h2 className="t-h2" id="how-title">How applying works</h2>
          {finished && <p className="t-lead fs-muted">Dates are announced with the next intake.</p>}
        </div>
        <ol className="fs-rail">
          {intake.steps.map((s, i) => {
            const done = i < current;
            const isNow = i === current;
            // An application round that has started stays "Open" until applications close, never "Done" while it still takes applicants.
            const open = state === 'open' && s.apply && (done || isNow);
            return (
              <li key={s.label} className={`fs-step${done ? ' fs-step--done' : ''}${isNow ? ' fs-step--now' : ''}`} aria-current={isNow ? 'step' : undefined}>
                <span className="fs-mark" aria-hidden="true" />
                <span className="fs-seg" aria-hidden="true"><span className="fs-seg-fill" /></span>
                <div className="fs-stepbody">
                  <div className="fs-stephead">
                    <h3 className="t-h3">{s.label}</h3>
                    {open && <span className="t-meta fs-state--now">Open</span>}
                    {!open && isNow && <span className="t-meta fs-state--now">Now</span>}
                    {!open && done && <span className="t-meta fs-state--done">Done</span>}
                  </div>
                  {!finished && <p className="t-label">{whenLabel(s.start, s.end)}</p>}
                  <p className="fs-muted">{s.detail}</p>
                  {isNow && s.apply && state === 'open' && <ExternalLink href={intake.applyUrl} className="fs-pill fs-pill--primary fs-pill--small">Apply now</ExternalLink>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** The intake block at the foot of a role's facts panel; the Apply pill is described by the role's h1. */
export function RoleStatus({ buildNow, titleId }: { buildNow: number; titleId: string }) {
  const now = useNow(buildNow);
  const state = intakeState(intake, now);
  return (
    <div className="ev-split">
      <p className="font-bold">{statusText(intake, state)}</p>
      {closesIn(intake, now) && <p><Caution now={now} /></p>}
      <MainPill state={state} block describedBy={titleId} />
    </div>
  );
}
