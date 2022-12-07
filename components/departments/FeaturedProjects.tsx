// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// library
import React, { Fragment, useState } from 'react';
import Image from 'next/image';

// code
import MaxWidth from '@components/layout/MaxWidth';
import ProjectCard from '@components/departments/ProjectCard';
import { arrayBuffer } from 'stream/consumers';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState('21/22');
  const projectsByYear = projects.filter((project) => project.year === year);
  // const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setYear(event.target.value);
  // };

  return (
    <MaxWidth>
      {/* <div className='w-full h-[122px] flex flex-wrap bg-[#004F5080] rounded-[20px]'>
        <img src='/images/home/partnerLogos/bybit.png' className= 'w-full h-full rounded-[20px]' />
      </div> */}
      <div className="flex w-full flex-wrap rounded-[10px] bg-black p-3 sm:rounded-[20px] sm:p-6">
        <h2 className="text-center font-bold text-white sm:text-3xl">
          Featured Projects
        </h2>
        <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
          Key Highlights
        </h3>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-16 xl:mx-20">
        {projectsByYear.map(({ projectName, summary, projectImage }, index) => {
          return (
            <ProjectCard
              key={index}
              coverImage={projectImage[0]}
              cardDescription={summary}
              name={projectName}
            />
          );
        })}
      </div>
    </MaxWidth>
  );
};

export default FeaturedProjects;
