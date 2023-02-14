// type
import { EventCardProps } from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';
import Image from 'next/image';

const PastEventCard = () => {
  return (
    <div className="relative h-[124px] w-[140px] rounded-2xl bg-[#004F50]/50 p-8 hover:-translate-y-0 sm:h-[310.93px] sm:w-[350px]">
      <Image
        src="/images/events/eventsCardBackground.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-2xl shadow-lg"
      />
      <div className='absolute bottom-5'>
        <h3 className="text-xs text-white sm:text-lg">
          17 OCT 2020
        </h3>
        <h2 className="text-white sm:text-3xl">Event Name</h2>
      </div>
    </div>
  );
};

export default PastEventCard;
