export default interface DepartmentsData {
  departments: Department[];
}

interface Department {
  name: string;
  path: string;
  logo: {
    src: string;
    alt: string;
  };
  purpose: string;
  vision: string;
  directors: Director[];
  roles: string[];
  projects: Project[];
}

interface Director {
  src: string;
  alt: string;
  directorName: string;
}

interface Project {
  projectName: string;
  year: string;
  summary: string;
  htmlContent: string;
  projectImage: {
    src: string;
    alt: string;
    height: string;
    width: string;
  }[];
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
