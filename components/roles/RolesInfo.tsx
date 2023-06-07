// this is the page component where all the styling for the text components will be

// type
import { RolesInfoProps } from "@interfaces/roles/RolesInfo";

// library
import Image from 'next/image';

// AboutUs, Onboarding and Requirements
const RolesInfo = ({
    name,
    path,
    logo,
    aboutUs,
    onboarding,
    requirements,
}: RolesInfoProps) => {
    return (
        <div className="section-my pb-0 ">
            <h2 className="mb-10 text-h2 font-bold">
                {/* Page in Progress */}
                {name}
            </h2>
            <h3 className="mb-10 text-h3 font-bold">
                {aboutUs.header} 
            </h3>
            <p className="text-l mb-10 lg:text-xl text-justify"> 
                {aboutUs.desc}
            </p>
            <h3 className="mb-10 text-h3 font-bold">
                {onboarding.header} 
            </h3>
            <p className="text-l mb-10 lg:text-xl text-justify"> 
                {onboarding.desc}
            </p>
            <h3 className="mb-10 text-h3 font-bold">
                {requirements.header} 
            </h3>
            <p className="text-l list-disc mb-10 lg:text-xl text-justify"> 
                {requirements.desc}
            </p>
        </div>
    )
}

export default RolesInfo;
