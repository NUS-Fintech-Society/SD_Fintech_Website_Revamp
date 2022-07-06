import { Accordion as AccordionWrapper } from '@chakra-ui/react';
import MaxWidth from '@components/layout/MaxWidth';
import Accordion from '@components/recruitment/accordion';

const Faq = () => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className="mb-20 text-2xl font-bold lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <AccordionWrapper className="mx-auto w-[80%]">
          <Accordion title="Machine Learning">hello</Accordion>
          <Accordion title="Blockchain">hello</Accordion>
          <Accordion title="Software Development">hello</Accordion>
          <Accordion title="Operations">hello</Accordion>
        </AccordionWrapper>
      </div>
    </MaxWidth>
  );
};

export default Faq;
