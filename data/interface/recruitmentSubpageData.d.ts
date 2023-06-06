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

