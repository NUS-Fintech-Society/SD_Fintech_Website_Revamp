import { RecruitmentProps } from '@interfaces/recruitment';
import Landing from '@components/recruitment/Landing';
import WhoShouldJoin from '@components/recruitment/WhoShouldJoin';
import DepartmentRoles from '@components/recruitment/DepartmentRoles';

import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import { DepartmentRoleProps } from '@interfaces/recruitment/departmentRole';
import SignUp from './SignUp';

import React,{useState} from "react";
import { Tabs, TabList, Tab } from '@chakra-ui/react';



const Recruitment = ({ departmentFaq }: RecruitmentProps) => {

  
const [isInternal, setIsInternal] = useState(true);
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

  return (
    <>
    <MaxWidth>
      <div className='flex'>
        <div className="mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] ">
          <div className="relative w-[47.46px] h-[52px]  sm:w-[91.27px] sm:h-[100px]">
            <Image src='/images/recruitment/Recruitment-logo.jpg' alt='Recruitment Logo' layout="fill" />
          </div>
          <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:mt-10 sm:ml-6 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
            Recruitment
          </h1>
        </div>

{/*
        <div className="hidden xl:block xl:mt-16 xl:ml-auto">
          <div className = "rounded-md w-80 ml-auto mr-10 bg-white border-2 shadow-lg">
            <Tabs color='grey' size='sm' padding='1' onChange={() => setIsInternal(!isInternal)} >
              <TabList>
                <Tab className="flex-1" _selected={{ color: "#090071", bg:"#EDECF6", fontWeight:"bold"}}>Technical Wing</Tab>
                <Tab className="flex-1" _selected={{ color: "#090071",bg:"#EDECF6",  fontWeight:"bold" }}>Operation Wing</Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
*/}
      </div>

        <div className="section-my pb-0">
          <h2 className="font-bold text-center text-2xl text-[#002750] mb-5 sm:text-4xl sm:mb-16">
            NUS Fintech Society Recruitment for AY 2023/2024
          </h2>

          <p className=" text-left text-sm text-[#002750] sm:text-xl">
            At NUS Fintech Society, we work on <strong>industry-grade</strong> financial digital
            transformation projects, carry out research projects and educate
            students with Fintech knowledge. From blockchain developer to
            software engineer to project management executive, we have <strong>both
            technical and operational roles</strong>  for all who would like to join us.
          </p>

          <h2 className="font-bold text-left text-2xl text-[#002750] my-8 sm:text-4xl sm:my-16">
            Who Should Join Us?
          </h2>

          <p className=" text-left text-sm text-[#002750] sm:text-xl">
            The NUS FinTech Society is looking for <strong> passionate and driven people </strong> 
            looking to be at the forefront of cutting edge technology in the
            FinTech space. Learners of <strong>all skill levels are welcome</strong> and interested
            parties can discover more from the <strong>roles listed below.</strong>
          </p>

        </div>
      </MaxWidth>
    </>
  );
};

export default Recruitment;