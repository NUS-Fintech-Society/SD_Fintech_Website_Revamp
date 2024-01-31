import React from 'react';

const AdvisorCard = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[51.52px] w-[118.92px] items-center justify-center rounded-[6.5px] bg-[#161B50] sm:h-[100px] sm:w-[228px] sm:rounded-[18px] md:h-[146px] md:w-[337px]">
        <h3 className="mt-3 flex justify-center text-[6.5px] font-normal leading-[0.5rem] text-white sm:mt-4 sm:text-sm md:mt-8 md:text-lg md:leading-[1.375rem] ">
          Advisor
        </h3>
        <h3 className="flex justify-center text-[6.5px] font-normal leading-[0.5rem] text-white sm:text-sm md:text-lg md:leading-[1.375rem]">
          Prof
        </h3>
        <h3 className="flex justify-center text-[10.83px] font-normal leading-[0.813rem] text-white sm:text-xl md:text-[30px] md:leading-[2.25rem]">
          Hahn Jungpil
        </h3>
      </div>
    </div>
  );
};

export default AdvisorCard;
