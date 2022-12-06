// type
import { PartnersProps } from '@interfaces/home/Partners';

// library
import { Fragment } from 'react';
import Image from 'next/image';

const Partners = ({ partnersImages }: PartnersProps) => {
  return (
    <div className="sm:section-my mt-10">
      <div className="flex w-full flex-wrap rounded-[10px] bg-black p-3 sm:rounded-[20px] sm:p-6">
        <h2 className="text-center font-bold text-white sm:text-3xl">
          Our Partners
        </h2>
        <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
          Past and Present
        </h3>
      </div>

      <div className="mx-auto mt-10 flex w-5/6 flex-wrap justify-center gap-10 sm:mt-16">
        {partnersImages.map(({ src, alt, url }, index) => {
          return (
            <Fragment key={index}>
              <div className="relative h-20 w-20 rounded-lg hover:drop-shadow-xl sm:h-[100px] sm:w-[100px]">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-default"
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
