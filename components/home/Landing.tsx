import UsingCssModule from "@components/example/UsingCssModule";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";

const Landing = () => {
  return (
    <MaxWidth>
      <div className='flex container'>
        <div className='flex flex-row'>
          <div className='flex flex-col ml-2'>
            <div className="flex text-6xl mt-32" >NUS Fintech Society</div>
            <div className='text-2xl mt-1 mb-3 text-[#005792D9] italic'>Ideate. Innovate. Inspire</div>
            <div className='flex-row mt-3 text-xl'> <b>Passionate - </b>Driving R&D in emerging realms of Blockchain and Machine Learning.</div>
            <div className='flex-row text-xl'><b>Goal Oriented - </b>Leading more than 100 members with a strong grasp of their fields.</div>
          </div>
          <div className='flex-row'>
            <Image
              src='/placeholder.png'
              alt='Insert Photo Here'
              width={700}
              height={50}
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Landing;
