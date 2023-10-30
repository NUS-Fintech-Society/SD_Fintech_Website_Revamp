import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';

const Landing = () => {
  return (
    <div className="relative -mb-10 min-h-[400px] w-screen sm:h-[calc(80vh)]">
      <div className="absolute top-[-90px] h-[50%] w-full bg-gradient-to-b from-[#002750B3] via-[#00275059] to-[#00275000]" />
      <div className="absolute top-[-90px] -z-10 h-full w-full overflow-hidden bg-primary">
        <Image
          src="/images/home/home_img.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-br-[calc(5vh)] shadow md:rounded-br-[calc(30vh)] lg:rounded-br-[calc(50vh)]"
        />
      </div>

      <MaxWidth>
        <div className="relative flex flex-col gap-y-3 text-center sm:pt-[max(20px,_5vh)] cursor-default">
          <h1 className="text-2xl font-bold text-white sm:text-6xl">
            NUS Fintech Society
          </h1>
          <div className="-mt-2 text-xs font-medium text-white sm:mt-1 sm:text-2xl xl:text-4xl">
            <AnimatedText type="words" animationType="lights">
              Ideate, Innovate, Inspire
            </AnimatedText>
          </div>
        </div>
      </MaxWidth>
      <div className="absolute bottom-[50px] h-10 w-full bg-primary" />
    </div>
  );
};

export default Landing;
