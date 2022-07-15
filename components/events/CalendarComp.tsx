import MaxWidth from '@components/layout/MaxWidth';
import { EventsProps } from '@interfaces/events/Events';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const CalendarComp = ({ events }: EventsProps) => {
  const [date, setDate] = useState(new Date());
  const changeDate = (e: Date) => {
    setDate(e);
  }

  return (
    <MaxWidth>
      <div className="pt-[15vh] text-center">
        <div className=" text-3xl  font-bold sm:text-4xl lg:text-5xl">
          Upcoming Events
        </div>
      </div>
      <div className="flex justify-between pt-9" >
        <Calendar className="w-1/2" onChange={changeDate} value={date} />
        <div className="w-1/2">
        {/* {events.map(
          ({ coverImage, cardDescription, name }, index) => (
            <Fragment key={index}>
              <EventCard
                coverImage={coverImage}
                cardDescription={cardDescription}
                name={name}
              />
            </Fragment>
          )
        )} */}
        </div>
      </div>
    </MaxWidth>
  );
}

export default CalendarComp;
