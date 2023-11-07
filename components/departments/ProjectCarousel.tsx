// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';

// Library
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ProjectCard from '@components/departments/ProjectCard';
import './ProjectCarousel.module.css';

const ProjectCarousel = ({ projects }: FeaturedProjectsProps) => {
  const projectChunks = [];
  const chunkSize = 3;

  for (let i = 0; i < projects.length; i += chunkSize) {
    const chunk = projects.slice(i, i + chunkSize);
    projectChunks.push(chunk);
  }

  // Generates key for the project. This to reset the carousel slider position when the project list is updated.
  // https://github.com/leandrowd/react-responsive-carousel/issues/536
  const projectsKey = JSON.stringify(projects);
  return (
    <div className="carousel-container">
    <Carousel key={projectsKey} showThumbs={false} >
      {projectChunks.map((chunk, index) => (
        <div key={index} className="carousel-item relative float-left w-full">
          <div className="mt-4 flex flex-wrap justify-center gap-24">
            {chunk.map(({ projectName, summary, projectImage }, cardIndex) => (
              <ProjectCard
                key={cardIndex}
                coverImage={projectImage[0]}
                cardDescription={summary}
                name={projectName}
                isMobile={false}
              />
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);
};

export default ProjectCarousel;