<<<<<<< HEAD:components/recruitmentsSubpage/SubteamsCard.tsx
import { SubteamsCardProps } from '@interfaces/recruitmentSubpage/SubteamsCardProps';
=======
import { SubteamsCardProps } from "@data/interface/rolesData"
>>>>>>> 23a282b020e8d7a50b3ed798e26319e604da0ae4:components/roles/SubteamsCard.tsx
import Image from 'next/image';

const SubteamsCard = ({
    name,
    description,
    image
}: SubteamsCardProps) => {
    return (
        <div>
            <div className='bg-[#EEF6FE] mx-auto flex flex-col w-[260px] h-[300px] rounded-[10px] md:min-w-[440px] md:min-h-[540px] lg:min-w-[500px] lg:min-h-[600px] md:rounded-[20px] px-10 space-y-5 justify-center'>
                <div className='relative w-[100px] h-[100px] md:min-w-[256px] md:min-h-[256px] self-center md:mb-2'>
                    <Image src={image.src} alt={image.alt} layout='fill' objectFit='contain' />
                </div>
                <div className='text-[#004C98] text-center space-y-[17px]'>
                    <h3 className='text-base font-semibold md:text-2xl lg:text-3xl'>
                        {name}
                    </h3>
                    <h4 className='text-xs md:text-xl overflow-hidden'>
                        {description}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default SubteamsCard;
