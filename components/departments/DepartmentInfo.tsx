// type
import { DepartmentInfoProps } from '@interfaces/departments/DepartmentInfo';

// library
import Image from 'next/image';
import { Fragment } from 'react';
import DeptCarousel from '@components/departments/carousel';

// code
import MaxWidth from '@components/layout/MaxWidth';

const DepartmentInfo = ({
  name,
  logo,
  purpose,
  vision,
  directors,
  roles,
}: DepartmentInfoProps) => {
  return (
    <MaxWidth>
      <div className="mt-3 flex flex-wrap font-bold text-[#002750] text-[24.48px] leading-8 ">
        <div className='relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]'>
          <Image src={logo.src} alt={logo.alt} layout="fill" />
        </div>
        <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:text-[60px] sm:leading-[4.538rem] sm:mt-10 sm:ml-6 sm:border-b-4">{`${(name === 'External') || (name === 'Internal') ? "Operations": name}`}</h1>
      </div>

      <div className='md:flex sm:gap-x-10'>
        <div className='mt-10 h-[287.65px] w-[293.41px] sm:h-[400px] sm:w-[798px] rounded-[12.86px] sm:rounded-[20px] bg-[#090071] bg-opacity-80 text-white'>
        
          <div className="ml-5 py-5 text-[18.35px] leading-[1.388rem] font-bold sm:text-[30px] sm:leading-[2.269rem] sm:mx-12 sm:py-10">Roles</div>
          <ul className="grid sm:grid-cols-2 gap-y-9 sm:gap-y-14  ml-5 text-[12px] leading-[1.044rem] sm:text-[22px] sm:leading-[1.688rem] sm:mx-12 font-normal ">
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
              
            ))}
          </ul>
      
        </div>

        <DeptCarousel
          purpose={purpose}
          vision={vision}
          directors={directors} 
        />
      </div>

      <div className="mt-12 flex flex-wrap lg:mt-24">
        <div className="w-11/12 text-2xl md:w-4/5 md:text-2xl lg:mr-36 lg:w-3/5 lg:text-4xl">
          <div className="mb-10 lg:mb-16">
            <h2 className="mb-3 font-semibold">Purpose</h2>
            <p className="text-xl lg:text-2xl">{purpose}</p>
          </div>

          <div className="mb-10 lg:mb-16">
            <h2 className="mb-3 font-semibold">Vision</h2>
            <p className="text-xl  lg:text-2xl">{vision}</p>
          </div>

          <div className="mb-10 lg:mb-16">
            <h2 className="mb-3 font-semibold">Roles</h2>
            <ul className="ml-5 list-disc text-xl lg:text-2xl">
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className=" pb-3  text-2xl font-semibold lg:text-4xl">
            Co-Directors
          </h2>
          {directors.map((director) => (
            <Fragment key={director.src}>
              <div className="my-7 flex flex-wrap">
                <Image
                  src={director.src}
                  alt={director.alt}
                  width={140}
                  height={140}
                  className="rounded-full"
                />
                <h3 className=" mt-9 ml-5 align-bottom md:text-lg lg:text-xl">
                  {director.directorName}
                </h3>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default DepartmentInfo;
