// import { RecruitmentProps } from '@interfaces/recruitment';
import Landing from '@components/recruitment/Landing';
import WhoShouldJoin from '@components/recruitment/WhoShouldJoin';
import DepartmentRoles from '@components/recruitment/DepartmentRoles';
// import Faq from '@components/recruitment/Faq';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import { DepartmentRoleProps } from '@interfaces/recruitment/departmentRole';
import SignUp from './SignUp';

const DEPARTMENTROLES = [
  {
    department: "Software Development",
    roles: [
      {
        title: "Software Engineer",
        img: "/images/recruitment/Roles Icon/SD - Software Engineer.svg"
      },
      {
        title: "Technical Lead",
        img: "/images/recruitment/Roles Icon/SD - Technical Lead.svg"
      },
      {
        title: "Design Manager",
        img: "/images/recruitment/Roles Icon/SD - Design Manager.svg"
      },
      {
        title: "UI/UX Designer",
        img: "/images/recruitment/Roles Icon/SD - UIUX.svg"
      }
    ]
  },
  {
    department: "Machine Learning",
    roles: [
      {
        title: "Technical Analyst Trainee",
        img: "/images/recruitment/Roles Icon/ML - Technical Analyst Trainee.svg"
      },
      {
        title: "Technical Lead (Project/Quadrant)",
        img: "/images/recruitment/Roles Icon/ML - Technical Lead.svg"
      },
      {
        title: "Technical Analyst (Project/Quadrant)",
        img: "/images/recruitment/Roles Icon/ML - Technical Analyst.svg"
      }
    ]
  },
  {
    department: "Blockchain",
    roles: [
      {
        title: "Blockchain Lead Developer",
        img: "/images/recruitment/Roles Icon/BC - Blockchain Lead Developer.svg"
      },
      {
        title: "Blockchain Developer",
        img: "/images/recruitment/Roles Icon/BC - Blockchain Developer.svg"
      },
      {
        title: "Core Blockchain Developer",
        img: "/images/recruitment/Roles Icon/BC - Core Blockchain Developer.svg"
      },
      {
        title: "Community Manager",
        img: "/images/recruitment/Roles Icon/BC - Community Manager.svg"
      },
      {
        title: "Research Analyst",
        img: "/images/recruitment/Roles Icon/BC - Research Analyst.svg"
      }
    ]
  }
];

// const Recruitment = ({ departmentFaq }: RecruitmentProps) => {

const Recruitment = () => {
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
      
      {DEPARTMENTROLES.map((department: DepartmentRoleProps, index) => (
        <DepartmentRoles
          key={index}
          department={department.department}
          roles={department.roles}
        />))}

      <SignUp />
      {/* <Faq departmentFaq={departmentFaq} /> */}
    </>
  );
};

export default Recruitment;
