// type
import { Button } from '@chakra-ui/react';
import EventCardProps from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';
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

const UpcomingEventCard = ({
  coverImage,
  name,
  cardDescription,
  location,
  date,
  type,
}: EventCardProps) => {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateObj = new Date(date);
  const month = MONTHS[dateObj.getMonth()];
  const day = dateObj.getDate();
  const dayStr = day < 10 ? '0' + day : day;
  const year = dateObj.getFullYear();
  const time = formatAMPM(dateObj);

  return (
    <div className="flex h-[275px] w-[250px] flex-col rounded-xl border-2 p-4 shadow-lg">
      <div className="flex">
        <p className="text-6xl text-[#004C98]">{dayStr}</p>
        <div className="flex flex-col justify-center pl-2">
          <p className="text-sm text-[#004C98]">{month}</p>
          <p className="text-sm text-[#004C98]">{time}</p>
        </div>
      </div>
      <h3 className="py-1 text-xl font-bold text-[#004C98]">{name}</h3>
      <div className="overflow-hiddentext-left text-sm font-thin text-[#004C98]">
        {cardDescription}
      </div>
      <Button
        variant="outline"
        colorScheme="blue"
        borderRadius="full"
        size={'sm'}
        borderColor="#004C98"
        color="#004C98"
        borderWidth="1px"
        _hover={{ bg: '#004C98', color: 'white' }}
        marginTop={'auto'}
      >
        More Details
      </Button>
    </div>
  );
};

export default UpcomingEventCard;
