// type
import { PartnersProps } from '@interfaces/home/partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';

const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <MaxWidth>
      <div className=" section-my ">
        <div className="section-title ">Our Partners</div>
        <div className="flex flex-wrap justify-center gap-16">
          {partnersImages.map(({ src, alt }, index) => {
            return (
              <Fragment key={index}>
                <Image src={src} alt={alt} width="150" height="150" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Partners;
