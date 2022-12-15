// type
import { ProjectCardProps } from '@interfaces/departments/ProjectCard';

// library
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({
  coverImage,
  cardDescription,
  name,
}: ProjectCardProps) => {
  return (
    <div>
      <a className="lg:my-10 flex h-400px md:min-h-[500px] w-[225px] basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] md:w-[347px] mx-auto">
        <div className="relative mb-3 flex min-h-[132px] md:min-h-[205px] justify-center overflow-hidden rounded-t-[20px]">
          <Image src={coverImage.src} alt={coverImage.alt} layout="fill" />
        </div>
        <div className="md:h-[300px] grow rounded-b-lg pl-6">
          <div className="mr-5 grid min-h-[92px] content-center">
            <h3 className="text-lg font-bold text-[#004C98] md:text-2xl">
              {name}
            </h3>
          </div>
          <div className="mr-5 md:mb-8 overflow-hidden text-xs font-medium text-[#303030] md:w-[304px] md:text-base h-[144px] md:h-[300px]">
            {cardDescription}
          </div>
        </div>
        <div className="justify-left flex space-x-2">
          <Link href="#">
            <button
              type="button"
              className="m-5 inline-block w-[131px] rounded-xl bg-[#004080] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Read More
            </button>
          </Link>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
