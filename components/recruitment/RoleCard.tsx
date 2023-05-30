import React from 'react';

interface RoleCardProps {
  title: string;
  img: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, img }) => {
  return (
    <div className="relative z-[-10] h-2/3 w-2/3 m-16 flex items-center rounded-lg bg-white p-4 shadow-xl overflow-hidden">
      <div>
        <h1 className="text-xl font-semibold mr-4 text-center text-[#004C98]">{title}</h1>
      </div>
      <div className="absolute z-[-5] top-[-10px] right-[-45px]">
        <div className="bg-[#EEF6FE] rounded-full w-48 h-48 flex justify-center items-center">
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
        <img src={img} alt={title} className="h-36 w-36 object-center" />
      </div>
    </div>
  );
};

export default RoleCard;