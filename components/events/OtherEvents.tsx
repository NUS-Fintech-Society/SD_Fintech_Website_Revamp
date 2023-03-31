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
  const readMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        readMoreRef.current &&
        !readMoreRef.current.contains(event.target as Node)
      ) {
        setIsReadMore(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [readMoreRef]);
  return (
    <div className="relative h-[180px] w-[330px] rounded-2xl bg-[#004C98]/50 p-8 md:h-[630px] md:w-[1080px]">
      <Image
        src="/images/events/event_image.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-2xl shadow-lg"
      />
      {isReadMore ? (
        <div className="mt-2 md:mt-12" ref={readMoreRef}>
          <h2 className="font-bold text-white md:text-5xl">
            Fintech Event 2020
          </h2>
          <h3 className="mt-6 text-xs text-white md:text-2xl">
            This was an event that was held in the year 2020 along with Venmo.
            We had our first ever virtual Welcome Tea information sharing
            session to find out more about what we do and who we are looking for
            !
          </h3>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      ) : (
        <div className="absolute bottom-5">
          <h2 className="font-bold text-white md:text-6xl">
            Fintech Event 2020
          </h2>
          <h3 className="mt-6 text-xs text-white md:text-2xl">
            This was an event that was held in the year 2020 about so and so...
          </h3>
          <div>
            <button
              type="button"
              className="outline-white-500 mt-6 rounded-full py-2 px-4 text-xs
              font-bold text-white outline outline-offset-2 md:text-xl"
              onClick={(event) => {
                event.stopPropagation();
                setIsReadMore(true);
              }}
            >
              Read More...
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const OtherEvents = ({ events }: EventsProps) => {
  const [isShown, setIsShown] = useState(false);
  const expandedCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        expandedCardRef.current &&
        !expandedCardRef.current.contains(event.target as Node)
      ) {
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
              (
                { coverImage, cardDescription, name, location, date },
                index
              ) => (
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

      <div className={`${isShown ? 'bg-black/70' : ''} flex justify-center`}>
        <div
          ref={expandedCardRef}
          className="mt-6 grid grid-cols-2 gap-4 sm:ml-10 lg:grid-cols-3"
        >
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsShown(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setIsShown(true);
              }
            }}
          >
            <PastEventCard />
          </div>

          <div className="absolute z-20">
            {isShown && <ExpandPastEventCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
