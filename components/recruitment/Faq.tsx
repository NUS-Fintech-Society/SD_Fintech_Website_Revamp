import { Accordion as AccordionWrapper } from '@chakra-ui/react';
import MaxWidth from '@components/layout/MaxWidth';
import Accordion from '@components/recruitment/Accordion';
import QuestionsAndAnswers from '@components/recruitment/QuestionsAndAnswers';
import { FaqProps } from '@interfaces/recruitment/Faq';
import { Fragment } from 'react';

const Faq = ({ departmentFaq }: FaqProps) => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className="mb-20 text-2xl font-bold lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <AccordionWrapper className="mx-auto w-[80%]">
          <>
            {departmentFaq.map(({ departmentName, questions }, index) => {
              return (
                <Fragment key={index}>
                  <Accordion title={departmentName}>
                    <QuestionsAndAnswers questions={questions} />
                  </Accordion>
                </Fragment>
              );
            })}
          </>
        </AccordionWrapper>
      </div>
    </MaxWidth>
  );
};

export default Faq;
