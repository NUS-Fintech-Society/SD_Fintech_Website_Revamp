// type
import { EventCardProps } from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';
import Image from 'next/image';
import { MdLocationPin } from "react-icons/md"
import { Icon } from '@chakra-ui/react'
import { IconContext } from "react-icons";

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
    const day = dateObj.getDate();

    return (
        // <Link href={'/events/' + path}>
        <a className=" group grid max-w-xs overflow-hidden rounded-lg hover:shadow-lg">
            <div className="relative">
                <Image
                    src={coverImage.src}
                    alt={coverImage.alt}
                    height={190}
                    width={305}
                    className="rounded-lg"
                />
            </div>
            <div className="m-4">
                <div className="flex justify-between">
                    <div className="container w-1/4 rounded-lg bg-amber-100">
                        <p className="text-center text-2xl font-semibold text-orange-400">{month}<br />{day}</p>
                    </div>
                    <div className="w-3/4 text-center text-lg font-semibold">
                        <IconContext.Provider value={{ color: "orange" }}>
                            <p className="flex justify-center text-orange-400">
                                <Icon as={MdLocationPin} className="mt-1" />
                                {location}
                            </p>
                        </IconContext.Provider>
                        <h1 className="mb-2 text-2xl font-semibold">
                            {name}
                        </h1>
                    </div>

                </div>

                <p className="text-base text-gray-700">
                    {cardDescription}
                </p>
            </div>
        </a>
        // </Link>
    );
};

export default EventCard;
