import type { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import ComingUp from '@/components/ComingUp';
import HomeHero from '@/components/HomeHero';
import LogoBand from '@/components/LogoBand';
import SummitBand from '@/components/SummitBand';
import { BLURB } from '@/content/site';

// The page is static: this is the build time, which the browser replaces with its own clock after hydrating.
const builtAt = Date.now();

export const metadata: Metadata = { description: BLURB };

export default function Home() {
  const allDepartments = (cls: string) => <Link href="/departments" className={`fs-pill fs-pill--outline ${cls}`}>All departments</Link>;
  return (
    <>
      <HomeHero buildNow={builtAt} />
      <ComingUp buildNow={builtAt} />
      <section id="what-we-do" className="hm-sec" aria-labelledby="wwd-title">
        <div className="fs-wrap">
          <div className="fs-carousel-head">
            <h2 className="t-display-h2" id="wwd-title">What we do</h2>
            {allDepartments('hm-top-only')}
          </div>
          <Accordion />
          {allDepartments('hm-bottom-only')}
        </div>
      </section>
      <SummitBand buildNow={builtAt} />
      <LogoBand />
    </>
  );
}
