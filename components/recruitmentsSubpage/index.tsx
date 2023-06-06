// type
import { RecruitmentSubpageProps } from '@data/interface/recruitmentSubpageData';

// code
import MaxWidth from '@components/layout/MaxWidth'
import SubpageInfo from './SubpageInfo';

// this is the main recruitment component page where all the subcomponents will be placed together

const RecruitmentSubpage = ({
    name,
    logo,
    path,
    aboutUs,
    onboarding,
    requirements,

}: RecruitmentSubpageProps) => {
    return (
        <MaxWidth>
            <SubpageInfo />
        </MaxWidth>
    );
};

export default RecruitmentSubpage;
