export default interface DepartmentsData {
    departments: Department[];
}

interface Department {
    name: string; 
    path: string;
    directors: Director[];
    roles: string[];
    projects: Project[];
}

interface Director {
    src:string;
    alt: string;
    directorName: string;
}

interface Project {
    projectName: string;
    year: string;
    projectImage: {
        src: string;
        alt: string;
    }
    members: Member[];
    collaborations: Collaboration[];    
}

interface Member {
    memberName: string; 
    src: string;
    alt: string;
}

interface Collaboration {
    companyName: string;
    src: string;
    alt: string;
}
