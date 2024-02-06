// type
import { FeaturedProjectsProps } from '@interfaces/departments/FeaturedProjectsProps';
import ProjectCard from '@components/departments/ProjectCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const responsive = {
  monitor: {
    breakpoint: { max: 4000, min: 1620 },
    items: 3,
    // partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1620, min: 1000 },
    items: 2,
  },
};

const ProjectCarousel = ({ projects }: FeaturedProjectsProps) => {
  return (
    <Carousel
      showDots={true}
      swipeable={true}
      responsive={responsive}
      customLeftArrow={
        <MdOutlineArrowBackIos
          size={50}
          className="absolute left-0 top-1/2 cursor-pointer"
        />
      }
      customRightArrow={
        <MdOutlineArrowForwardIos // Add this line
          size={50}
          className="absolute right-0 top-1/2 cursor-pointer"
        />
      }
      arrows={true}
    >
      {projects.map(({ projectName, summary, projectImage }, cardIndex) => (
        <div key={cardIndex}>
          <ProjectCard
            coverImage={projectImage[0]}
            cardDescription={summary}
            name={projectName}
            isMobile={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
