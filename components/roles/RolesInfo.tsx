// this is the page component where all the styling for the text components will be

// type
import { RolesInfoProps } from '@interfaces/roles/RolesInfo';

// library
import Image from 'next/image';
import RolesText from './RolesText';

// AboutUs, Onboarding and Requirements
const RolesInfo = ({
  name,
  logo,
  aboutUs,
  onboarding,
  requirements,
}: RolesInfoProps) => {
  return (
    <>
      <div className="mt-3 mb-10 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750]">
        <div className="relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]">
          <Image src={logo.src} alt={logo.alt} layout="fill" />
        </div>
        <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:mt-10 sm:ml-6 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">{`${
           name
        }`}</h1>
      </div>
    
      <RolesText header={aboutUs.header} desc={aboutUs.desc}/>
      <RolesText header={onboarding.header} desc={onboarding.desc}/>
      <RolesText header={requirements.header} desc={requirements.desc}/>
  </>
  );
};

export default RolesInfo;
