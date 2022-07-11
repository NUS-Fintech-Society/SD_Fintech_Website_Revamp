import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const TopBanner = () => {
    return(
    <>
    <div className="relative h-[calc(60vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/images/recruitment/recruitment-bg.png"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className=" pt-[15vh] text-center">
          <div className=" text-6xl  font-semibold text-[#FFFF] sm:text-7xl lg:text-8xl">
            The EXCO
          </div>
        </div>
      </MaxWidth>
    </div>    
    </>
    )
}

export default TopBanner;