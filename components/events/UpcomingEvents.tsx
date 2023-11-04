import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import UpcomingEventCard from './UpcomingEventCard';

const UpcomingEvents = ({ events }: EventsProps) => {
  const upcomingEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() > new Date().getTime()
  );
  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="blue"
        title="Upcoming Events"
        subtitle="What's up next?"
      />
      {/* Filter Button */}
      {/* <div className=" ml-4 mt-12 flex items-center">
        <button
        type="button"
        className="flex items-center rounded-md bg-[#036167] px-4 py-2 text-white"
        >
        <span className="mr-2">FILTER</span>
        <FaAngleDown />
        </button>
      </div> */}
      <div className="mt-10 flex grid w-full grid-flow-col grid-rows-2 flex-wrap gap-1 overflow-hidden sm:mt-16 sm:gap-4">
        {upcomingEvents.map(
          (
            { coverImage, name, cardDescription, location, date, type },
            index
          ) => {
            return (
              <UpcomingEventCard
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

export default UpcomingEvents;
