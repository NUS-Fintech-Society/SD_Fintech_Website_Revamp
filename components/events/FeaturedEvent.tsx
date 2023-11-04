import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import Image from 'next/image';

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: number = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutesStr + ' ' + ampm;
  return strTime;
}

const FeaturedEvent = ({ events }: EventsProps) => {
  const upcomingEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() > new Date().getTime()
  );
  const sortedEvents: Event[] = upcomingEvents.sort(
    (a: Event, b: Event) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const featuredEvent: Event = sortedEvents[0];
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateObj = new Date(featuredEvent.date);
  const month = MONTHS[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const time = formatAMPM(dateObj);

  return (
    <>
      <div className="relative mt-10 h-[300px] rounded-xl border-8 text-white sm:h-[400px] sm:rounded-[20px] lg:min-w-[400px]">
        <div className="absolute h-full w-2/3 px-8 sm:px-12">
          <Image
            src={featuredEvent.coverImage.src}
            alt={featuredEvent.coverImage.alt}
            layout="fill"
            objectFit="cover"
            className="-z-10 rounded-l-xl opacity-50 sm:rounded-l-[20px]"
          />
          <div className="py-8 text-xl font-bold leading-[1.388rem] sm:py-10 sm:text-3xl">
            {featuredEvent.name}
          </div>
          <div>{featuredEvent.cardDescription}</div>
        </div>
        <div className="absolute right-0 h-full w-1/3 bg-green-500"></div>
      </div>
    </>
  );
};

export default FeaturedEvent;
