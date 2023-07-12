import DepartmentRoles from '@components/recruitment/DepartmentRoles';
import {Tab, Tabs,TabList} from '@chakra-ui/react';

import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DepartmentRoleProps } from '@interfaces/recruitment/departmentRole';


import React from 'react';
import SignUp from './SignUp';

const Recruitment = () => {
  const router = useRouter();
  const isTechnical = router.asPath.includes('/technical-wing');
  const [selectedTab, setSelectedTab] = isTechnical? React.useState(0) : React.useState(1)

  const handleTabChange = () => {
    selectedTab === 1 ? setSelectedTab(0) : setSelectedTab(1)

  };
  

  const TECHNICAL = [
    {
      department: 'Software Development',
      roles: [
        {
          title: 'Software Engineer',
          img: '/images/recruitment/Roles Icon/SD - Software Engineer.svg',
        },
        {
          title: 'Technical Lead',
          img: '/images/recruitment/Roles Icon/SD - Technical Lead.svg',
        },
        {
          title: 'Design Manager',
          img: '/images/recruitment/Roles Icon/SD - Design Manager.svg',
        },
        {
          title: 'UI/UX Designer',
          img: '/images/recruitment/Roles Icon/SD - UIUX.svg',
        },
      ],
    },
    {
      department: 'Machine Learning',
      roles: [
        {
          title: 'Technical Analyst Trainee',
          img: '/images/recruitment/Roles Icon/ML - Technical Analyst Trainee.svg',
        },
        {
          title: 'Technical Lead (Project/Quadrant)',
          img: '/images/recruitment/Roles Icon/ML - Technical Lead.svg',
        },
        {
          title: 'Technical Analyst (Project/Quadrant)',
          img: '/images/recruitment/Roles Icon/ML - Technical Analyst.svg',
        },
      ],
    },
    {
      department: 'Blockchain',
      roles: [
        {
          title: 'Blockchain Lead Developer',
          img: '/images/recruitment/Roles Icon/BC - Blockchain Lead Developer.svg',
        },
        {
          title: 'Blockchain Developer',
          img: '/images/recruitment/Roles Icon/BC - Blockchain Developer.svg',
        },
        {
          title: 'Core Blockchain Developer',
          img: '/images/recruitment/Roles Icon/BC - Core Blockchain Developer.svg',
        },
        {
          title: 'Community Manager',
          img: '/images/recruitment/Roles Icon/BC - Community Manager.svg',
        },
        {
          title: 'Research Analyst',
          img: '/images/recruitment/Roles Icon/BC - Research Analyst.svg',
        },
      ],
    },
  ];

  const OPERATIONS = [
    {
      department: 'External Relations',
      roles: [
        {
          title: 'Partnerships Lead',
          img: '/images/recruitment/Roles Icon/ER - Partnerships Lead.svg',
        },
        {
          title: 'Partnerships Executive',
          img: '/images/recruitment/Roles Icon/ER - Partnerships Executive.svg',
        },
        {
          title: 'Marketing Lead',
          img: '/images/recruitment/Roles Icon/ER - Marketing Lead.svg',
        },
        {
          title: 'Marketing Executive',
          img: '/images/recruitment/Roles Icon/ER - Marketing Executive.svg',
        },
      ],
    },
    {
      department: 'Internal Affairs',
      roles: [
        {
          title: 'Project Management Lead',
          img: '/images/recruitment/Roles Icon/IA - Project Management Lead.svg',
        },
        {
          title: 'Project Management Executive',
          img: '/images/recruitment/Roles Icon/IA - Project Management Executive.svg',
        },
        {
          title: 'Talent Management Lead',
          img: '/images/recruitment/Roles Icon/IA - Talent Management Lead.svg',
        },
        {
          title: 'Talent Management Executive',
          img: '/images/recruitment/Roles Icon/IA - Talent Management Executive.svg',
        },
        {
          title: 'Finance Lead',
          img: '/images/recruitment/Roles Icon/IA - Finance Lead.svg',
        },
        {
          title: 'Finance Executive',
          img: '/images/recruitment/Roles Icon/IA - Finance Executive.svg',
        },
        {
          title: 'Community Development Lead',
          img: '/images/recruitment/Roles Icon/IA - Community Development Lead.svg',
        },
        {
          title: 'Community Development Executive',
          img: '/images/recruitment/Roles Icon/IA - Community Development Executive.svg',
        },
        {
          title: 'Product Manager',
          img: '/images/recruitment/Roles Icon/IA - Product Manager.svg',
        },
      ],
    },
  ];

  return (
    <>
      <MaxWidth>
        <div className="flex">
          <div className="mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] ">
            <div className="relative h-[52px] w-[47.46px]  sm:h-[100px] sm:w-[91.27px]">
              <Image
                src="/images/recruitment/Recruitment-logo.jpg"
                alt="Recruitment Logo"
                layout="fill"
              />
            </div>
            <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:ml-6 sm:mt-10 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
              Recruitment
            </h1>
          </div>

          
          <div className=" hidden xl:block xl:block xl:mt-16 xl:ml-auto">
            <div className="bg-white border-2 shadow-lg rounded-md xl:w-80 xl:ml-auto xl:mr-10 ">
              <Tabs color='grey' size='sm' padding='1' onChange={handleTabChange} index={selectedTab}> 
                <TabList>
                  <Link href="/recruitment/technical-wing">
                    <Tab className="flex-1" _selected={{ color: "#090071", bg: "#EDECF6", fontWeight: "bold" }}>
                      Technical Wing
                    </Tab>
                  </Link>
                  <Link href="/recruitment/operations-wing">
                    <Tab className="flex-1" _selected={{ color: "#090071", bg: "#EDECF6", fontWeight: "bold" }}>
                      Operations Wing
                    </Tab>  
                  </Link>
                </TabList>
              </Tabs>
            </div>
          </div>
          </div>


        <div className="section-my">
          <h2 className="mb-5 text-center text-2xl font-bold text-[#002750] sm:mb-16 sm:text-4xl">
            NUS Fintech Society Recruitment for AY 2023/2024 
          </h2>
          <h2 className="xl:hidden mb-5 text-center text-2xl font-bold text-[#002750] sm:mb-16 sm:text-4xl">
            <span className='border-b-2 border-[#002750]'>
              {isTechnical ? 'Technical Wing' : 'Operations Wing'}
            </span>
          </h2>

          <p className=" text-left text-sm text-[#002750] sm:text-xl">
            At NUS Fintech Society, we work on <strong>industry-grade</strong>{' '}
            financial digital transformation projects, carry out research
            projects and educate students with Fintech knowledge. From
            blockchain developer to software engineer to project management
            executive, we have{' '}
            <strong>both technical and operational roles</strong> for all who
            would like to join us.
          </p>

          <h2 className="my-8 text-left text-2xl font-bold text-[#002750] sm:my-16 sm:text-4xl">
            Who Should Join Us?
          </h2>

          <p className=" text-left text-sm text-[#002750] sm:text-xl">
            The NUS FinTech Society is looking for{' '}
            <strong> passionate and driven people </strong>
            looking to be at the forefront of cutting edge technology in the
            FinTech space. Learners of{' '}
            <strong>all skill levels are welcome</strong> and interested parties
            can discover more from the <strong>roles listed below.</strong>
          </p>
        </div>
      </MaxWidth>
      <div className="px-6 md:px-14">
        {isTechnical
        ? TECHNICAL.map((department: DepartmentRoleProps, index) => (
            <DepartmentRoles
              key={index}
              department={department.department}
              roles={department.roles}
            />
          ))
        : OPERATIONS.map((department: DepartmentRoleProps, index) => (
            <DepartmentRoles
              key={index}
              department={department.department}
              roles={department.roles}
            />
          ))}
      </div>      
      <SignUp />
    </>
  );
};

export default Recruitment;
