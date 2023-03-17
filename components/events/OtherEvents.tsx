// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment, useState, useEffect, useRef } from 'react';
import SectionHeader from '@components/layout/SectionHeader';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';
import PastEventCard from './PastEventCard';

function ExpandPastEventCard() {
  const [isReadMore, setIsReadMore] = useState(false);
  const readMoreRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (readMoreRef.current && !readMoreRef.current.contains(event.target)) {
        setIsReadMore(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [readMoreRef]);
  return (
    <div className="relative h-[180px] w-[330px] rounded-2xl bg-[#004C98]/50 p-8 md:h-[630px] md:w-[1050px]">
      <Image
        src="/images/events/event_image.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-2xl shadow-lg"
      />
      {isReadMore ? (
        <div className='mt-2 md:mt-12'>
          <h2 className="font-bold text-white md:text-5xl">Fintech Event 2020</h2>
          <h3 className="mt-6 text-xs text-white md:text-2xl">
          This was an event that was held in the year 2020 along with Venmo.
          We had our first ever virtual Welcome Tea information sharing session 
          to find out more about what we do and who we are looking for !
          </h3>
        </div>
      ) : (
        <div className='absolute bottom-5'>
          <h2 className="font-bold text-white md:text-6xl">Fintech Event 2020</h2>
          <h3 className="mt-6 text-xs text-white md:text-2xl">
            This was an event that was held in the year 2020 about so and so...
          </h3>
          <div>
            <button className='mt-6 text-xs outline outline-offset-2 outline-white-500 text-white
              font-bold py-2 px-4 rounded-full md:text-xl'
              onClick={(event) => {
                event.stopPropagation();
                setIsReadMore(true);
              }}>
              Read More...
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const OtherEvents = ({ events }: EventsProps) => {
  const [isShown, setIsShown] = useState(false);

  const expandedCardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (expandedCardRef.current && !expandedCardRef.current.contains(event.target)) {
        setIsShown(false); 
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [expandedCardRef]);

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

      <div className={`${isShown ? 'bg-black/70' : ''}`}>
        <div ref={expandedCardRef} 
          className="mt-6 grid grid-cols-2 gap-4 px-8 sm:ml-10 md:px-16 lg:grid-cols-3">
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div onClick={() => setIsShown(true)}>
            <PastEventCard />
          </div>
          <div className='absolute z-20'>
            {isShown && <ExpandPastEventCard />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OtherEvents;
