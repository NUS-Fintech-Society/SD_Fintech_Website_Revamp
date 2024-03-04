// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';
import SectionHeader from '@components/layout/SectionHeader';

const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="sm:section-my my-10">
      <SectionHeader
        color="green"
        title="Our Partners"
        subtitle="Past and Present"
      />

      <div className="mx-auto mt-10 flex w-5/6 flex-wrap justify-center gap-10 sm:mt-16">
        {partnersImages.map(({ src, alt, url }, index) => {
          return (
            <Fragment key={index}>
              <div className="relative size-20 rounded-lg hover:drop-shadow-xl sm:size-[100px]">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <Image src={src} alt={alt} layout="fill" />
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
