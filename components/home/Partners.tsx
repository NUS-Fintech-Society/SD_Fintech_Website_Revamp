// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';

const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className="mb-16 text-center text-h2 font-bold">
          Past and Present Partners
        </h2>
        <div className="mx-auto flex w-5/6 flex-wrap justify-center gap-10">
          {partnersImages.map(({ src, alt, url }, index) => {
            return (
              <Fragment key={index}>                
                <div className="rounded-lg hover:drop-shadow-xl">
                  <a href={url} target="_blank" rel="noreferrer" className="cursor-default">
                    <Image src={src} alt={alt} width="100" height="100"/>
                  </a>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Partners;
