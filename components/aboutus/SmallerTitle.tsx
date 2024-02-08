import React from 'react';

interface SmallerTitleProps {
  title: string;
}

const SmallerTitle = ({ title }: SmallerTitleProps) => {
  return (
    <div className="flex items-center justify-center py-[40.46px] sm:my-8 sm:p-[35px]">
      <h1 className="text-[20px] font-semibold leading-6 text-black sm:text-[32px] sm:leading-[3rem]">
        {title}
      </h1>
    </div>
  );
};

export default SmallerTitle;
