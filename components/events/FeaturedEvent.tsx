import EventsProps from '@interfaces/events/Events';
import { Event } from '@data/interface/eventsData';
import Image from 'next/image';
import moment from 'moment';
import CountdownTimer from './CountdownTimer';
import { Button, IconButton } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

const FeaturedEvent = ({ events }: EventsProps) => {
  const upcomingEvents: Event[] = events.filter(
    (a: Event) => new Date(a.date).getTime() > new Date().getTime()
  );
  const sortedEvents: Event[] = upcomingEvents.sort(
    (a: Event, b: Event) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const featuredEvent: Event = sortedEvents[0];

  const dateObj = new Date(featuredEvent.date);
  const dateStr = moment(dateObj).format('D MMMM YYYY');
  const time = moment(dateObj).format('LT');

  return (
    <>
      <div className="relative mt-10 h-[400px] rounded-xl border-8 sm:h-[500px] sm:rounded-[20px] lg:min-w-[400px]">
        <div className="absolute h-full w-3/5 px-8 text-white sm:px-12">
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
        <div className="absolute right-0 flex h-full w-2/5 flex-col justify-between bg-[#EBE5F2] p-5">
          {/* <CountdownTimer targetDate={dateObj} /> */}
          <div className="mx-2 flex justify-between xl:mx-6">
            <div className="flex flex-col">
              <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
                DATE
              </p>
              <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
                {dateStr}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
                TIME
              </p>
              <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
                {time}
              </p>
            </div>
          </div>
          <div className="mx-2 flex flex-col xl:mx-6">
            <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
              LOCATION
            </p>
            {/* for now put placeholder */}
            <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
              {/* {featuredEvent.location} */}
              NUS School of Computing, COM1
            </p>
            <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
              13 Computing Drive
            </p>
            <p className="text-xs font-bold text-[#6f00ff] lg:text-base xl:text-xl">
              Singapore 117417
            </p>
          </div>
          <div className="flex justify-evenly">
            <Button
              variant="solid"
              colorScheme="purple"
              borderRadius={'xl'}
              size="lg"
              _hover={{ bg: '#6f00ff', color: 'white' }}
              className="w-2/3 bg-purple-500 text-xs text-white md:text-base lg:text-xl"
            >
              BOOK NOW
            </Button>
            <IconButton
              colorScheme="white"
              variant={'outline'}
              aria-label="book Calendar"
              size="lg"
              icon={<CalendarIcon />}
              className="bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedEvent;
