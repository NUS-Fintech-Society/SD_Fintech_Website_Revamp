import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import UpcomingEventCard from './UpcomingEventCard';
import { useState } from 'react';
import { Select } from '@chakra-ui/react';

const UpcomingEvents = ({ events }: EventsProps) => {
  const upcomingEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() > new Date().getTime()
  );

  const [selectedEventType, setSelectedEventType] = useState('All');

  const filteredEvents =
    selectedEventType === 'All'
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.type === selectedEventType);

  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="blue"
        title="Upcoming Events"
        subtitle="What's up next?"
      />
      <Select
        bg={'#D1E5F4'}
        color={'#004C98'}
        borderRadius={'xl'}
        fontWeight={'bold'}
        size={'sm'}
        value={selectedEventType}
        width={'fit-content'}
        onChange={(e) => setSelectedEventType(e.target.value)}
        margin={6}
      >
        <option value="All">All Events</option>
        <option value="Internal">Internal</option>
        <option value="External">External</option>
      </Select>
      {filteredEvents.length > 0 ? (
        <div className="grid w-full grid-flow-col grid-rows-2 place-content-start gap-1 overflow-hidden sm:gap-4">
          {filteredEvents.map(
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
      ) : (
        <div className="flex items-center justify-center">
          <div className="mt-2 text-base md:mt-4 md:text-2xl lg:mt-6 lg:text-3xl">
            No Events To Display
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
