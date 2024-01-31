import React from 'react';
import Image from 'next/image';

interface ExcoCardProps {
  data: any;
}

const ExcoCard = ({ data }: ExcoCardProps) => {
  return (
    <div className="flex flex-row justify-center gap-x-5 sm:gap-x-16">
      {data.map((item: any) => (
        <div className="h-[110.53px] w-[118.92px] rounded-[13.18px] leading-tight shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:h-[300px] sm:w-[300px] sm:rounded-[20px]">
          <div className="flex justify-center">
            <div className="relative mt-3 flex h-[60.94px] w-[60.94px] sm:mt-8 sm:h-[160px] sm:w-[160px]">
              <Image
                src="/images/about/co-president2.jpg"
                alt="Insert Photo Here"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>
          <h3 className="mt-2 flex justify-center text-[5.48px] font-normal text-black sm:mt-6 sm:text-xl">
            {item.role}
          </h3>
          <h3 className="flex justify-center pb-4 text-[6.67px] font-bold text-black sm:text-xl">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ExcoCard;
