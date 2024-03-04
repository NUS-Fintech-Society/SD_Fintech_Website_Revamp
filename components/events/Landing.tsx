import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative h-[calc(50vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 size-full overflow-hidden">
        <Image
          src="/images/events/eventsHeader.jpg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className=" pt-[15vh] text-center">
          <div className=" hero-xl">Events</div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Landing;
