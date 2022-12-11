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
  let projectArray = [];
  const chunkSize = 3;
  for (let i = 0; i < projectsByYear.length; i += chunkSize) {
    const chunk = projectsByYear.slice(i, i + chunkSize);
    projectArray[projectArray.length] = chunk;
  }

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
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-30 absolute right-0 bottom-0 left-0 flex justify-center p-0">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          {projectArray[1] ? (
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
          ) : null}
          {projectArray[2] ? (
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
          ) : null}
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div className="mt-4 flex flex-wrap justify-center gap-16 xl:mx-20">
              {projectArray[0]
                ? projectArray[0].map(
                    ({ projectName, summary, projectImage }, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          coverImage={projectImage[0]}
                          cardDescription={summary}
                          name={projectName}
                        />
                      );
                    }
                  )
                : null}
            </div>
          </div>

          {projectArray[1]
            ? projectArray[1].map(
                ({ projectName, summary, projectImage }, index) => {
                  return (
                    <div className="carousel-item relative float-left w-full">
                      <div className="mt-4 flex flex-wrap justify-center gap-16 xl:mx-20">
                        <ProjectCard
                          key={index}
                          coverImage={projectImage[0]}
                          cardDescription={summary}
                          name={projectName}
                        />
                      </div>
                    </div>
                  );
                }
              )
            : null}

          {projectArray[2]
            ? projectArray[2].map(
                ({ projectName, summary, projectImage }, index) => {
                  return (
                    <div className="carousel-item relative float-left w-full">
                      <div className="mt-4 flex flex-wrap justify-center gap-16 xl:mx-20">
                        <ProjectCard
                          key={index}
                          coverImage={projectImage[0]}
                          cardDescription={summary}
                          name={projectName}
                        />
                      </div>
                    </div>
                  );
                }
              )
            : null}
        </div>
        {projectArray[1] ? <div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> : null}
      </div>
    </MaxWidth>
  );
};

export default FeaturedProjects;
