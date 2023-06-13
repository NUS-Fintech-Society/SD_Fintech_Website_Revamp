export interface Question {
  question: string;
  answer: string;
}
type DepartmentFaq = {
  departmentName: string;
  questions: Question[];
}[];

export default interface RecruitmentData {
  departmentFaq: DepartmentFaq;
}