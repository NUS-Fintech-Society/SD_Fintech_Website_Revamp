import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const TopBanner = () => {
  return (
    <>
      <div className="relative h-[calc(50vh-64px)] min-h-[400px] w-screen">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/images/exco/exco-banner.jpg"
            alt="Insert Photo Here"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <MaxWidth>
          <div className=" pt-[15vh] text-center">
            <div className=" hero-xl">The EXCO</div>
          </div>
        </MaxWidth>
      </div>
    </>
  );
};

export default TopBanner;
