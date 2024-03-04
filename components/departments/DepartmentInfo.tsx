// type
import { DepartmentInfoProps } from '@interfaces/departments/DepartmentInfo';

// library
import Image from 'next/image';
import DeptCarousel from '@components/departments/carousel';

const DepartmentInfo = ({
  name,
  logo,
  purpose,
  vision,
  directors,
  roles,
}: DepartmentInfoProps) => {
  return (
    <>
      <div className="mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750]">
        <div className="relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]">
          <Image src={logo.src} alt={logo.alt} layout="fill" />
        </div>
        <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:ml-6 sm:mt-10 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">{`${name}`}</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 flex-row gap-4 sm:gap-x-20 md:grid-cols-2">
        <div className="relative flex h-full flex-1 flex-col gap-8 rounded-xl bg-[#090071]/70 p-8 text-white sm:rounded-[20px] sm:p-12">
          <Image
            src="/images/section-header.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="-z-10 rounded-xl opacity-70 sm:rounded-[20px]"
          />
          <div className="text-xl font-bold leading-[1.388rem] sm:text-3xl">
            Roles
          </div>
          <ul className="grid gap-y-6 leading-[1.044rem] sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 sm:text-lg">
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <DeptCarousel purpose={purpose} vision={vision} directors={directors} />
      </div>
    </>
  );
};

export default DepartmentInfo;
