type DepartmentFaq = {
  departmentName: string;
  questions: Question[];
}[];

interface Question {
  question: string;
  answer: string;
}

export default interface RecruitmentData {
  departmentFaq: DepartmentFaq;
}

interface DepartmentCard {
  coverImage: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
}
