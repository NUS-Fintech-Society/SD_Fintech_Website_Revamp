// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// library
import React, { useState } from 'react';
// import { FaAngleDown } from 'react-icons/fa';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

// code
import ProjectCard from '@components/departments/ProjectCard';
import SectionHeader from '@components/layout/SectionHeader';
import ProjectCarousel from '@components/departments/ProjectCarousel';
import { ChevronDownIcon } from '@chakra-ui/icons';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState('21/22');
  const [category, setCategory] = useState('All');
  const projectsByYear = projects.filter((project) => project.year === year);
  const projectArray = [];
  const chunkSize = 3;
  for (let i = 0; i < projectsByYear.length; i += chunkSize) {
    const chunk = projectsByYear.slice(i, i + chunkSize);
    projectArray[projectArray.length] = chunk;
  }

  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="green"
        title="Featured Projects"
        subtitle="Key Highlights"
      />

      {/* Filter Button */}
      {/*
      <div className=" ml-4 mt-12 flex items-center">
        <button
          type="button"
          className="flex items-center rounded-md bg-[#036167] px-4 py-2 text-white"
        >
          <span className="mr-2">{category}</span>
        </button>
      </div>
    */}
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {category}
      </MenuButton>
      <MenuList>
        {category === "All" &&  (
        <>
          <MenuItem onClick={() => setCategory("Ongoing")}>Ongoing</MenuItem>
          <MenuItem onClick={() => setCategory("Past")}>Past</MenuItem>
        </>)}
        {category === "Ongoing" &&  (
        <>
          <MenuItem onClick={() => setCategory("All")}>All</MenuItem>
          <MenuItem onClick={() => setCategory("Past")}>Past</MenuItem>
        </>)}
        {category === "Past" &&  (
        <>
          <MenuItem onClick={() => setCategory("All")}>All</MenuItem>
          <MenuItem onClick={() => setCategory("Ongoing")}>Ongoing</MenuItem>
        </>)}
      </MenuList>
    </Menu>


      {/* Mobile Carousel */}
      <div className="mt-10 flex flex-wrap justify-center gap-10 md:mt-14 md:gap-16 lg:hidden">
        {projectsByYear.map(({ projectName, summary, projectImage }, index) => {
          return (
            <div className="w-full" key={index}>
              <ProjectCard
                coverImage={projectImage[0]}
                cardDescription={summary}
                name={projectName}
                isMobile // Add this prop to indicate mobile mode
              />
            </div>
          );
        })}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden lg:block">
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
};

export default FeaturedProjects;
