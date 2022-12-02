// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';


const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="mt-10 sm:section-my">
      <div className='w-full flex flex-wrap bg-black p-3 rounded-[10px] sm:p-6 sm:rounded-[20px]'>
        <h2 className="text-center sm:text-3xl font-bold text-white">Our Partners</h2>
        <h3 className='mt-1 ml-auto text-xs sm:text-lg text-right text-white max-w-lg'>Past and Present</h3>
      </div>
      
      <div className="mt-10 sm:mt-16 mx-auto flex w-5/6 flex-wrap justify-center gap-10">
        {partnersImages.map(({ src, alt, url }, index) => {
          return (
            <Fragment key={index}>
              <div className="relative rounded-lg hover:drop-shadow-xl h-20 w-20 sm:h-[100px] sm:w-[100px]">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-default"
                >
                  <Image src={src} alt={alt} layout='fill' />
                </a>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
