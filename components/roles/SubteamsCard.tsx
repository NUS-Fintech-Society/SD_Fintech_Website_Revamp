import { SubteamsCardProps } from '@interfaces/roles/SubteamsCardProps';
import Image from 'next/image';

const SubteamsCard = ({
  teamName,
  teamDescription,
  teamImage,
}: SubteamsCardProps) => {
  return (
    <div>
      <div className="mx-auto flex h-[300px] w-[260px] flex-col justify-center space-y-5 rounded-[10px] bg-[#EEF6FE] px-10 shadow-[0_2px_10px_3px_rgba(0,0,0,0.06)] md:min-h-[500px] md:min-w-[400px] md:rounded-[20px] lg:min-h-[560px] lg:min-w-[450px]">
        <div className="relative h-[100px] w-[100px] self-center md:mb-2 md:min-h-[256px] md:min-w-[256px]">
          <Image
            src={teamImage.src}
            alt={teamImage.alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="space-y-[17px] text-center text-[#004C98]">
          <h3 className="text-base font-semibold md:text-2xl lg:text-3xl">
            {teamName}
          </h3>
          <h4 className="overflow-hidden text-xs md:text-xl">
            {teamDescription}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SubteamsCard;
