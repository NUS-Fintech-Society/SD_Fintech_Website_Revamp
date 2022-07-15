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
    date
}: EventCardProps) => {
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
    const dateObj = new Date(date);
    const month = (MONTHS[dateObj.getMonth()]);
    const day = dateObj.getDay();

    return (
        // <Link href={'/events/' + path}>
        <a className=" group mb-7 grid max-w-xs overflow-hidden rounded-lg shadow-lg hover:bg-primary hover:text-white">
            <div className="relative">
                <Image
                    src={coverImage.src}
                    alt={coverImage.alt}
                    height={220}
                    width={320}
                    className="rounded-lg"
                />
            </div>
            <div className="m-4">
                <div className="flex justify-between">
                    <p className="mb-5 text-2xl font-semibold">{day} {month}</p>
                    <p className="mb-5 text-xl font-semibold">{location}</p>
                </div>
                <h1 className="mb-5 text-2xl font-semibold">{name}</h1>
                <p className="text-base text-gray-700 group-hover:text-white">
                    {cardDescription}
                </p>
            </div>
        </a>
        // </Link>
    );
};

export default EventCard;
