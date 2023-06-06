import { SubteamsCardProps } from '@interfaces/recruitmentSubpage/SubteamsCardProps';
import Image from 'next/image';

const SubteamsCard = ({
    name,
    description,
    image
}: SubteamsCardProps) => {
    return (
        <div className='text-[#004C98] text-center'>
            <div className='bg-[#EEF6FE] w-[570px] h-[660px] rounded-[20px] py-20 px-10 space-y-10'>
                <Image src={image.src} alt={image.alt} width={256} height={256} />
                <h3 className='font-bold sm:text-2xl lg:text-4xl'>{name}</h3>
                <h4 className='sm:text-2xl'>{description}</h4>
            </div>
        </div>
    )
}

export default SubteamsCard
