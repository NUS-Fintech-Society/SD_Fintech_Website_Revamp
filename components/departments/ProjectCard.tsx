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
      <a className="flex basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] mt-10 mb-10 w-[347px] h-[498px]">
        <div className="relative overflow-hidden w-[350px] h-[205px] rounded-t-[20px] mb-3 flex justify-center">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            layout="fill"
          />
        </div>
        <div className="grow rounded-b-lg pl-6 min-h-[256px]">
          <div className='min-h-[92px] grid content-center my-2 mr-5'>
            <h3 className={`text-[#004C98] text-2xl font-bold`}>{name}</h3>
          </div>
          <div className="max-h-[170px] w-[304px] text-[#303030] text-base font-medium mr-5 mb-8 leading-5 overflow-hidden">{cardDescription}</div>
        </div>
        <div className="flex space-x-2 justify-left">
          <Link href={`/departments/`}>
            <button type="button" className="inline-block w-[131px] m-5 px-6 py-2.5 bg-[#004080] rounded-xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
          </Link>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
