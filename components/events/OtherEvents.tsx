// type
import { EventsProps } from '@interfaces/events/Events';

// library
import { Fragment, useState } from 'react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import EventCard from '@components/events/EventCard';
import Filter from '@components/events/Filter';
import EventCardEdited from '@components/events/EventCardEdited';
import SectionHeader from '@components/layout/SectionHeader';

const OtherEvents = ({ events }: EventsProps) => {
  const [active, setActive] = useState(false);
  const eventArray = [];
  const chunkSize = 6;
  for (let i = 0; i < events.length; i += chunkSize) {
    const chunk = events.slice(i, i + chunkSize);
    eventArray[eventArray.length] = chunk;
  }
  return (
    <MaxWidth>
      <div className="section-my">
        <SectionHeader
          color="green"
          title="Upcoming Events"
          subtitle="What's up next?"
        />
        <div className="desktop-filter-button mt-10 hidden md:block">
          <button type="submit" 
            onClick={() => setActive(!active)} 
            className="inter mt-10 ml-40 rounded bg-[#cde3f9] py-2 px-4 text-base font-semibold text-[#004C98]">
              FILTER
          </button>
        </div>
        <div className="mobile-filter-button block md:hidden">
          <button type="submit" 
            onClick={() => setActive(!active)} 
            className="inter mt-10 ml-2 mb-2 rounded bg-[#cde3f9] py-1 px-2 text-sm font-semibold text-[#004C98]">
              FILTER
          </button>
        </div>
        {active === true && <Filter/>}
        
        {/* Mobile & Tablet */}
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-dark visible relative md:hidden"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            {events.map(({ coverImage, cardDescription, name, location, date }, index) => (
              <div className="carousel-item relative w-full" key={index}>
                <div className="mt-3 flex flex-wrap justify-center gap-10">
                  <EventCard
                    coverImage={coverImage}
                    cardDescription={cardDescription}
                    name={name}
                    location={location}
                    date={date}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Carousel */}
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-dark relative hidden lg:block"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className="mt-3 flex flex-wrap justify-center gap-10">
              {eventArray[0] &&
                eventArray[0].map(
                  (index) => { // Insert Here: { coverImage, cardDescription, name, location, date }
                    return (
                      <Fragment key={index}>
                        <EventCardEdited/>
                    </Fragment>
                    );
                  }
                )}
            </div>
          </div>

          {eventArray[1] &&
            eventArray[1].map(
              ({ coverImage, cardDescription, name, location, date }, index) => {
                return (
                  <div
                    className="carousel-item relative float-left w-full"
                    key={index}
                  >
                    <div className="mt-4 flex flex-wrap justify-center gap-16">
                      <Fragment key={index}>
                          <EventCard
                            coverImage={coverImage}
                            cardDescription={cardDescription}
                            name={name}
                            location={location}
                            date={date}
                          />
                      </Fragment>
                    </div>
                  </div>
                );
              }
            )}

          {eventArray[2] &&
            eventArray[2].map(
              ({ coverImage, cardDescription, name, location, date }, index) => {
                return (
                  <div
                    className="carousel-item relative float-left w-full"
                    key={index}
                  >
                    <div className="mt-4 flex flex-wrap justify-center gap-16">
                      <Fragment key={index}>
                        <EventCard
                          coverImage={coverImage}
                          cardDescription={cardDescription}
                          name={name}
                          location={location}
                          date={date}
                        />
                      </Fragment>
                    </div>
                  </div>
                );
              }
            )}
        </div>

        {eventArray[1] && (
          <div>
            <button
              className="carousel-control-prev absolute inset-y-0 left-[-100px] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next absolute inset-y-0 right-[-100px] flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
    </MaxWidth>
  );
};

export default OtherEvents;
