import { EventsProps } from '@interfaces/events/Events';
import dynamic from 'next/dynamic';
import MaxWidth from '@components/layout/MaxWidth';
import OtherEvents from './OtherEvents';
import Landing from './Landing';
import Image from 'next/image';


// need to disable SSR for this component cos we are using date object generated at client side
const CalendarComp = dynamic(() => import('@components/events/CalendarComp'), {
  ssr: false,
});

const Events = ({ events }: EventsProps) => {
  return (
    <>

      {/*   
      <Landing />
      <CalendarComp events={events} />
      */}
      <div className="ml-8 mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] md:ml-24 ">
        <div className="relative h-[52px] w-[58px]  sm:h-[100px] sm:w-[112px] sm:mt-6">
          <Image
            src="/images/events/Events-logo.jpg"
            alt="Recruitment Logo"
            layout="fill"
          />
        </div>
        <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:ml-6 sm:mt-10 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
          Events
        </h1>
      </div>

      <br/><br/><br/>
    


      
      <OtherEvents events={events} />
    
    </>
  );
};

export default Events;
