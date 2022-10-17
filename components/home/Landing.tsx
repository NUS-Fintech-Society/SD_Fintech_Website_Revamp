import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';

const Landing = () => {
  return (
    <div className="relative h-[calc(60vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-[90%] w-full overflow-hidden bg-primary">
        <Image
          src="/images/home/home_img.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-br-full shadow"
        />
      </div>
      <MaxWidth>
      <div className="flex flex-col gap-y-3 pt-[max(50px,_10vh)] text-center">
          <h1 className='text-6xl text-white xl:text-7xl'>
            NUS Fintech Society
          </h1>
          <div className="mt-1 mb-3 text-2xl text-white xl:text-4xl">
            <AnimatedText type="words" animationType="lights">
              Ideate. Innovate. Inspire
            </AnimatedText>
          </div>
          {/* <div className=" text-xl xl:text-[26px]">
            <b>Goal Oriented &nbsp;&#8212;&nbsp;</b>
            Leading more than 200 members with a strong grasp of their fields.
          </div> */}
        </div>
      </MaxWidth>
      <div className='absolute bottom-1 w-full  bg-primary xl:bottom-1'>
        <div className="my-3 text-base italic text-white sm:ml-24 xl:text-[20px] ">
          Driving R&D in emerging realms of Blockchain and Machine Learning.
        </div>
      </div>
    </div>
  );
};

export default Landing;
