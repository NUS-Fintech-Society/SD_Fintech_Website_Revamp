import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import { departments } from '@/content/departments';

const LEAD = 'Five departments run the society\'s projects, programmes and partnerships.';

export const metadata: Metadata = { title: 'Departments', description: LEAD };

/** The checkerboard: each department's photo beside a colour tile; sides swap and colours alternate by row. */
export default function DepartmentsPage() {
  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/']]} current="Departments" />
        <h1 className="t-h1">Departments</h1>
        <p className="t-lead fs-muted max-w-measure">{LEAD}</p>
      </div>
      <div className="fs-wrap ev-sec-last">
        <ul className="fs-pairs">
          {departments.map((d, i) => {
            const orange = i % 2 === 1;
            return (
              <li key={d.slug} className={orange ? 'fs-pair fs-pair--flip' : 'fs-pair'}>
                <div className="fs-pair-media">
                  <Image src={d.photo.src} alt={d.photo.alt} fill preload={i === 0} sizes="(max-width: 700px) 100vw, 50vw" />
                </div>
                <div className={orange ? 'fs-tile fs-tile--orange' : 'fs-tile fs-tile--blue fs-on-dark'}>
                  <h2 className="fs-tile-name t-display-h2">{d.name}</h2>
                  <div className="fs-tile-foot">
                    <p className="t-lead">{d.lead}</p>
                    <Link href={`/departments/${d.slug}`} className={orange ? 'fs-go fs-go--blue' : 'fs-go fs-go--orange'} aria-label={`Explore ${d.name}`}>
                      <Icon name="arrow" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
