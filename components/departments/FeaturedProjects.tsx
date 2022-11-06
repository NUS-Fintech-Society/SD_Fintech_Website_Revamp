// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// library
import React, { Fragment, useState } from 'react';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';
import ProjectContent from '@components/departments/ProjectContent';
import CustomAccordion from '@components/recruitment/CustomAccordion';
import ProjectCard from '@components/departments/ProjectCard';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState('21/22');
  const projectsByYear = projects.filter((project) => project.year === year);

  // const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setYear(event.target.value);
  // };

  return (
    
    <MaxWidth>
    <h3 className='absolute m-12 mt-[60px] hidden md:block md:ml-[475px] lg:ml-[710px] xl:ml-[850px]  text-xl text-white max-w-lg '>Our projects focus on solving problems that impact real people for internal use and industry partnerships</h3>
    <div className='w-full flex flex-wrap rounded-[20px] p-8 mb-8 '>
      <div className='w-full h-[122px] flex flex-wrap bg-[#004F5080] rounded-[20px]'>
        <img src='/images/home/partnerLogos/ourpartners.png' className= 'w-full h-full rounded-[20px]' />
      </div>
      <div className='absolute flex m-[70px] mt-[40px] text-4xl text-center sm:text-5xl sm:mt-8 font-bold text-white'>
        Featured Projects
      </div>
    </div>
      <div className="mt-4 xl:mx-20 flex flex-wrap justify-center gap-16">
      {projectsByYear.map(
            (
              {
                projectName,
                htmlContent,
                projectImage,
                members,
                collaborations,
              },
              index
            ) => {
              return (
                <ProjectCard
              key={index}
              coverImage={projectImage[0]}
              cardDescription={htmlContent}
              name={projectName}
            />
              );
            }
          )}
      </div>
    </MaxWidth>
  );
};

export default FeaturedProjects;
