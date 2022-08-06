import { FeaturedProjectsProps } from '@interfaces/home/FeaturedProjects';
import Image from 'next/image';

const FeaturedProjects = ({ featuredProjects }: FeaturedProjectsProps) => {
  return (
    <div className="section-my">
      <h2 className="mb-20 text-center text-h2 font-bold">Featured Projects</h2>
      <div className="scrollbar flex  gap-10 overflow-x-auto pb-10 pl-5 ">
        {featuredProjects.map((project) => (
          <div className=" w-80 shrink-0 p-8 shadow-lg" key={project.img.src}>
            <Image
              src={project.img.src}
              alt={project.img.alt}
              width={320}
              height={200}
            />
            <div className="text-center">
              <h3 className="my-2 font-bold">{project.title}</h3>
              <p className="  text-[15px]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
