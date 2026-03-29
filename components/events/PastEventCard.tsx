// library
// import Link from 'next/link';
import EventCardProps, {
  PastEventCardProps,
} from '@interfaces/events/EventCard';
import Image from 'next/image';

const PastEventCard = ({
  coverImage,
  coverImageAlt,
  name,
  cardDescription,
  location,
  date,
  type,
  onClick,
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
      <div className="relative flex h-[225px] w-[250px] flex-col justify-end overflow-hidden rounded-xl border-2 shadow-lg">
        <Image
          src={coverImage}
          alt={coverImageAlt}
          layout="fill"
          objectFit="cover"
          className="-z-10 rounded-xl opacity-70"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 p-4">
          <p className="text-sm text-white">
            {day + ' '}
            {month + ' '}
            {year}
          </p>
          <h3 className="line-clamp-3 py-1 text-xl leading-tight text-white">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
