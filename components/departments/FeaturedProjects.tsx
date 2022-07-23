// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// library
import React, { Fragment, useState } from 'react';
import { Accordion } from '@chakra-ui/react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import ProjectContent from '@components/departments/ProjectContent';
import CustomAccordion from '@components/recruitment/CustomAccordion';

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const [year, setYear] = useState('21/22');
  const projectsByYear = projects.filter((project) => project.year === year);

  // const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setYear(event.target.value);
  // };

  return (
    <MaxWidth>
      <div className="my-10 flex flex-wrap justify-between text-xl md:text-2xl lg:text-3xl">
        <h2 className="mb-3 mr-5 text-2xl font-semibold lg:text-4xl">
          Featured Projects
        </h2>
        {/* <Select
          icon={<TriangleDownIcon />}
          placeholder="Select Year"
          width={{ base: 36, md: 64 }}
          size={{ base: 'md', md: 'lg' }}
          onChange={handleChangeYear}
          borderColor="black"
          defaultValue="21/22"
        >
          <option value="21/22">2021/2022</option>
          <option value="20/21">2020/2021</option>
        </Select> */}
      </div>
      <div className="mb-10">
        <Accordion allowToggle allowMultiple className="mx-auto">
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
                <Fragment key={index}>
                  <CustomAccordion title={projectName}>
                    <ProjectContent
                      htmlContent={htmlContent}
                      projectImage={projectImage}
                      members={members}
                      collaborations={collaborations}
                    />
                  </CustomAccordion>
                </Fragment>
              );
            }
          )}
        </Accordion>
      </div>
    </MaxWidth>
  );
};

export default FeaturedProjects;
