interface FAQData{
    departmentsFAQ : departmentFAQ[];
}

interface departmentFAQ{
    departmentName : string;
    questions : Question[];
}

interface Question {
    question : string;
    answer : string;
}

export default interface RecruitmentData {
    departmentCards: DepartmentCard[];
}

interface DepartmentCard{
    coverImage: {
        src: string;
        alt: string;
      };
    name : string;
    description : string;
}