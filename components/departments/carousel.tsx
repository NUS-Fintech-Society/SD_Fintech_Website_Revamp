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
    <div className='relative rounded-3xl bg-[#090071] sm:h-[400px] sm:w-[408px]'>
      <Image
        src='/images/departments/purpose, vision, directors overlay.jpg'
        alt="Insert Photo Here"
        layout="fill"
        objectFit="cover"
        className='opacity-20'
      />
      <Carousel>
        <div className='px-14 text-white'>
          <h2 className="mt-14 flex pb-3 text-3xl font-semibold">Purpose</h2>
          <p className="mt-3 mb-9 text-left text-xl lg:text-2xl">{purpose}</p>
        </div>
        <div className='px-14'>
            <h2 className="mt-14 flex pb-3 text-3xl font-semibold text-white">Vision</h2>
            <p className="mt-3 mb-9 text-left text-xl text-white lg:text-2xl">{vision}</p>
        </div>
        <div className='px-14'>
          <h2 className="mt-14 flex pb-3 text-3xl font-semibold text-white">
            Co-Directors
          </h2>
          {directors.map((director) => (
            <Fragment key={director.src}>
              <div className="my-7 flex">
                <Image
                  src={director.src}
                  alt={director.alt}
                  width={105}
                  height={105}
                  className="rounded-full"
                />
                <h3 className=" mt-9 ml-5 align-bottom text-2xl font-semibold text-white md:text-lg lg:text-xl">
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