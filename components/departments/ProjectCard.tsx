// type
import { ProjectCardProps } from '@interfaces/departments/ProjectCard';

// library
import Link from 'next/link';
import Image from 'next/image';
import { WingType } from '@data/homeData';

const ProjectCard = ({
  coverImage,
  cardDescription,
  name,
}: ProjectCardProps) => {
  return (
    <Link href={`/departments/`}>
      <a className="flex basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] mb-10 w-20">
        <div className="flex justify-center">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            height={180}
            width={180}
            layout="intrinsic"
          />
        </div>
        <div className="grow rounded-b-lg pl-6 min-h-[256px]">
          <div className='min-h-[92px] items-center my-4 mr-5'>
            <h3 className={`text-[#004C98] text-3xl font-semibold`}>{name}</h3>
          </div>
          <div className="text-[#303030] font-medium mr-5 mb-8 leading-5 overflow-hidden" dangerouslySetInnerHTML={{
            __html: cardDescription,
          }}/>
        </div>
        <div className="flex space-x-2 justify-left">
          <div>
            <button type="button" className="inline-block m-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
