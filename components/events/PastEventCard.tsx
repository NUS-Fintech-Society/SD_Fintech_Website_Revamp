// type
import { EventCardProps } from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';
import Image from 'next/image';

const PastEventCard = () => {
  return (
    <div className="relative m-10 h-[250px] w-[270px] p-8">
      <Image
        src="/images/events/eventsCardBackground.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-2xl shadow-lg"
      />
      <div className='absolute bottom-5'>
        <h3 className="text-xs text-white sm:text-base">
          17 OCT 2020
        </h3>
        <h2 className="text-white sm:text-2xl">Event Name</h2>
      </div>
    </div>
  );
};

export default PastEventCard;
