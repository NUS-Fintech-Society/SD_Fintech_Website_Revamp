interface Role {
    name: string;
    path: string;
    logo: {
        src: string;
        alt: string;
    };
    aboutUs: string;
    onboarding: string;
    requirements: string;
}

export default interface RecruitmentSubpageData {
    roles: Role[];
}

export interface SubteamsCardProps {
    name: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
}