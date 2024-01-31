import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import { useState } from 'react';
import { Select } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UpcomingEventCard from './UpcomingEventCard';

const responsive = {
  monitor: {
    breakpoint: { max: 4000, min: 1420 },
    items: 4,
    // partialVisibilityGutter: 30,
  },
  superLargeDesktop: {
    breakpoint: { max: 1420, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1124 },
    items: 3,
    // partialVisibilityGutter: 30,
  },
  smallDesktop: {
    breakpoint: { max: 1124, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 810 },
    items: 2,
    // partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: { max: 810, min: 750 },
    items: 2,
  },
  mobileLandscape: {
    breakpoint: { max: 750, min: 640 },
    items: 1,
    // partialVisibilityGutter: 140,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const UpcomingEvents = ({ events }: EventsProps) => {
  const upcomingEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() > new Date().getTime()
  );

  const [selectedEventType, setSelectedEventType] = useState('All');

  const filteredEvents =
    selectedEventType === 'All'
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.type === selectedEventType);

  const eventChunks = [];
  const chunkSize = 2;

  for (let i = 0; i < filteredEvents.length; i += chunkSize) {
    const chunk = filteredEvents.slice(i, i + chunkSize);
    eventChunks.push(chunk);
  }

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
        <>
          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to not render carousel on server-side.
              infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={3000}
              keyBoardControl={true}
              partialVisible={true}
              itemClass="carousel-item-padding-40-px"
            >
              {filteredEvents.map(
                (
                  { coverImage, name, cardDescription, location, date, type },
                  cardIndex
                ) => (
                  <div key={cardIndex} className="mb-7 flex justify-center">
                    <UpcomingEventCard
                      coverImage={coverImage}
                      name={name}
                      cardDescription={cardDescription}
                      location={location}
                      date={date}
                      type={type}
                    />
                  </div>
                )
              )}
            </Carousel>
          </div>
          {/* Desktop Carousel */}
          <div className="hidden sm:block">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to not render carousel on server-side.
              infinite={false}
              // autoPlay={true}
              // autoPlaySpeed={3000}
              keyBoardControl={true}
              partialVisible={true}
            >
              {eventChunks.map((chunk, index) => (
                <div key={index}>
                  {chunk.map(
                    (
                      {
                        coverImage,
                        name,
                        cardDescription,
                        location,
                        date,
                        type,
                      },
                      cardIndex
                    ) => (
                      <div key={cardIndex} className="mb-7 flex justify-center">
                        <UpcomingEventCard
                          coverImage={coverImage}
                          name={name}
                          cardDescription={cardDescription}
                          location={location}
                          date={date}
                          type={type}
                        />
                      </div>
                    )
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </>
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
