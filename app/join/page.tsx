import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import { HowSection, IntakePanel, ReadAhead } from '@/components/Intake';
import RoleRows from '@/components/RoleRows';
import { departments } from '@/content/departments';
import { expectations, joinFaq, roles } from '@/content/join';
import { CONTACT_EMAIL } from '@/content/site';

const LEAD = 'Students run every department, from blockchain research to partnerships. One application covers them all.';

export const metadata: Metadata = { title: 'Join us', description: LEAD };

// Static page: the build time, which the browser replaces with its own clock (the intake state).
const builtAt = Date.now();

const groups = departments.map((d) => ({ ...d, roles: roles.filter((r) => r.department === d.slug) })).filter((d) => d.roles.length > 0);

function AskByEmail({ className }: { className: string }) {
  return (
    <div className={`jn-more ${className}`}>
      <p className="t-lead fs-muted">Something else? Ask us by email.</p>
      <a href={`mailto:${CONTACT_EMAIL}`} className="fs-pill fs-pill--outline fs-pill--small" aria-label={`Email us at ${CONTACT_EMAIL}`}>Email us</a>
    </div>
  );
}

export default function JoinPage() {
  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/']]} current="Join us" />
        <h1 className="t-h1">Join us</h1>
        <p className="t-lead fs-muted max-w-measure">{LEAD}</p>
        <IntakePanel buildNow={builtAt} />
      </div>

      <section className="ev-sec" aria-labelledby="expect-title">
        <div className="fs-wrap ev-stack">
          <h2 className="t-h2" id="expect-title">What to expect</h2>
          <dl className="fs-factgrid">
            {expectations.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd className="t-fact">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="roles" className="ev-sec" aria-labelledby="roles-title">
        <div className="fs-wrap ev-stack">
          <h2 className="t-h2" id="roles-title">Roles</h2>
          <ReadAhead buildNow={builtAt} />
          <nav aria-label="Departments" className="fs-row-actions">
            {groups.map((d) => <a key={d.slug} href={`#${d.slug}`} className="fs-pill fs-pill--outline fs-pill--small">{d.name}</a>)}
          </nav>
          <div className="jn-groups">
            {groups.map((d) => (
              <section key={d.slug} id={d.slug} className="fs-index fs-split" aria-labelledby={`${d.slug}-title`}>
                <div className="fs-split-side">
                  <h3 className="t-h3" id={`${d.slug}-title`}>{d.name}</h3>
                  <Link href={`/departments/${d.slug}`} className="fs-pill fs-pill--outline fs-pill--small">{`About ${d.name}`}</Link>
                </div>
                <RoleRows roles={d.roles} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <HowSection buildNow={builtAt} />

      <section className="ev-sec" aria-labelledby="faq-title">
        <div className="fs-wrap fs-split">
          <div className="fs-split-side">
            <h2 className="t-h2" id="faq-title">Questions</h2>
            <AskByEmail className="jn-more--side" />
          </div>
          <div className="min-w-0">
            <div className="fs-faq">
              {joinFaq.map((f) => (
                <details key={f.q}>
                  <summary className="t-strong">{f.q}<Icon name="down" size={20} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            {/* The same block after the list on mobile; only one of the two is ever displayed (and so read or tabbed to). */}
            <AskByEmail className="jn-more--end" />
          </div>
        </div>
      </section>

      <section className="ev-sec-last" aria-label="Applications">
        <div className="fs-wrap">
          <IntakePanel buildNow={builtAt} closing />
        </div>
      </section>
    </>
  );
}
