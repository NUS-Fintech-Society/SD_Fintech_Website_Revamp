export interface ProjectContentProps {
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
}