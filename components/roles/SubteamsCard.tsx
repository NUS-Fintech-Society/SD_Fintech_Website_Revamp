import { SubteamsCardProps } from '@interfaces/roles/SubteamsCardProps';
import Image from 'next/image';

const SubteamsCard = ({
    teamName,
    teamDescription,
    teamImage
}: SubteamsCardProps) => {
    return (
        <div>
            <div className='bg-[#EEF6FE] mx-auto flex flex-col w-[260px] h-[300px] rounded-[10px] md:min-w-[400px] md:min-h-[500px] lg:min-w-[450px] lg:min-h-[560px] md:rounded-[20px] shadow-[0_2px_10px_3px_rgba(0,0,0,0.06)] px-10 space-y-5 justify-center'>
                <div className='relative w-[100px] h-[100px] md:min-w-[256px] md:min-h-[256px] self-center md:mb-2'>
                    <Image src={teamImage.src} alt={teamImage.alt} layout='fill' objectFit='contain' />
                </div>
                <div className='text-[#004C98] text-center space-y-[17px]'>
                    <h3 className='text-base font-semibold md:text-2xl lg:text-3xl'>
                        {teamName}
                    </h3>
                    <h4 className='text-xs md:text-xl overflow-hidden'>
                        {teamDescription}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SubteamsCard;
