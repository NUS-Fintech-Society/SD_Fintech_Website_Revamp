import UpcomingEvents from "./UpcomingEvents"
import CalendarComp from './CalendarComp';
import OtherEvents from "./OtherEvents"

import { EventsProps } from '@interfaces/events/Events'

const Events = ({ events }: EventsProps) => {
  return (
    <>
      <CalendarComp events={events}/>
      {/* <UpcomingEvents /> */}
      <OtherEvents events={events}/>
    </>
  );
};

export default Events;
