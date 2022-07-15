export interface DepartmentsProps {
  name: string;
  path: string;
  logo: {
    src: string;
    alt: string;
  };
  purpose: string;
  vision: string;
  directors: {
    src: string;
    alt: string;
    directorName: string;
  }[];
  roles: string[];
  projects: {
    projectName: string;
    year: string;
    description: string;
    projectImage: {
      src: string;
      alt: string;
      height: string;
      width: string;
    }[];
    members: {
      memberName: string;
      src: string;
      alt: string;
    }[];
    collaborations: {
      companyName: string;
      src: string;
      alt: string;
    }[];
  }[];
}
