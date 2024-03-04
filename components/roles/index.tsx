// type
import { RoleProps } from '@interfaces/roles';

// code
import MaxWidth from '@components/layout/MaxWidth'
import SignUp from '@components/recruitment/SignUp';
import RolesInfo from './RolesInfo';

// this is the main recruitment component page where all the subcomponents will be placed together

const Roles = ({
    name,
    logo,
    aboutUs,
    onboarding,
    roleDescription,
    requirements,
    subteams,
}: RoleProps) => {
    return (
        <MaxWidth>
            <RolesInfo
                name={name}
                logo={logo}
                aboutUs={aboutUs}
                onboarding={onboarding}
                roleDescription={roleDescription}
                requirements={requirements}
                subteams={subteams}
                />
            <SignUp /> 
        </MaxWidth>
    );
};

export default Roles;
