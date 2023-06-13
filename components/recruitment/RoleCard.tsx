import React from 'react';
import Image from 'next/image';

interface RoleCardProps {
  title: string;
  img: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, img }) => {
  return (
    <div className="relative z-[-10] m-16 flex h-2/3 w-2/3 items-center overflow-hidden rounded-lg bg-white p-4 shadow-xl">
      <div>
        <h1 className="mr-4 text-center text-xl font-semibold text-[#004C98]">
          {title}
        </h1>
      </div>
      <div className="absolute top-[-10px] right-[-45px] z-[-5]">
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#EEF6FE]">
          {/* Replace the SVG with your desired icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#004C98"
            className="h-10 w-10"
          >
            {/* Place your SVG icon here */}
          </svg>
        </div>
      </div>
      <div>
        <Image
          src={img}
          alt={title}
          className="h-36 w-36 object-center"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
};

export default RoleCard;
