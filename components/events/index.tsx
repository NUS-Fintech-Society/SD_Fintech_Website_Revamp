import UpcomingEvents from './UpcomingEvents';
import CalendarComp from './CalendarComp';
import OtherEvents from './OtherEvents';
import Landing from './Landing';

import { EventsProps } from '@interfaces/events/Events';

const Events = ({ events }: EventsProps) => {
  return (
    <>
      <Landing />
      <CalendarComp events={events} />
      <OtherEvents events={events} />
    </>
  );
};

export default Events;
