import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative h-[calc(50vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/images/soc-bg.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className=" pt-[15vh] text-center">
          <div className="hero-xl">Recruitment</div>
          <div className="hero-lg mt-9">Keen on joining us? Find out more.</div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Landing;
