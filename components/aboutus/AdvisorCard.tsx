import React from 'react';
import Image from 'next/image';

interface AdvisorCardProps {
  data: any;
}

const AdvisorCard = ({ data }: AdvisorCardProps) => {
  return (
    <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
      {data.map((item: any, index: number) => (
        <div className="flex flex-col gap-y-3" key={index}>
          <div className="relative h-[119px] w-[119px] sm:h-[228px] sm:w-[228px] md:h-[337px] md:w-[337px]">
            <Image
              src={item.imgSrc}
              alt="Insert Photo Here"
              layout="fill"
              className="rounded-[6.5px] sm:rounded-[21px]"
            />
          </div>
          <div className="flex h-[51.52px] w-[118.92px] flex-col items-center justify-center rounded-[6.5px] bg-[#161B50] sm:h-[100px] sm:w-[228px] sm:rounded-[18px] md:h-[146px] md:w-[337px]">
            <h3 className="flex justify-center text-[6.5px] font-normal leading-[0.5rem] text-white sm:text-sm md:text-lg md:leading-[1.375rem] ">
              {item.role}
            </h3>
            <h3 className="flex justify-center text-[6.5px] font-normal leading-[0.5rem] text-white sm:text-sm md:text-lg md:leading-[1.375rem]">
              {item.title}
            </h3>
            <h3 className="flex justify-center text-[10.83px] font-normal leading-[0.813rem] text-white sm:text-xl md:text-[30px] md:leading-[2.25rem]">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvisorCard;
