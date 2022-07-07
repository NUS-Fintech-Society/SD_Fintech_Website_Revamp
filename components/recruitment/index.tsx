import {
  AccordionItem,
  Box,
  Accordion as AccordionWrapper,
} from '@chakra-ui/react';
import { RecruitmentProps } from '@interfaces/recruitment';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Accordion from '@components/recruitment/Accordion';
import Landing from '@components/recruitment/Landing';
import WhoShouldJoin from '@components/recruitment/WhoShouldJoin';
import Faq from '@components/recruitment/Faq';

const Recruitment = ({ departmentFaq }: RecruitmentProps) => {
  return (
    <>
      <Landing />
      <WhoShouldJoin />
      <Faq departmentFaq={departmentFaq} />
    </>
  );
};

export default Recruitment;
