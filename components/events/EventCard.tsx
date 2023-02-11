// type
import { EventCardProps } from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';
import Image from 'next/image';

const EventCard = ({
  coverImage,
  cardDescription,
  name,
  location,
  date,
}: EventCardProps) => {
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
  const dateObj = new Date(date);
  const month = MONTHS[dateObj.getMonth()];
  const day = dateObj.getDate();

  return (
    <div className="relative w-[330px] rounded-lg p-8 shadow-lg">
      <div className="text-h4 text-center font-bold">{name}</div>
      <div className="relative mt-2 flex justify-center">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          height={160}
          width={270}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-left">
        <div className=" ">
          <span className="font-bold text-secondary">
            Location: &nbsp;&nbsp;
          </span>
          {location}
        </div>
        <div className=" ">
          <span className="font-bold text-secondary">Date: &nbsp;&nbsp;</span>
          {month}&nbsp;&nbsp;
          {day}
        </div>
        <p className="mt-2 text-sm">{cardDescription}</p>
      </div>
    </div>
  );
};

export default EventCard;
