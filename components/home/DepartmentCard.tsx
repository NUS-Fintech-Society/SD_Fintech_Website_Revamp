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
      <a className="  group  basis-[320px] rounded-lg bg-[#efefef] shadow-lg hover:text-white ">
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
        <h1 className="h-[162px] rounded-b-lg bg-gray-300 p-10 text-center text-2xl font-semibold group-hover:bg-primary lg:text-3xl">
          {name}
        </h1>
        {/* <p className="text-base text-gray-700 group-hover:text-white">
            {cardDescription}
          </p> */}
      </a>
    </Link>
  );
};

export default DepartmentCard;
