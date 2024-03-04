import TopBanner from '@components/exco/topBanner';
import ExcoProps from '@interfaces/exco/exco';
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
                {category.people.map(({ role, title, name, imgSrc }) => (
                  <div
                    key={role + title}
                    className="basis-[280px] rounded-lg border border-gray-400 p-2 sm:basis-[400px]"
                  >
                    <div className="flex">
                      <div className="relative size-[116px] sm:size-[160px] ">
                        <Image
                          src={imgSrc}
                          alt="picture"
                          layout="fill"
                          style={{
                            borderRadius: '5px',
                          }}
                        />
                      </div>
                      <div className=" ml-3 mt-5 flex flex-col gap-y-2 text-xs sm:ml-5 sm:text-base">
                        <div className="  text-[#4c4c4c]">{role}</div>
                        {title && <div>{title}</div>}
                        <div className="font-bold">{name}</div>
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
