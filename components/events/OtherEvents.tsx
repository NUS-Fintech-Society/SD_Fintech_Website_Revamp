// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment } from 'react';
import SectionHeader from '@components/layout/SectionHeader';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';
import PastEventCard from './PastEventCard';

const OtherEvents = ({ events }: EventsProps) => {
  return (
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

      <PastEventCard />
    </MaxWidth>
  );
};

export default OtherEvents;
