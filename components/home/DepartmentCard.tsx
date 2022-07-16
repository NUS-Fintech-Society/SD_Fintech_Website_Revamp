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
      <a className="  group  flex basis-[320px] flex-col rounded-lg bg-[#efefef] shadow-lg hover:text-white">
        <div className="flex justify-center py-16">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            height={120}
            width={116}
            layout="intrinsic"
            style={{
              margin: 'auto',
            }}
          />
        </div>
        <div className=" grow rounded-b-lg bg-gray-300 px-4 py-6 group-hover:bg-primary">
          <h1 className=" mb-3 text-center text-2xl font-semibold  lg:text-3xl">
            {name}
          </h1>
          <p className="text-lg text-gray-700 group-hover:text-white">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
