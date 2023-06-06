import { SubteamsCardProps } from "@data/interface/recruitmentSubpageData"
import Image from 'next/image';

const SubteamsCard = ({
    name,
    cardDescription,
    image
}: SubteamsCardProps) => {
    return (
        <div className='text-[#004C98] text-center'>
            <div className='bg-[#EEF6FE] w-[570px] h-[660px] rounded-[20px] py-20 px-10 space-y-10'>
            <Image src="/images/recruitment/design.png" alt="design" width={256} height={256}/>
                <h3 className='font-bold sm:text-2xl lg:text-4xl'>Design</h3>
                <h4 className='sm:text-2xl'>
                In the design team, you are tasked with designing and prototyping applications, 
                and setting the design vision for Fintech Society.
                </h4>
            </div>
        </div>
    )
}

export default SubteamsCard