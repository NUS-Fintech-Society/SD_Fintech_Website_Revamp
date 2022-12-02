// type
import { DepartmentCardProps } from '@interfaces/home/DepartmentCard';

// library
import Link from 'next/link';
import Image from 'next/image';
import { WingType } from '@data/homeData';

const DepartmentCard = ({
  coverImage,
  cardDescription,
  name,
  path,
  wingType
}: DepartmentCardProps) => {
  return (
    <Link href={`/departments/${path}`}>
      <a className="flex basis-[75%] sm:basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center border-b-2 border-black">
          <div className='relative h-[130px] w-[130px] sm:h-[200px] sm:w-[200px]'>
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              layout="fill"
            />
          </div>
        </div>
        <div className="grow rounded-b-lg pl-4 sm:pl-6 min-h-[135px] sm:min-h-[256px]">
          <div className='h-[50px] sm:min-h-[92px] flex items-center mt-3 mr-12'>
            <h3 className={`sm:text-2xl font-semibold ${wingType === WingType.Technical ? "text-[#004C98]" : "text-[#009494]"}`}>{name}</h3>
          </div>
          <p className="text-xs sm:text-base text-[#303030] font-medium mr-4 sm:mr-12 mb-8 sm:leading-5">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
