// Library
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Fragment } from 'react';

const DeptCarousel = ({
  purpose,
  vision,
  directors,
}: {
  purpose: String;
  vision: String;
  directors: {
    src: string;
    alt: string;
    directorName: string;
  }[];
}) => {
  return (
    <div className="relative mx-auto mt-10 h-[300px] w-full rounded-xl bg-[#090071] sm:h-[400px] sm:rounded-[20px] lg:w-[400px]">
      <Image
        src="/images/departments/purpose, vision, directors overlay.jpg"
        alt="Insert Photo Here"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <Carousel>
        <div className="p-8 text-white sm:px-14 sm:py-10">
          <h2 className="mb-8 flex text-xl font-bold sm:mb-10 sm:text-3xl">
            Purpose
          </h2>
          <p className="text-left sm:mb-9 sm:text-lg">{purpose}</p>
        </div>
        <div className="p-8 text-white sm:px-14 sm:py-10">
          <h2 className="mb-8 flex text-xl font-bold sm:mb-10 sm:text-3xl">
            Vision
          </h2>
          <p className="text-left sm:mt-10 sm:mb-9 sm:text-lg">{vision}</p>
        </div>
        <div className="p-8 text-white sm:px-14 sm:py-10">
          <h2 className="flex text-xl font-bold sm:mb-6 sm:text-3xl">
            Co-Directors
          </h2>
          {directors.map((director) => {
            return directors.length === 1 ? (
              // Add more margins if there is only 1 director
              <Fragment key={director.src}>
                <div className="mt-3 mb-28 flex sm:mt-5 sm:mb-36">
                  <div className="relative mr-6 h-[75px] w-[75px] sm:h-[105px] sm:w-[105px]">
                    <Image
                      src={director.src}
                      alt={director.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="mt-6 text-left align-bottom font-semibold sm:mt-9 sm:text-2xl">
                    {director.directorName}
                  </h3>
                </div>
              </Fragment>
            ) : (
              <Fragment key={director.src}>
                <div className="mt-3 mb-5 flex sm:mt-5">
                  <div className="relative mr-6 h-[75px] w-[75px] sm:h-[105px] sm:w-[105px]">
                    <Image
                      src={director.src}
                      alt={director.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="mt-6 text-left align-bottom font-semibold sm:mt-9 sm:text-2xl">
                    {director.directorName}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {/* {directors.map((director) => (
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
          ))} */}
        </div>
      </Carousel>
    </div>
  );
};

export default DeptCarousel;
