// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react'


const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="section-my">
      <div className='pb-12'>
        <div className='h-28 rounded-3xl overflow-hidden bg-[#004F5080] ' >
          
          <p className='absolute text-5xl text-white font-medium my-8 ml-12 z-10'> 
            Our Partners
          </p>
          <p className='absolute right-48 text-xl text-white font-normal my-8 z-10 w-4/12'> 
            Our projects focus on solving problems that impact real people for internal use and industry partnerships
          </p>
          <Image src='/images/home/partnerLogos/ourpartners.png' alt='ourpartnersimage' width='1388px' height='130px' objectFit="cover" /> 
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
