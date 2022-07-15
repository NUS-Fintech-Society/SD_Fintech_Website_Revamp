import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const UpcomingEvents = () => {
  return (
    <div className="relative h-[calc(60vh-64px)] min-h-[400px] w-screen">
      <MaxWidth>
        <div>next upcoming event</div>
      </MaxWidth>
    </div>
  );
};

export default UpcomingEvents;
