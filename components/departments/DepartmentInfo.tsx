// type
import { DepartmentInfoProps } from '@interfaces/departments/DepartmentInfo';

// library
import Image from 'next/image';
import { Fragment } from 'react';

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
      <div className="mt-12 flex flex-wrap text-3xl font-semibold md:text-4xl lg:mt-24 lg:text-left lg:text-5xl">
        <Image src={logo.src} alt={logo.alt} height={90} width={90} />
        <h1 className="ml-2 mt-6 md:mt-4 md:ml-4">{`${name} Department`}</h1>
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
