export interface FeaturedProjectsProps {
    projects: {
        projectName: string;
        year: string;
        projectImage: {
            src: string;
            alt: string;
        }
        members: {
            memberName: string;
            src: string;
            alt: string;
        }[]
        collaborations: {
            companyName: string;
            src: string;
            alt: string;
        }[]
    }[]
}