export interface DepartmentInfoProps {
    name: string;
    directors: {
        src: string;
        alt: string;
        directorName: string;
    }[]
    roles: string[];
}