import React from 'react';
import Image from 'next/image';
import LinkedInLogo from './LinkedInLogo';

interface ExcoCardProps {
  data: any;
}

const ExcoCard = ({ data }: ExcoCardProps) => {
  return (
    <div className="flex flex-row justify-center gap-x-5 overflow-x-auto py-4 sm:gap-x-16">
      {data.map((item: any, index: number) => (
        <div
          className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[13.18px] leading-tight shadow-[0_2px_20px_3px_rgba(0,0,0,0.1)] sm:h-[350px] sm:w-[350px] sm:rounded-[20px]"
          key={index}
        >
          <div className="relative mt-3 flex h-[80px] w-[80px] transition-transform duration-1000 ease-in-out hover:scale-110 sm:mt-8 sm:h-[150px] sm:w-[150px]">
            <Image
              src={item.imgSrc}
              alt="Insert Photo Here"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="flex justify-center text-[5px] font-normal text-black sm:mt-6 sm:text-xl">
            {item.role}
          </h3>
          <h3 className="flex items-center justify-center text-[6px] font-bold text-black sm:text-xl">
            {item.name} &nbsp;
            {item.linkedin && <LinkedInLogo link={item.linkedin} />}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ExcoCard;
