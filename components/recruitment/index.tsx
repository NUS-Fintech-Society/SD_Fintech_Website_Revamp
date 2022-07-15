import { RecruitmentProps } from '@interfaces/recruitment';
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
