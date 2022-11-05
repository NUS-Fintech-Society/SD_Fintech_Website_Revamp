import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';

const Landing = () => {
  return (
    <div className="relative h-[calc(80vh)] min-h-[400px] w-screen -mb-10">
      <div className='absolute w-full h-[50%] bg-gradient-to-b from-[#002750B3] via-[#00275059] to-[#00275000] -top-20' />
      <div className="absolute -z-10 h-full w-full overflow-hidden bg-primary -top-20">
        <Image
          src="/images/home/home_img.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-br-[calc(50vh)] shadow"
        />
      </div>
      <MaxWidth>
        <div className="flex flex-col gap-y-3 pt-[max(50px,10vh)] text-center text-white">
          <div className='text-6xl text-white font-bold'>
            <AnimatedText type="words" animationType="lights">
              NUS Fintech Society
            </AnimatedText>
          </div>
          <div className="mt-1 text-2xl text-white">
            <AnimatedText type="words" animationType="lights">
              Ideate. Innovate. Inspire.
            </AnimatedText>
          </div>
        </div>
      </MaxWidth>
      <div className='absolute bottom-10 w-full bg-primary h-10'>
      </div>
    </div>
  );
};

export default Landing;
