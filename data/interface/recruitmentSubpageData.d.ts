interface Role {
    roleName: string;
    aboutUs: string;
    onboarding: string;
    requirements: string;
}

export default interface RecruitmentSubpageData {
    roles: Role[];
}
