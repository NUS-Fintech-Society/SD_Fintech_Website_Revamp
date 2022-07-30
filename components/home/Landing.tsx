import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';

const Landing = () => {
  return (
    <div className="relative h-[calc(60vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/images/home/landing.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className="flex flex-col gap-y-3 pt-[max(100px,_20vh)] text-center">
          <h1 className="text-6xl  font-bold xl:text-7xl">
            NUS Fintech Society
          </h1>
          <div className="mt-1 mb-3 text-2xl font-bold italic text-secondary xl:text-4xl">
            <AnimatedText type="words" animationType="lights">
              Ideate. Innovate. Inspire
            </AnimatedText>
          </div>

          {/* <div className="my-3 text-xl xl:text-[26px]">
            <b>Passionate &nbsp;&#8212;&nbsp;</b>
            Driving R&D in emerging realms of Blockchain and Machine Learning.
          </div>
          <div className=" text-xl xl:text-[26px]">
            <b>Goal Oriented &nbsp;&#8212;&nbsp;</b>
            Leading more than 200 members with a strong grasp of their fields.
          </div> */}
        </div>
      </MaxWidth>
    </div>
  );
};

export default Landing;
