import { Question } from '@data/interface/recruitmentData';
import { QuestionsAndAnswersProps } from '@interfaces/recruitment/QuestionsAndAnswers';

const QuestionsAndAnswers = ({ questions }: QuestionsAndAnswersProps) => {
  return (
    <div className="lg:p-5">
      {questions.map(({ question, answer }: Question, index) => (
        <div key={index} className="my-10">
          <h2 className="mb-4 text-xl font-bold">{question}</h2>
          <p className=" text-lg">{answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;
