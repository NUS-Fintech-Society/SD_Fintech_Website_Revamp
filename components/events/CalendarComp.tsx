import MaxWidth from '@components/layout/MaxWidth';
import { EventsProps } from '@interfaces/events/Events';
import React, { Fragment, useState } from 'react'
import Calendar from 'react-calendar'
import { Carousel } from 'react-responsive-carousel';
import 'react-calendar/dist/Calendar.css';
import EventCard from './EventCard';
import Image from 'next/image';



const CalendarComp = ({ events }: EventsProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const changeDate = (e: Date) => {
    setSelectedDate(e);
  }

  let filter;

  let filteredEvent;

  filter = events.filter((event) => new Date(event.date).getDate() == selectedDate.getDate()).length
  filteredEvent = events.filter((event) => new Date(event.date).getDate() == selectedDate.getDate())


  return (
    <MaxWidth>
      <div className="flex flex-wrap justify-center gap-x-64 pt-[15vh]" >
        <Calendar className="ml-8" onChange={changeDate} value={selectedDate} />
        {filter > 0 ? (
          <>
            {
              filteredEvent.map(
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
              )
            }
          </>
        ) : (
          <div className="max-w-xs overflow-hidden rounded-lg text-center">
            <div className="m-12 text-3xl text-gray-400 sm:text-4xl lg:text-5xl"> No Events held on this Date </div>
          </div>
        )}
      </div>
    </MaxWidth>
  );
}

export default CalendarComp;
