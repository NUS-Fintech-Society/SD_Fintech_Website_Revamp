import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import SectionHeader from '@components/layout/SectionHeader';
import PastEventCard from './PastEventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  monitor: {
    breakpoint: { max: 1536, min: 1420 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  superLargeDesktop: {
    breakpoint: { max: 1420, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1124 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  smallDesktop: {
    breakpoint: { max: 1124, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 810 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: { max: 810, min: 750 },
    items: 2,
  },
  mobileLandscape: {
    breakpoint: { max: 750, min: 640 },
    items: 1,
    partialVisibilityGutter: 140,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const PastEvents = ({ events }: EventsProps) => {
  const pastEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() <= new Date().getTime()
  );
  const eventChunks = [];
  const chunkSize = 2;

  for (let i = 0; i < pastEvents.length; i += chunkSize) {
    const chunk = pastEvents.slice(i, i + chunkSize);
    eventChunks.push(chunk);
  }

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
          {pastEvents.map(
            (
              { coverImage, name, cardDescription, location, date, type },
              cardIndex
            ) => (
              <div key={cardIndex} className="my-7 flex justify-center">
                <PastEventCard
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
                  { coverImage, name, cardDescription, location, date, type },
                  cardIndex
                ) => (
                  <div key={cardIndex} className="my-7 flex justify-center">
                    <PastEventCard
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
    </div>
  );
};

export default PastEvents;
