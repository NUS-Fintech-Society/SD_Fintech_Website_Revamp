export default interface RolesData {
    roles: Role[];
}

interface Role {
    name: string;
    path: string;
    logo: {
        src: string;
        alt: string;
    };
    aboutUs: {
        header: string;
        desc: string;
    };
    onboarding: {
        header: string;
        desc: string;
    };
    requirements: {
        header: string;
        desc: string;
    };
    subteams: SubteamsCard[];
}

interface SubteamsCard {
    teamName: string;
    teamDescription: string;
    teamImage: {
        src: string;
        alt: string;
    };
}