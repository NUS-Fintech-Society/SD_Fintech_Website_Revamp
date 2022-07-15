import CardProps from '@interfaces/exco/card';
import Image from 'next/image';

const ExcoCard = ({exco} : CardProps) => {
    return (
        <>
        <div className='w-5/12 border bg-slate-400 p-12'>
            <div className='flex grid-cols-2 flex-row gap-10'>
                <div className='flex w-4/12'>
                    <Image
                    src="/images/contact/com1_bg.png"
                    alt="com 1 background"
                    layout="intrinsic"
                    width={200}
                    height={200}
                    />
                </div>
                <div className='w-fit'>
                    <h4 className="mb-1 bg-slate-400 text-lg lg:text-xl ">{exco.role}</h4>
                    <h4 className="mb-1 bg-slate-400 text-lg lg:text-xl">{exco.designation}</h4>
                    <h4 className="mb-1 bg-slate-400 text-xl lg:text-2xl">{exco.name}</h4>
                </div>
            </div>
            {exco.text ? (<h4 className="mt-12 text-xl lg:text-2xl">{exco.text}</h4>) : (<></>)}
        </div>
        </>
    )
}

export default ExcoCard;
