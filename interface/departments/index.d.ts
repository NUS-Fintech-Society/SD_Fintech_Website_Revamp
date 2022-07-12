export interface DepartmentsProps {
    name: string;
    path: string;
    directors: {
        src: string;
        alt: string;
        directorName: string;
    }[]
    roles: string[];
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
