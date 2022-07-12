//type
import { ProjectContentProps } from '@interfaces/departments/ProjectContent';

//library
import Image from 'next/image';
import { Fragment } from 'react';

const ProjectContent = ({ projectImage, members, collaborations }: ProjectContentProps) => {
    return (
        <div className="m-5">
            <div className="flex flex-wrap justify-between">
                <div className="xl:w-1/2 xl:mr-36">
                    <p className="text-md md:text-lg lg:text-xl text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="mt-5">
                    <Image 
                        src={projectImage.src}
                        alt={projectImage.alt}
                        height={500}
                        width={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="flex mt-7">
                <div className="border-2 border-blue-300 rounded-lg">
                    <h2 className="my-2 mx-5 text-lg md:text-xl lg:text-2xl font-semibold ">
                        Members
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap border-2 border-blue-300 rounded-lg mt-3">
                {
                    members.map(({src, alt, memberName},  index) => (
                        <Fragment key={index}>
                            <div className="m-5 flex flex-wrap text-slate-400 text-sm md:text-md lg:text-xl">
                                <Image 
                                    src={src}
                                    alt={alt}
                                    height={80}
                                    width={80}
                                    className="rounded-full"
                                />
                                <h3 className="mt-7 ml-3">{memberName}</h3>
                            </div>
                            
                        </Fragment>
                    ))
                }
            </div>

            <div className="flex mt-7">
                <div className="border-2 border-blue-300 rounded-lg">
                    <h2 className="my-2 mx-5 text-lg md:text-xl lg:text-2xl font-semibold ">
                        Collaborations
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap border-2 border-blue-300 rounded-lg mt-3">
                {
                    collaborations.map(({src, alt, companyName},  index) => (
                        <Fragment key={index}>
                            <div className="m-5 flex flex-wrap text-slate-400 text-sm md:text-md lg:text-xl">
                                <Image 
                                    src={src}
                                    alt={alt}
                                    height={80}
                                    width={80}
                                    className="rounded-full"
                                />
                                <h3 className="mt-7 ml-3">{companyName}</h3>
                            </div>    
                        </Fragment>
                    ))
                }
            </div>
        </div>    
    );
}

export default ProjectContent;
