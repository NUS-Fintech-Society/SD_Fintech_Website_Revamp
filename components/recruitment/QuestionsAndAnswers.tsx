import { Accordion as AccordionWrapper } from '@chakra-ui/react';
import MaxWidth from '@components/layout/MaxWidth';
import Accordion from '@components/recruitment/Accordion';
import { Question } from '@data/interface/recruitmentData';
import { FaqProps } from '@interfaces/recruitment/Faq';
import { QuestionsAndAnswersProps } from '@interfaces/recruitment/QuestionsAndAnswers';
import { Fragment } from 'react';

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
