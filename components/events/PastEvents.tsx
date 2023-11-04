import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import PastEventCard from './PastEventCard';

const PastEvents = ({ events }: EventsProps) => {
  const pastEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() <= new Date().getTime()
  );
  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="green"
        title="Past Events"
        subtitle="A walk down memory lane."
      />
      <div className="mt-10 flex grid w-full grid-flow-col grid-rows-2 flex-wrap place-content-start gap-1 overflow-hidden sm:mt-16 sm:gap-4">
        {pastEvents.map(
          (
            { coverImage, name, cardDescription, location, date, type },
            index
          ) => {
            return (
              <PastEventCard
                key={index}
                coverImage={coverImage}
                name={name}
                cardDescription={cardDescription}
                location={location}
                date={date}
                type={type}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default PastEvents;
