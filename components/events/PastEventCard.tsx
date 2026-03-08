// library
// import Link from 'next/link';
import EventCardProps, { PastEventCardProps } from '@interfaces/events/EventCard';
import Image from 'next/image';

const PastEventCard = ({
  coverImage,
  coverImageAlt,
  name,
  cardDescription,
  location,
  date,
  type,
  onClick
}: PastEventCardProps) => {
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
  const year = dateObj.getFullYear();

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
    >
    <div className="relative flex h-[225px] w-[250px] flex-col justify-end rounded-xl border-2 p-4 shadow-lg">
      <Image
        src={coverImage}
        alt={coverImageAlt}
        layout="fill"
        objectFit="cover"
        className="-z-10 rounded-xl opacity-70"
      />
      <p className="text-sm text-white">
        {day + ' '}
        {month + ' '}
        {year}
      </p>
      <h3 className="py-1 text-xl text-white">{name}</h3>
    </div>
    </div>
  );
};

export default PastEventCard;
