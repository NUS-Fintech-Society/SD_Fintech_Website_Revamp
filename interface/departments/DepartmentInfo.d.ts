export interface DepartmentInfoProps {
    name: string;
    logo: {
        src: string;
        alt: string;
    }
    purpose: string;
    vision: string;
    directors: {
        src: string;
        alt: string;
        directorName: string;
    }[]
    roles: string[];
}