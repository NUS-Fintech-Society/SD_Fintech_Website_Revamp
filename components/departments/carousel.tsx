// Type
import { DepartmentInfoProps } from '@interfaces/departments/DepartmentInfo';

// Library
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Fragment } from 'react';


const DeptCarousel = ({
  purpose,
  vision,
  directors,
}: DepartmentInfoProps) => {
  return (
    <div className='relative mt-10 h-[275px] w-[293.41px] rounded-3xl bg-[#090071] sm:h-[400px] sm:w-[408px]'>
      <Image
        src='/images/departments/purpose, vision, directors overlay.jpg'
        alt="Insert Photo Here"
        layout="fill"
        objectFit="cover"
        className='opacity-20'
      />
      <Carousel>
        <div className='px-8 text-white sm:px-14'>
          <h2 className="mt-4 flex pb-3 text-xl font-semibold sm:mt-14 sm:text-3xl">Purpose</h2>
          <p className="text-md text-left sm:mt-3 sm:mb-9 lg:text-2xl">{purpose}</p>
        </div>
        <div className='px-8 text-white sm:px-14'>
            <h2 className="mt-4 flex pb-3 text-xl font-semibold sm:mt-14 sm:text-3xl">Vision</h2>
            <p className="text-md text-left sm:mt-3 sm:mb-9 lg:text-2xl">{vision}</p>
        </div>
        <div className='px-8 text-white sm:px-14'>
          <h2 className="mt-4 flex pb-3 text-xl font-semibold sm:mt-14 sm:text-3xl">
            Co-Directors
          </h2>
          {directors.map((director) => (
            <Fragment key={director.src}>
              <div className="my-5 flex">
                <div className='relative h-[75.6px] w-[75.6px] sm:h-[105px] sm:w-[105px]'>
                  <Image
                    src={director.src}
                    alt={director.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  /> 
                </div>
                <h3 className="text-md mt-3 ml-5 text-left align-bottom sm:mt-6 lg:text-2xl">
                  {director.directorName}
                </h3>
              </div>
            </Fragment>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default DeptCarousel