import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import { departments } from '@/content/departments';
import { membersOf, team, type Person, type TeamGroup } from '@/content/team';

const LEAD = `What NUS Fintech Society does, and the students who run it in AY${team.ay}.`;

export const metadata: Metadata = { title: 'About', description: LEAD };

const groups: { id: TeamGroup; name: string }[] = [
  { id: 'advisors', name: 'Advisors' },
  { id: 'president', name: 'President' },
  ...departments.map((d) => ({ id: d.slug, name: d.name })),
];

const facts: [string, string, string?][] = [
  ['Founded', '2018'],
  ['Part of', 'NUS School of Computing', 'https://www.comp.nus.edu.sg'],
  ['Founded with', 'NUS Fintech Lab', 'https://fintechlab.nus.edu.sg'],
];

const initials = (name: string) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

function PersonCard({ person, role }: { person: Person; role: Person['roles'][number] }) {
  return (
    <li className="fs-person">
      <div className="fs-person-photo">
        {person.photo ? (
          // The name follows, so a screen reader hears it once.
          <Image src={person.photo} alt="" fill sizes="(max-width: 1000px) 45vw, 260px" />
        ) : (
          <span className="fs-initials t-h1" aria-hidden="true">{initials(person.name)}</span>
        )}
      </div>
      <h4 className="t-h3">{person.name}</h4>
      <p className="fs-person-role">
        {role.label}
        {role.also && <><br />{role.also}</>}
      </p>
      {person.linkedin && (
        <a href={person.linkedin} className="fs-iconbtn" aria-label={`${person.name} on LinkedIn`}><Icon name="linkedin" /></a>
      )}
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/']]} current="About" />
        <h1 className="t-h1">About</h1>
        <p className="t-lead fs-muted max-w-measure">{LEAD}</p>
      </div>

      <section id="who-we-are" className="ev-sec" aria-labelledby="who-title">
        <div className="fs-wrap fs-split">
          <div className="fs-split-side fs-facts">
            <h2 className="t-h2" id="who-title">Who we are</h2>
            <dl>
              {facts.map(([term, value, href]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd className="t-fact">{href ? <a href={href} className="fs-link ab-factlink">{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ev-stack max-w-measure">
            <p>We&apos;re a student-led society at NUS bringing together students passionate about finance and technology. Through workshops, talks, industry partnerships, projects and events like the NUS Fintech Summit, we give members hands-on exposure across Blockchain, Machine Learning and Quant, with opportunities to connect with faculty and industry.</p>
            <p>We aim to build a thriving community around the latest technology developments and their applications in finance. We provide structured pathways for members to learn, build and lead, strengthen collaboration across departments, and connect strong student initiatives with the NUS Fintech Lab, faculty and industry opportunities.</p>
            <p>Our vision is a student-led fintech community where members develop strong technical and professional capabilities through meaningful projects, training and industry exposure. Whether you&apos;re a beginner or already building, there&apos;s a place for you here.</p>
            <div className="fs-row-actions">
              <Link href="/departments" className="fs-pill fs-pill--outline">Our departments</Link>
              <Link href="/events" className="fs-pill fs-pill--outline">Events</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="ev-sec" aria-labelledby="team-title">
        <div className="fs-wrap ev-stack">
          <div className="ev-stack-sm">
            <h2 className="t-h2" id="team-title">Our team</h2>
            <p className="t-lead fs-muted">{`AY${team.ay} committee`}</p>
          </div>
          <div>
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="fs-index fs-split" aria-labelledby={`${g.id}-title`}>
                <div className="fs-split-side">
                  <h3 className="t-h3" id={`${g.id}-title`}>{g.name}</h3>
                  {g.id !== 'advisors' && g.id !== 'president' && (
                    <Link href={`/departments/${g.id}`} className="fs-pill fs-pill--outline fs-pill--small">{`About ${g.name}`}</Link>
                  )}
                </div>
                <ul className="fs-people">
                  {membersOf(g.id).map(({ person, role }) => <PersonCard key={person.id} person={person} role={role} />)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-sec-last" aria-labelledby="work-title">
        <div className="fs-wrap">
          <div className="fs-cta">
            <div className="fs-cta-art" aria-hidden="true">
              <Image src="/images/about/avatar-finance-expert.svg" alt="" width={260} height={260} />
              <Image src="/images/about/avatar-software-engineer.svg" alt="" width={260} height={260} />
            </div>
            <div className="fs-cta-text">
              <h2 className="fs-cta-title t-display-h2" id="work-title">Come build with us</h2>
              <p>You don&apos;t need to be an expert to join. Pick a department and learn by building. Run a company? Partner with us on workshops, projects and the NUS Fintech Summit.</p>
              <div className="fs-row-actions">
                <Link href="/partners" className="fs-pill fs-pill--primary">Partner with us</Link>
                <Link href="/join" className="fs-pill fs-pill--ink">Join us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
