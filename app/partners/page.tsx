import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CopyEmail from '@/components/CopyEmail';
import PartnerLogo from '@/components/PartnerLogo';
import { partners, reach } from '@/content/partners';
import { CONTACT_EMAIL, SUMMIT_URL } from '@/content/site';

const LEAD = 'Companies work with our members on workshops, talks and the NUS Fintech Summit.';
const SUBJECT = 'Partnership Enquiry';

export const metadata: Metadata = { title: 'Partners', description: LEAD };

const count = (n: number | null) => (n === null ? '[n]' : n.toLocaleString('en-SG'));
const figures: [figure: string, label: string][] = [
  [count(reach.members), `members in ${reach.membersAy}`],
  [count(reach.summit), `participants at ${reach.summitEdition}`],
  [count(reach.telegram), `on our Telegram channel${reach.telegramAsOf ? ` (as of ${reach.telegramAsOf})` : ''}`],
];

const ways: { title: string; text: string; link?: ReactNode }[] = [
  {
    title: 'Run a workshop or talk',
    text: 'Teach a tool or idea from your work in a session on campus.',
    link: <Link href="/events" className="fs-link">Past events</Link>,
  },
  {
    title: 'Set a Summit challenge',
    text: 'Give hackathon teams a problem statement or a bounty track, then judge what they build.',
    link: <a href={SUMMIT_URL} className="fs-link">NUS Fintech Summit</a>,
  },
  { title: 'Meet students at the Summit', text: 'Speak on a panel, or run a booth at the career fair on demo day.' },
];

export default function PartnersPage() {
  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/']]} current="Partners" />
        <h1 className="t-h1">Partners</h1>
        <p className="t-lead fs-muted max-w-measure">{LEAD}</p>
        <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`} className="fs-pill fs-pill--primary self-start mt-space-3">
          Email us<span className="fs-sr"> at {CONTACT_EMAIL}</span>
        </a>
      </div>

      <section id="past-partners" className="fs-band fs-on-dark" aria-labelledby="past-partners-title">
        <div className="fs-wrap">
          <h2 className="t-h2" id="past-partners-title">Past partners</h2>
          <ul className="fs-logos" aria-labelledby="past-partners-title">
            {partners.map((p) => (
              <li key={p.slug} className="fs-logocell"><PartnerLogo p={p} alt={p.name} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="reach" className="ev-sec pt-section-md bp-mobile:pt-section-md-mobile" aria-labelledby="reach-title">
        <div className="fs-wrap ev-stack">
          <div className="ev-stack-sm">
            <h2 className="t-h2" id="reach-title">Who you&apos;ll reach</h2>
            <p className="t-lead fs-muted">Students you can meet through us.</p>
          </div>
          <ul className="fs-figs">
            {figures.map(([figure, label]) => (
              <li key={label} className="fs-fig">
                <span className="t-fig">{figure}</span>
                <span className="fs-fig-label t-fact">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ways" className="ev-sec" aria-labelledby="ways-title">
        <div className="fs-wrap ev-stack">
          <div className="ev-stack-sm">
            <h2 className="t-h2" id="ways-title">What partners do with us</h2>
            <p className="t-lead fs-muted">Three ways companies have taken part.</p>
          </div>
          <ul className="fs-rows fs-rows--split">
            {ways.map((w) => (
              <li key={w.title} className="fs-rowitem">
                <h3 className="t-row">{w.title}</h3>
                <p className="fs-muted">{w.text}{w.link && <> {w.link}</>}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="ev-sec-last" aria-labelledby="contact-title">
        <div className="fs-wrap">
          <div className="fs-cta">
            <div className="fs-cta-art" aria-hidden="true">
              <Image src="/images/partners/avatar-industry-partner.svg" alt="" width={260} height={260} />
              <Image src="/images/partners/avatar-student.svg" alt="" width={260} height={260} />
            </div>
            <div className="fs-cta-text">
              <h2 className="fs-cta-title t-display-h2" id="contact-title">Partner with us</h2>
              <p>Tell us about your organisation, what you have in mind and rough timing, and we&apos;ll get back to you.</p>
              <CopyEmail email={CONTACT_EMAIL} subject={SUBJECT} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
