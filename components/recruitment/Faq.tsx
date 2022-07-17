import { Accordion as AccordionWrapper } from '@chakra-ui/react';
import MaxWidth from '@components/layout/MaxWidth';
import CustomAccordion from '@components/recruitment/CustomAccordion';
import QuestionsAndAnswers from '@components/recruitment/QuestionsAndAnswers';
import { FaqProps } from '@interfaces/recruitment/Faq';
import { Fragment } from 'react';

const Faq = ({ departmentFaq }: FaqProps) => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className="mb-20 text-h2 font-bold">Frequently Asked Questions</h2>
        <AccordionWrapper className="mx-auto " allowMultiple>
          <>
            {departmentFaq.map(({ departmentName, questions }) => {
              return (
                <Fragment key={departmentName}>
                  <CustomAccordion title={departmentName}>
                    <QuestionsAndAnswers questions={questions} />
                  </CustomAccordion>
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
