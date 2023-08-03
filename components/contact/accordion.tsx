/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';

type Question = {
  question: string;
  answer: string;
};

type AccordionProps = {
  questions: Question[];
};

const Accordion = ({ questions }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border-t-4 border-[#E6F0F0]">
  {questions.map((q, index) => (
    <div key={index} className="border-b-4 border-[#E6F0F0]">
      <div
        className={`cursor-pointer select-none p-4 ${
          expandedIndex === index ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={() => toggleAccordion(index)}
      >
        <div className="flex items-center justify-between">
          <h3 className="w-[720px] text-lg font-semibold text-[#004F4E]">
            {q.question}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3 w-3 transition-transform ${
              expandedIndex === index ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {expandedIndex === index ? (
              <path
                fillRule="evenodd"
                d="M0 10h24v4h-24z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </div>
      </div>
      {expandedIndex === index && (
        <div className="border-t-4 border-[#E6F0F0] bg-white p-4">
          <p className="text-sm text-[#206564]">{q.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

  );
};

export default Accordion;
