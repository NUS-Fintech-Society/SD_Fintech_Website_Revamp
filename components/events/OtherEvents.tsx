// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment, useState } from 'react';
import SectionHeader from '@components/layout/SectionHeader';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';
import PastEventCard from './PastEventCard';

function ExpandPastEventCard() {
  return (
    <div className="relative h-[680px] w-[1400px] rounded-2xl p-8">
      <Image
        src="/images/events/event_image.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-2xl shadow-lg"
      />
      <div className='absolute bottom-5'>
        <h2 className="font-bold text-white sm:text-6xl">Fintech Event 2020</h2>
        <h3 className="mt-6 text-xs text-white sm:text-2xl">
          This was an event that was held in the year 2020 about so and so...
        </h3>
        <button className='mt-6 outline outline-offset-2 outline-white-500 text-white font-bold py-2 px-4 rounded-full'>
          Read More...
        </button>
      </div>
    </div>
  )
}

const OtherEvents = ({ events }: EventsProps) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <MaxWidth>
        <div className="section-my">
          <h2 className="mb-10 text-center text-h2 font-bold">
            All Upcoming Events
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-10">
            {events.map(
              ({ coverImage, cardDescription, name, location, date }, index) => (
                <Fragment key={index}>
                  <EventCard
                    coverImage={coverImage}
                    cardDescription={cardDescription}
                    name={name}
                    location={location}
                    date={date}
                  />
                </Fragment>
              )
            )}
          </div>
        </div>

        <SectionHeader
          color="green"
          title="Past Events"
          subtitle="A walk down memory lane"
        />
      </MaxWidth>

      <div className='relative'>
        <div className="mt-6 ml-8 grid grid-cols-2 gap-4 sm:ml-10 lg:grid-cols-3">
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(current => !current)}>
            <PastEventCard />
          </div>
        </div>
        <div className='pl-10'>
          {isShown && <ExpandPastEventCard />}
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
