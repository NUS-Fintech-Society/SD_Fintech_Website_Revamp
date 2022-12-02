// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react'


const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="section-my">
      <div className='w-full h-[122px] flex flex-wrap bg-black rounded-[20px] p-8 mb-8'>
        <h2 className= 'text-4xl text-center sm:text-5xl font bold text-white'> Our Partners </h2>
        <h3 className='hidden lg:block ml-auto text-xl text-right text-white max-w-lg mt-3'> Past and Present </h3>
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
