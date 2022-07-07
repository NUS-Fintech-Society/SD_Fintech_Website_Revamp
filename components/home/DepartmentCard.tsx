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
    <Link href={'/departments/' + path}>
      <a className=" group mb-7 grid max-w-sm overflow-hidden rounded-lg bg-gray-300 shadow-lg hover:bg-primary hover:text-white">
        <div className="relative">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            height={320}
            width={384}
          />
        </div>
        <div className="m-4">
          <h1 className="mb-5 text-2xl font-semibold">{name}</h1>
          <p className="text-base text-gray-700 group-hover:text-white">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
