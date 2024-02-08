// library
// import Link from 'next/link';
import EventCardProps from '@interfaces/events/EventCard';
import Image from 'next/image';

const PastEventCard = ({
  coverImage,
  name,
  cardDescription,
  location,
  date,
  type,
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
  const year = dateObj.getFullYear();

  return (
    <div className="relative flex h-[225px] w-[250px] flex-col justify-end rounded-xl border-2 p-4 shadow-lg">
      <Image
        src={coverImage.src}
        alt={coverImage.alt}
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
  );
};

export default PastEventCard;
