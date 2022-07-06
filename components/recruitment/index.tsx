import { Box } from '@chakra-ui/react';
import { RecruitmentProps } from '@interfaces/recruitment';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Accordion from '@components/recruitment/accordion';

const Recruitment = ({ departments }: RecruitmentProps) => {
  return (
  <div>
    <div className="relative h-[calc(50vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/landing.jpeg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className="flex flex-col items-center pt-[15vh]">
          <div className="text-6xl  xl:text-8xl text-[#FFFF]">Recruitment</div>
          <div className="mt-3 mb-3 text-2xl xl:text-4xl text-[#FFFF]">Keen on joining us? Find out more.</div>
        </div>
      </MaxWidth>
    </div>
    <div className="w-full ml-10">
      <Accordion title="Blockchain">
        <div>
          What skillsets do I need to have to apply to Machine Learning? Can I still apply if I am new 
          to machine learning? 
        </div>
      </Accordion>
    </div>
    
  </div>
)};

export default Recruitment;
