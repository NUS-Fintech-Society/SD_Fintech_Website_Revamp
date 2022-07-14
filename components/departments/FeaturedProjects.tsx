//type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

//library
import { Select } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { Fragment, useState, useEffect } from 'react';
import { Accordion as AccordionWrapper } from '@chakra-ui/react';

//code
import MaxWidth from '@components/layout/MaxWidth';
import Accordion from '@components/recruitment/accordion';
import ProjectContent from '@components/departments/ProjectContent';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const [year, setYear] = useState('21/22');
  var projectsByYear = projects.filter((project) => project.year === year);

  const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setYear(value);
  };

  return (
    <MaxWidth>
      <div className="my-10 flex flex-wrap justify-between text-xl md:text-2xl lg:text-3xl">
        <h2 className="mb-3 mr-5 font-semibold">Featured Projects</h2>
        <Select
          icon={<TriangleDownIcon />}
          placeholder="Select Year"
          width={{ base: 36, md: 64 }}
          size={{ base: 'sm', md: 'md' }}
          onChange={handleChangeYear}
          defaultValue="21/22"
        >
          <option value="22/23">2022/2023</option>
          <option value="21/22">2021/2022</option>
          <option value="20/21">2020/2021</option>
        </Select>
      </div>
      <div className="mb-10">
        <AccordionWrapper allowToggle allowMultiple className="mx-auto">
          {projectsByYear.map(
            (
              {
                projectName,
                description,
                projectImage,
                members,
                collaborations,
              },
              index
            ) => {
              return (
                <Fragment key={index}>
                  <Accordion title={projectName}>
                    <ProjectContent
                      description={description}
                      projectImage={projectImage}
                      members={members}
                      collaborations={collaborations}
                    />
                  </Accordion>
                </Fragment>
              );
            }
          )}
        </AccordionWrapper>
      </div>
    </MaxWidth>
  );
};

export default FeaturedProjects;
