import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import EventCard from '@/components/EventCard';
import Icon from '@/components/Icon';
import { departments, getDepartment, projects } from '@/content/departments';
import { events } from '@/content/events';
import { prefetchFor } from '@/content/site';
import { directorsOf } from '@/content/team';
import ProjectLists from './ProjectLists';

type Props = { params: Promise<{ slug: string }> };

// Static pages: the build time, which the browser replaces with its own clock (Current vs Past projects).
const builtAt = Date.now();

export const dynamicParams = false;
export const generateStaticParams = () => departments.map((d) => ({ slug: d.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDepartment((await params).slug);
  return d ? { title: d.name, description: d.lead } : {};
}

export default async function DepartmentPage({ params }: Props) {
  const d = getDepartment((await params).slug);
  if (!d) notFound();
  const own = projects.filter((p) => p.department === d.slug);
  const recent = events
    .filter((e) => e.departments?.includes(d.slug))
    .sort((a, b) => Date.parse(b.start) - Date.parse(a.start))
    .slice(0, 3);
  const teamHref = `/about#${d.slug}`;
  const rolesHref = `/join#${d.slug}`;

  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/'], ['Departments', '/departments']]} current={d.name} />
        <h1 className="t-h1">{d.name}</h1>
        <p className="t-lead fs-muted max-w-measure">{d.lead}</p>
      </div>

      <div className="fs-wrap ev-sec">
        <div className="ev-detail">
          <div className="ev-cover">
            <Image src={d.photo.src} alt={d.photo.alt} fill preload sizes="(max-width: 1000px) 100vw, 66vw" />
          </div>

          <aside className="fs-panel fs-facts fs-facts--sticky ev-facts" aria-label="Department facts">
            <dl>
              <div>
                <dt>Wing</dt>
                <dd>{d.wing}</dd>
              </div>
              <div>
                <dt>Directors</dt>
                {directorsOf(d.slug).map((p) => <dd key={p.id}>{p.name}</dd>)}
                <dd className="fs-fact-action">
                  <Link href={teamHref} prefetch={prefetchFor(teamHref)} className="fs-pill fs-pill--outline fs-pill--small">Meet the team</Link>
                </dd>
              </div>
              <div>
                <dt>Roles</dt>
                <dd>Roles and how to apply are on the Join page.</dd>
                <dd className="fs-fact-action">
                  <Link href={rolesHref} prefetch={prefetchFor(rolesHref)} className="fs-pill fs-pill--outline fs-pill--small">{`See ${d.name} roles`}</Link>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="ev-content">
            <section aria-labelledby="wwd-title">
              <h2 className="t-h2" id="wwd-title">What we do</h2>
              {d.about.map((p) => <p key={p} className="t-body">{p}</p>)}
            </section>
            {own.length > 0 && <ProjectLists projects={own} buildNow={builtAt} />}
            {recent.length > 0 && (
              <section className="ev-wide" aria-labelledby="events-title">
                <h2 className="t-h2" id="events-title">Recent events</h2>
                <div className="fs-cards">
                  {recent.map((e) => <EventCard key={e.slug} event={e} buildNow={builtAt} />)}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <section className="ev-sec-last" aria-labelledby="other-title">
        <div className="fs-wrap fs-split">
          <div className="fs-split-side">
            <h2 className="t-h2" id="other-title">Other departments</h2>
            <Link href="/departments" className="fs-pill fs-pill--outline fs-pill--small">All departments</Link>
          </div>
          <ul className="fs-rows">
            {departments.filter((o) => o.slug !== d.slug).map((o) => (
              <li key={o.slug} className="fs-rowitem">
                <div className="fs-rowtext">
                  <h3 className="t-row"><Link href={`/departments/${o.slug}`} className="fs-rowlink">{o.name}</Link></h3>
                  <p className="fs-muted">{o.lead}</p>
                </div>
                <Icon name="next" size={20} className="fs-chev" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
