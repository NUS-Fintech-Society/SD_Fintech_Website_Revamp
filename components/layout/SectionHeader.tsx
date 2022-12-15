import React from 'react';
import Image from 'next/image';

const SectionHeader = ({
  color,
  title,
  subtitle,
}: {
  color: 'blue' | 'green';
  title: string;
  subtitle: string;
}) => {
  const hexCode = color === 'blue' ? '#004C98' : '#004F50';

  return (
    <div
      className={`relative flex w-full flex-wrap overflow-hidden rounded-[10px] bg-[${hexCode}]/50 p-3 sm:rounded-[20px] sm:p-6`}
    >
      <Image
        src="/images/section-header.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <h2 className="text-center font-bold text-white sm:text-3xl">{title}</h2>
      <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
