export interface ProjectContentProps {
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
}
