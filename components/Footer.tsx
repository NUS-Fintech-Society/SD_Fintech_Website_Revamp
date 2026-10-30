import Link from 'next/link';
import Icon from '@/components/Icon';
import { BLURB, CONTACT_EMAIL, SUMMIT_URL, TELEGRAM_URL, prefetchFor } from '@/content/site';

const socials = [
  { href: 'https://www.instagram.com/nusfintech', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.linkedin.com/company/nus-fintech-society', label: 'LinkedIn', icon: 'linkedin' },
  { href: TELEGRAM_URL, label: 'Telegram', icon: 'telegram' },
  { href: `mailto:${CONTACT_EMAIL}`, label: `Email ${CONTACT_EMAIL}`, icon: 'email' },
] as const;

const columns = [
  { title: 'Society', links: [['About', '/about'], ['Our team', '/about#team'], ['Departments', '/departments']] },
  { title: 'Get involved', links: [['Events', '/events'], ['Join us', '/join']] },
  { title: 'Partners', links: [['Partner with us', '/partners'], ['NUS Fintech Summit', SUMMIT_URL]] },
];

export default function Footer() {
  return (
    <footer className="fs-footer fs-on-dark">
      <div className="fs-wrap fs-footer-inner">
        <div className="fs-footer-top">
          <div className="fs-footer-brand">
            <Link href="/" className="fs-brandlink"><span className="fs-brandmark" aria-hidden="true" />NUS Fintech Society</Link>
            <p className="fs-footer-blurb">{BLURB}</p>
            <div className="fs-socials">
              {socials.map((s) => (
                <a key={s.icon} href={s.href} className="fs-iconbtn" aria-label={s.label}><Icon name={s.icon} /></a>
              ))}
            </div>
          </div>
          <div className="fs-footer-cols">
            {columns.map((c) => (
              <nav key={c.title} className="fs-footer-col" aria-label={c.title}>
                <h2>{c.title}</h2>
                {c.links.map(([label, href]) => (
                  <Link key={href} href={href} prefetch={prefetchFor(href)} className="fs-navlink">{label}</Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className="fs-footer-base">
          <p>A student society of <a href="https://www.comp.nus.edu.sg/">NUS School of Computing</a>.</p>
          <span>© National University of Singapore. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
