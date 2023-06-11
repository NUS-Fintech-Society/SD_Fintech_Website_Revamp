// type
import { RoleProps } from '@interfaces/roles';

// code
import MaxWidth from '@components/layout/MaxWidth'
import RolesInfo from './RolesInfo';

// this is the main recruitment component page where all the subcomponents will be placed together

const Roles = ({
    name,
    path,
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
                path={path}
                logo={logo}
                aboutUs={aboutUs}
                onboarding={onboarding}
                roleDescription={roleDescription}
                requirements={requirements}
                subteams={subteams}
                />
                
        </MaxWidth>
    );
};

export default Roles;
