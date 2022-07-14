//type
import { DepartmentInfoProps } from '@interfaces/departments/DepartmentInfo'

//library
import { StarIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Fragment } from 'react';

// code
import MaxWidth from '@components/layout/MaxWidth';

const DepartmentInfo = ({ name, logo, purpose, vision, directors, roles }: DepartmentInfoProps ) => {
    return (
        <MaxWidth>
            <div className="flex flex-wrap text-3xl md:text-4xl lg:text-5xl lg:text-left font-semibold mt-12 lg:mt-24">
                <Image 
                    src={logo.src}
                    alt={logo.alt}
                    height={90}
                    width={90}
                />
                <h1 className="ml-2 mt-6 md:mt-4 md:ml-4">{`${name} Department`}</h1>
            </div>
            <div className="flex flex-wrap mt-12 lg:mt-24">
                <div className="text-xl md:text-2xl lg:text-3xl w-11/12 md:w-4/5 lg:w-3/5 lg:mr-36">
                    <div className="mb-10 lg:mb-16">
                        <h2 className="font-semibold mb-3">Purpose</h2>
                        <p className="text-sm md:text-lg lg:text-xl text-slate-400">
                            {purpose}
                        </p>
                    </div>
                    
                    <div className="mb-10 lg:mb-16">
                        <h2 className="font-semibold mb-3">Vision</h2>
                        <p className="text-sm md:text-lg lg:text-xl text-slate-400">
                            {vision}
                        </p>
                    </div>

                    <div className="mb-10 lg:mb-16">
                        <h2 className="font-semibold mb-3">Roles</h2>
                        <ul className="text-sm md:text-lg lg:text-xl text-slate-400 list-disc ml-5">
                            {roles.map((role, index) => (  
                                <li key={index}>{role}</li>  
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Co-Directors</h2>
                    {
                        directors.map((director , index) => (
                            <Fragment key={index}>
                                <div className="my-7 flex flex-wrap">
                                <Image 
                                    src={director.src}
                                    alt={director.alt}
                                    width={120}
                                    height={120}
                                    className="rounded-full"
                                />
                                <h3 className="mt-9 ml-5 align-bottom text-md md:text-lg lg:text-xl text-slate-400">
                                    {director.directorName}
                                </h3>
                                </div>          
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </MaxWidth> 
    );
}

export default DepartmentInfo;
