// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment } from 'react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';

const OtherEvents = ({ events }: EventsProps) => {
  return (
    <MaxWidth>
      <div className="mb-10">
        <div className="mt-16 text-xl font-bold sm:text-2xl lg:text-3xl">
          Upcoming Events
        </div>
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
    </MaxWidth>
  );
};

export default OtherEvents;
