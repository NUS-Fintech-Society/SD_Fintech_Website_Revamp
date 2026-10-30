import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import EventLists from './EventLists';

const LEAD = 'Workshops, talks and the NUS Fintech Summit, run by students with our industry partners.';

// The page is static: this is the build time, which the browser replaces with its own clock after hydrating.
const builtAt = Date.now();

export const metadata: Metadata = { title: 'Events', description: LEAD };

export default function EventsPage() {
  return (
    <>
      <div className="fs-wrap ev-head">
        <Breadcrumb trail={[['Home', '/']]} current="Events" />
        <h1 className="t-h1">Events</h1>
        <p className="t-lead fs-muted max-w-measure">{LEAD}</p>
      </div>
      <EventLists buildNow={builtAt} />
    </>
  );
}
