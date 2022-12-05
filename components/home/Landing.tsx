import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';

const Landing = () => {
  return (
    <div className="relative sm:h-[calc(80vh)] min-h-[400px] w-screen -mb-10">
      <div className='absolute w-full h-[50%] bg-gradient-to-b from-[#002750B3] via-[#00275059] to-[#00275000] -top-[90px]' />
      <div className="absolute -z-10 h-full w-full overflow-hidden bg-primary -top-[90px]">
        <Image
          src="/images/home/home_img.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-br-[calc(5vh)] md:rounded-br-[calc(30vh)] lg:rounded-br-[calc(50vh)] shadow"
        />
      </div>
      
      <MaxWidth>
        <div className="relative flex flex-col gap-y-3 sm:pt-[max(20px,_5vh)] text-center">
          <h1 className='text-2xl sm:text-6xl text-white font-bold'>
            NUS Fintech Society
          </h1>
          <div className="text-xs -mt-2 sm:text-2xl sm:mt-1 text-white xl:text-4xl font-medium">
            <AnimatedText type="words" animationType="lights">
              Ideate, Innovate, Inspire
            </AnimatedText>
          </div>
        </div>
      </MaxWidth>
      <div className='absolute bottom-[50px] w-full bg-primary h-10' />
    </div>
  );
};

export default Landing;
