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
    // <Link href={'/departments/' + path}>
    //   <a className="  group  flex basis-[320px] flex-col rounded-lg bg-[#efefef] shadow-lg hover:text-white">
    <div className="  group  flex basis-[270px] flex-col rounded-lg bg-[#efefef] shadow-xl hover:text-white">
      <div className="flex justify-center py-10">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          height={80}
          width={80}
          layout="intrinsic"
        />
      </div>
      <div className=" grow rounded-b-lg bg-gray-300 px-4 py-6 group-hover:bg-primary">
        <h3 className=" mb-3 text-center text-xl font-semibold">{name}</h3>
        <p className=" text-gray-700 group-hover:text-white">
          {cardDescription}
        </p>
      </div>
    </div>
  );
};

export default DepartmentCard;
