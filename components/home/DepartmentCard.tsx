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
      <a className="flex basis-[350px] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)]">
        <div className="flex justify-center border-b-2 border-black">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            height={180}
            width={180}
            layout="intrinsic"
          />
        </div>
        <div className="grow rounded-b-lg pl-6 min-h-[256px]">
          <div className='min-h-[92px] flex items-center my-4 mr-12'>
            <h3 className={`text-3xl font-semibold ${wingType === WingType.Technical ? "text-[#004C98]" : "text-[#009494]"}`}>{name}</h3>
          </div>
          <p className="text-[#303030] font-medium mr-20 mb-8 leading-5">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
