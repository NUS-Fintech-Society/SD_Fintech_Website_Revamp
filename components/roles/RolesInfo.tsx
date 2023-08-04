// this is the page component where all the styling for the text components will be

// type
import { RolesInfoProps } from '@interfaces/roles/RolesInfo';

// library
import Image from 'next/image';
import RolesText from './RolesText';
import SubteamsCard from './SubteamsCard';

// AboutUs, Onboarding and Requirements
const RolesInfo = ({
  name,
  logo,
  aboutUs,
  onboarding,
  roleDescription,
  requirements,
  subteams,
}: RolesInfoProps) => {
  const renderSubteamsCard = subteams.map((data, index) => (
    <SubteamsCard
      key={index}
      teamName={data.teamName}
      teamDescription={data.teamDescription}
      teamImage={data.teamImage}
    />
  ));

  return (
    <>
      <div className="mt-3 mb-10 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750]">
        <div className="relative h-[52px] w-[68.88px] sm:h-[139px] sm:w-[184px]">
          <Image src={logo.src} alt={logo.alt} layout="fill" />
        </div>
        <h1 className="ml-4 mt-3 underline underline-offset-[6px] sm:mt-10 sm:ml-6 sm:text-6xl sm:leading-[4.538rem] sm:underline-offset-[14px]">{`${name}`}</h1>
      </div>

      <RolesText header={aboutUs.header} desc={aboutUs.desc} />

      {subteams.length !== 0 && (
        <div className="mb-10 flex flex-col justify-center space-y-[30px] lg:flex-row lg:space-y-0 lg:space-x-[70px]">
          {renderSubteamsCard}
        </div>
      )}

      <RolesText header={onboarding.header} desc={onboarding.desc} />
      <RolesText header={roleDescription.header} desc={roleDescription.desc} />
      <RolesText header={requirements.header} desc={requirements.desc} />
    </>
  );
};

export default RolesInfo;
