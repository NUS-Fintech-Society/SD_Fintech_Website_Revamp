import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import { RoleStatus } from '@/components/Intake';
import RoleRows from '@/components/RoleRows';
import { getDepartment } from '@/content/departments';
import { departmentFaq, getRole, roles } from '@/content/join';

type Props = { params: Promise<{ slug: string }> };

// Static pages: the build time, which the browser replaces with its own clock (the intake state).
const builtAt = Date.now();

export const dynamicParams = false;
export const generateStaticParams = () => roles.map((r) => ({ slug: r.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRole((await params).slug);
  return r ? { title: `${r.title} | Join us`, description: r.line } : {};
}

export default async function RolePage({ params }: Props) {
  const r = getRole((await params).slug);
  const d = r && getDepartment(r.department);
  if (!r || !d) notFound();
  const faq = departmentFaq[d.slug] ?? [];
  // Only the same department's roles: a role page never points sideways into another department.
  const others = roles.filter((o) => o.department === d.slug && o.slug !== r.slug).slice(0, 3);

  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/'], ['Join us', '/join']]} current={r.title} />
        <h1 className="t-h1 max-w-measure" id="role-title">{r.title}</h1>
      </div>

      <div className={`fs-wrap ${others.length ? 'ev-sec' : 'ev-sec-last'}`}>
        <div className="ev-detail ev-detail--nocover">
          <aside className="fs-panel fs-facts fs-facts--sticky ev-facts" aria-label="Role facts">
            <dl>
              <div>
                <dt>Department</dt>
                <dd className="font-bold">{d.name}</dd>
                <dd className="fs-fact-action">
                  <Link href={`/departments/${d.slug}`} className="fs-pill fs-pill--outline fs-pill--small">{`About ${d.name}`}</Link>
                </dd>
              </div>
              <div>
                <dt>Wing</dt>
                <dd>{d.wing}</dd>
              </div>
            </dl>
            <RoleStatus buildNow={builtAt} titleId="role-title" />
          </aside>

          <div className="ev-content">
            {r.do.length > 0 && (
              <section aria-labelledby="do-title">
                <h2 className="t-h2" id="do-title">What you&apos;ll do</h2>
                <ul>{r.do.map((x) => <li key={x}>{x}</li>)}</ul>
              </section>
            )}
            {r.lookFor.length > 0 && (
              <section aria-labelledby="look-title">
                <h2 className="t-h2" id="look-title">What we look for</h2>
                <ul>{r.lookFor.map((x) => <li key={x}>{x}</li>)}</ul>
              </section>
            )}
            {r.training && (
              <section aria-labelledby="training-title">
                <h2 className="t-h2" id="training-title">Training</h2>
                <p className="t-body">{r.training}</p>
              </section>
            )}
            {r.subteams && r.subteams.length > 0 && (
              <section aria-labelledby="teams-title">
                <h2 className="t-h2" id="teams-title">Sub-teams</h2>
                <ul>{r.subteams.map((t) => <li key={t.name}><strong>{t.name}:</strong> {t.line}</li>)}</ul>
              </section>
            )}
            {faq.length > 0 && (
              <section aria-labelledby="q-title">
                <h2 className="t-h2" id="q-title">Questions</h2>
                <div className="fs-faq">
                  {faq.map((f) => (
                    <details key={f.q}>
                      <summary className="t-strong">{f.q}<Icon name="down" size={20} /></summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <section className="ev-sec-last" aria-labelledby="other-title">
          <div className="fs-wrap fs-split">
            <div className="fs-split-side">
              <h2 className="t-h2" id="other-title">{`Other roles in ${d.name}`}</h2>
              <Link href="/join#roles" className="fs-pill fs-pill--outline fs-pill--small">All roles</Link>
            </div>
            <RoleRows roles={others} level="h3" />
          </div>
        </section>
      )}
    </>
  );
}
