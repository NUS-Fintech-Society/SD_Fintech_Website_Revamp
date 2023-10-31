import { FeaturedEventProps } from '@interfaces/events/FeaturedEventProps';

import React, { useState } from 'react';
import Image from 'next/image';

const FeaturedEvent = ({ event }: FeaturedEventProps) => {
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
  const dateObj = new Date(event.date);
  const month = MONTHS[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return (
    <>
      <div className="relative mt-10 h-[300px] flex-1 rounded-xl border-8 text-white sm:h-[400px] sm:rounded-[20px] lg:min-w-[400px]">
        <div className="absolute h-full w-3/4 px-8 sm:px-12">
          <Image
            src={event.coverImage.src}
            alt={event.coverImage.alt}
            layout="fill"
            objectFit="cover"
            className="-z-10 rounded-l-xl opacity-50 sm:rounded-l-[20px]"
          />
          <div className="py-8 text-xl font-bold leading-[1.388rem] sm:py-10 sm:text-3xl">
            {event.name}
          </div>
          <div>{event.cardDescription}</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedEvent;
