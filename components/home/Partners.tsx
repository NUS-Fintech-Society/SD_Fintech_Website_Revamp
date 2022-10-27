// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react'


const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="section-my">
      <h3 className='absolute m-12 mt-[80px] hidden md:block md:ml-[475px] lg:ml-[710px] xl:ml-[950px]  text-xl text-white max-w-lg '>Past and Present</h3>
      <div className='w-full flex flex-wrap rounded-[20px] p-8 mb-8 '>
        <div className='w-full h-[122px] flex flex-wrap bg-[#004F5080] rounded-[20px]'>
          <img src='/images/home/ourpartners.png' className= 'w-full h-full rounded-[20px]' />
        </div>
        <div className='absolute flex m-[70px] mt-[40px] text-4xl text-center sm:text-5xl sm:mt-8 font-bold text-white'>
          Our Partners
        </div>
      </div>
      
      <div className="mx-auto flex w-5/6 flex-wrap justify-center gap-10">
        {partnersImages.map(({ src, alt, url }, index) => {
          return (
            <Fragment key={index}>
              <div className="rounded-lg hover:drop-shadow-xl">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-default"
                >
                  <Image src={src} alt={alt} width="100" height="100" />
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
