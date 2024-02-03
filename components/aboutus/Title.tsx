import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title = 'RENAME' }: TitleProps) => {
  return (
    <div className="flex items-center justify-center p-[40.46px] sm:my-8 sm:p-[35px]">
      <h1 className="text-[26.68px] font-bold leading-8 text-black sm:text-[40px] sm:leading-[3rem]">
        {title}
      </h1>
    </div>
  );
};

export default Title;
