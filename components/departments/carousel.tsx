// Library
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    linkedin: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const updateIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentIndex(0);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <div className="relative mx-auto mt-10 h-[300px] w-full rounded-xl bg-[#090071] sm:h-[400px] sm:rounded-[20px] lg:w-[400px]">
      <Image
        src="/images/departments/purpose, vision, directors overlay.jpg"
        alt="Insert Photo Here"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <Carousel
        showThumbs={false}
        onChange={updateIndex}
        selectedItem={currentIndex}
      >
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
          <p className="text-left sm:mb-9 sm:mt-10 sm:text-lg">{vision}</p>
        </div>
        <div className="p-8 text-white sm:px-14 sm:py-10">
          <h2 className="flex text-xl font-bold sm:mb-6 sm:text-3xl">
            Co-Directors
          </h2>
          {directors.map((director) => {
            return directors.length === 1 ? (
              // Add more margins if there is only 1 director
              <Fragment key={director.src}>
                <div className="mb-28 mt-3 flex sm:mb-36 sm:mt-5">
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
                  <div className="ml-10 mt-7 sm:mt-10">
                    <a href={director.linkedin} title="Director Linkedin Page">
                      <svg
                        className="h-5 w-5 fill-current text-white sm:h-6 sm:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment key={director.src}>
                <div className="mb-5 mt-6 flex sm:mt-5">
                  <div className="relative mr-6 h-[75px] w-[75px] sm:h-[105px] sm:w-[105px]">
                    <Image
                      src={director.src}
                      alt={director.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>

                  <div className="mt-6 text-left align-bottom font-semibold sm:mt-9 sm:text-2xl">
                    {director.directorName}
                  </div>

                  <div className="ml-auto mr-16 mt-7 sm:ml-auto sm:mr-16 sm:mt-10 md:ml-auto md:mr-36 md:mt-10 lg:ml-auto lg:mr-2 lg:mt-10 xl:ml-auto xl:mr-2 xl:mt-10">
                    <a href={director.linkedin} title="Director Linkedin Page">
                      <svg
                        className="h-5 w-5 fill-current text-white sm:h-6 sm:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
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
                <h3 className="text-md mt-3 ml-5 text-left align-bottom  sm:mt-6 lg:text-2xl">
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
