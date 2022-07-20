//import { ExcoProps } from '@interfaces/exco';
import TopBanner from '@components/exco/topBanner';
import Hierarchy from '@components/exco/hierarchy';
import ExcoProps from '@interfaces/exco/exco';
import { Fragment } from 'react';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const Exco = ({ categories }: ExcoProps) => {
  return (
    <>
      <TopBanner />
      <MaxWidth>
        <div className='className="mt-20 lg:ml-20'>
          {categories.map((category) => (
            <div key={category.header} className="my-20">
              <h2 className="mb-10 text-h2 font-bold">{category.header}</h2>
              <div className="flex flex-wrap   gap-5">
                {category.people.map((people) => (
                  <div
                    key={people.role + people.title}
                    className="basis-[280px] rounded-lg border border-gray-400  p-2 sm:basis-[400px]"
                  >
                    {/* <div className="h-full w-full bg-blue-300"></div> */}
                    <div className="flex">
                      <div className="relative h-[116px] w-[116px] sm:h-[160px] sm:w-[160px] ">
                        <Image
                          src="/images/exco/julian.jpg"
                          alt="picture"
                          layout="fill"
                          style={{
                            borderRadius: '5px',
                          }}
                        />
                      </div>
                      <div className=" ml-3 mt-5 flex flex-col gap-y-2 text-xs sm:ml-5 sm:text-base">
                        <div className="  text-[#4c4c4c]">{people.role}</div>
                        {people.title && <div>{people.title}</div>}
                        <div className="font-bold">{people.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </>
  );
};

export default Exco;
