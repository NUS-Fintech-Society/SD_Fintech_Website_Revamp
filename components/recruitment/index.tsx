import { RecruitmentProps } from '@interfaces/recruitment';
import Landing from '@components/recruitment/Landing';
import WhoShouldJoin from '@components/recruitment/WhoShouldJoin';
import Faq from '@components/recruitment/Faq';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import SubteamsCard from './SubteamsCard';

const Recruitment = ({ departmentFaq }: RecruitmentProps) => {
  return (
    <>
      <Landing />
      <MaxWidth>
        <div className="section-my pb-0 ">
          <h2 className=" mb-10 text-center text-h2 font-bold">
            NUS Fintech Society Recruitment for AY 2022/2023
          </h2>
          <p className=" text-center text-xl lg:text-2xl">
            At NUS Fintech Society, we work on industry-grade financial digital
            transformation projects, carry out research projects and educate
            students with Fintech knowledge. From blockchain developer to
            software engineer to project management executive, we have both
            technical and operational roles for all who would like to join us.
          </p>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 ">
              <div className="flex justify-center">
                <Image
                  src="/images/recruitment/graphic1.jpg"
                  alt="graphic 1"
                  height={280}
                  width={280}
                />
              </div>
              <p className="mb-3 text-center text-xl font-bold">Technology</p>
              <p className="mx-auto text-center lg:w-2/3">
                Learn more about machine learning, blockchain or software
                development through being involved in industry-related projects{' '}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center">
                <Image
                  src="/images/recruitment/graphic2.jpg"
                  alt="graphic 1"
                  height={280}
                  width={280}
                />
              </div>
              <p className="mb-3 text-center text-xl font-bold">Operations </p>
              <p className="mx-auto text-center lg:w-2/3">
                Experience planning for large-scale events and build close
                relationships with industry partners
              </p>
            </div>
          </div>
        </div>
      </MaxWidth>
      <WhoShouldJoin />
      <SubteamsCard/>

      <Faq departmentFaq={departmentFaq} />
    </>
  );
};

export default Recruitment;
