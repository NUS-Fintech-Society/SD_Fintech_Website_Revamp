import Link from "next/link";
import Image from "next/image";

type CardProps = {
  name: string;
  path: string;
  cardDescription: string;
  coverImage: {
    src: string;
    alt: string;
  };
};

const DepartmentCard = (props: CardProps) => {
  return (
    <Link href={"/departments/" + props.path}>
      <div
        className="hover:bg-blue-300 grid grid-cols-1 cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto mb-7 bg-gray-300"
      >
        <div className="relative">
          <Image
            src={props.coverImage.src}
            alt={props.coverImage.alt}
            height={320}
            width={384}
          />
        </div>

        <div className="m-4">
          <h1 className="text-2xl font-semibold mb-5">{props.name}</h1>
          <p className="text-gray-700 text-base">{props.cardDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentCard;
