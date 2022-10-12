// type
import { DepartmentCardProps } from '@interfaces/home/DepartmentCard';

// library
import Link from 'next/link';
import Image from 'next/image';

const DepartmentCard = ({
  coverImage,
  cardDescription,
  name,
  path,
}: DepartmentCardProps) => {
  return (
    <Link href={`/departments/${path}`}>
      <a className="flex basis-[320px] flex-col rounded-lg bg-[#efefef] shadow-lg">
        <div className="flex justify-center py-10">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            height={80}
            width={80}
            layout="intrinsic"
          />
        </div>
        <div className="grow rounded-b-lg bg-gray-300 px-4 py-6 group-hover:bg-primary">
          <h3 className="text-3xl">{name}</h3>
          <p className="text-gray-700">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
