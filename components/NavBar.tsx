'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { BLURB, prefetchFor } from '@/content/site';

const links = [
  ['About', '/about'],
  ['Departments', '/departments'],
  ['Events', '/events'],
  ['Partners', '/partners'],
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  // Home only: see-through while just the hero photo is under the bar; frosted just before
  // the bar would overlap the hero's text, wherever that sits at this screen size.
  const home = pathname === '/';
  const header = useRef<HTMLElement>(null);
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    if (!home) return;
    const update = () => {
      const text = document.querySelector('.fs-hero-text');
      const barBottom = header.current?.getBoundingClientRect().bottom ?? 0;
      const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--spacing-space-4')) || 0;
      setAtTop(text ? text.getBoundingClientRect().top > barBottom + gap : scrollY <= 0);
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
    };
  }, [home]);
  const overHero = home && atTop;
  // A section's child pages (an event, a role) keep that section's nav link marked as current.
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined);
  const close = () => menu.current?.close();

  return (
    <header ref={header} className={overHero ? 'fs-bar fs-bar--hero fs-on-dark' : 'fs-bar'}>
      <div className="fs-wrap fs-bar-inner">
        <Link href="/" className="fs-brandlink t-strong" aria-label="NUS Fintech Society home">
          <span className="fs-brandmark" aria-hidden="true" />
          <span className="fs-brandtext">NUS Fintech Society</span>
        </Link>
        <nav className="fs-navlinks" aria-label="Main">
          {links.map(([label, href]) => (
            <Link key={href} href={href} prefetch={prefetchFor(href)} className="fs-navlink" aria-current={current(href)}>{label}</Link>
          ))}
        </nav>
        <div className="fs-bar-actions">
          <Link href="/join" prefetch={prefetchFor('/join')} className={`fs-pill ${overHero ? 'fs-pill--orange' : 'fs-pill--primary'} fs-pill--small`} aria-current={current('/join')}>Join us</Link>
          <button
            ref={burger}
            type="button"
            className="fs-iconbtn fs-burger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => {
              menu.current?.showModal();
              closeButton.current?.focus(); // land on Close, not the logo link (the W3C ARIA dialog pattern)
              setOpen(true);
            }}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {/* Esc closes a modal dialog natively; onClose covers Esc, the close button and link taps. */}
      <dialog
        ref={menu}
        id="site-menu"
        className="fs-menu-dialog"
        aria-label="Menu"
        onClose={() => {
          setOpen(false);
          burger.current?.focus();
        }}
      >
        <div className="fs-menu fs-on-dark">
          <div className="fs-menu-top">
            <Link href="/" className="fs-brandlink t-strong" aria-label="NUS Fintech Society home" onClick={close}>
              <span className="fs-brandmark" aria-hidden="true" />
              <span className="fs-brandtext">NUS Fintech Society</span>
            </Link>
            <button ref={closeButton} type="button" className="fs-iconbtn" aria-label="Close menu" onClick={close}>
              <Icon name="close" />
            </button>
          </div>
          <nav aria-label="Main menu">
            <ul className="fs-menu-links">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} prefetch={prefetchFor(href)} className="fs-menu-link t-open" aria-current={current(href)} onClick={close}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/join" prefetch={prefetchFor('/join')} className="fs-pill fs-pill--orange fs-pill--block" aria-current={current('/join')} onClick={close}>Join us</Link>
          <p className="fs-menu-blurb">{BLURB}</p>
        </div>
      </dialog>
    </header>
  );
}
