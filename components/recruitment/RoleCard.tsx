import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface RoleCardProps {
  title: string;
  img: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, img }) => {
  const router = useRouter();
  const isTechnical = router.asPath.includes('/technical-wing');
  const textColor = isTechnical ? '#004C98' : '#006C6C';
  const iconColor = isTechnical ? '#EEF6FE' : '#E1F2F3';

  return (
    <div className="relative z-[-10] mx-auto flex h-[160px] w-2/3 min-w-[215px] items-center overflow-hidden rounded-lg bg-white p-4 shadow-xl sm:h-[200px] sm:w-[340px]">
      <div className="max-w-2/3 w-2/3">
        <h1
          className={`text-[${textColor}] mr-5 text-center font-semibold sm:text-xl`}
        >
          {title}
        </h1>
      </div>
      <div className="absolute right-[-45px] top-[-10px] z-[-5]">
        <div className={`bg-[${iconColor}] flex size-48 items-center justify-center rounded-full`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={iconColor}
              className="size-10"
            >
              {/* Place your SVG icon here */}
            </svg>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src={img}
          alt={title}
          className="h-100 w-100"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default RoleCard;
