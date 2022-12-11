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
      <a className="my-10 flex h-[498px] w-[347px] basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)]">
        <div className="relative mb-3 flex h-[205px] w-[350px] justify-center overflow-hidden rounded-t-[20px]">
          <Image src={coverImage.src} alt={coverImage.alt} layout="fill" />
        </div>
        <div className="min-h-[256px] grow rounded-b-lg pl-6">
          <div className="my-2 mr-5 grid min-h-[92px] content-center">
            <h3 className="text-2xl font-bold text-[#004C98]">{name}</h3>
          </div>
          <div className="mr-5 mb-8 max-h-[170px] w-[304px] overflow-hidden text-base font-medium leading-5 text-[#303030]">
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
