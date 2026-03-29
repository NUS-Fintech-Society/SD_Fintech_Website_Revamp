import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import PastEventCard from './PastEventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import EventModal from './EventModal';

const responsive = {
  monitor: {
    breakpoint: { max: 4000, min: 1420 },
    items: 4,
  },
  superLargeDesktop: {
    breakpoint: { max: 1420, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1124 },
    items: 3,
  },
  smallDesktop: {
    breakpoint: { max: 1124, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 810 },
    items: 2,
  },
  smallTablet: {
    breakpoint: { max: 810, min: 750 },
    items: 2,
  },
  mobileLandscape: {
    breakpoint: { max: 750, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const PastEvents = ({ events }: EventsProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const pastEvents: Event[] = events
    .filter((e) => new Date(e.date).getTime() <= new Date().getTime())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="green"
        title="Past Events"
        subtitle="A walk down memory lane."
      />

      {/* Mobile Carousel */}
      <div className="sm:hidden">
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          ssr={false}
          infinite={false}
          keyBoardControl
          partialVisible
          itemClass="carousel-item-padding-40-px"
        >
          {pastEvents.map((event, index) => (
            <div key={index} className="my-7 flex justify-center">
              <PastEventCard
                {...event}
                onClick={() => setSelectedEvent(event)}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Carousel */}
      {pastEvents.length > 0 ? (
        <div className="hidden sm:block">
          <Carousel
            swipeable
            draggable
            showDots
            responsive={responsive}
            ssr={false}
            infinite={false}
            keyBoardControl
            partialVisible
          >
            {pastEvents.map((event, index) => (
              <div key={index} className="my-7 flex justify-center">
                <PastEventCard
                  {...event}
                  onClick={() => setSelectedEvent(event)}
                />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="mt-2 text-base md:mt-4 md:text-2xl lg:mt-6 lg:text-3xl">
            No Events To Display
          </div>
        </div>
      )}

      {/* Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default PastEvents;
