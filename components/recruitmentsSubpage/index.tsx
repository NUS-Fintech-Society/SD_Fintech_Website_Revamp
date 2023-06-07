// type
import { SubteamsCardProps } from '@interfaces/recruitmentSubpage';

// code
import MaxWidth from '@components/layout/MaxWidth'
import SubpageInfo from './SubpageInfo';
import SubteamsCard from './SubteamsCard';

// this is the main recruitment component page where all the subcomponents will be placed together


const RecruitmentSubpage = ({
    name,
    logo,
    path,
    aboutUs,
    onboarding,
    requirements,

}: RecruitmentSubpageProps) => {

    const subteamData = {
        name: 'Engineering',
        description: 'In the engineering team, you will gain experience in deploying and managing live projects while contributing in frontend and backend development',
        image: {
            src: '/images/recruitment/engineering.png',
            alt: 'SD logo',
        },
    };

    return (
        <MaxWidth>
            <SubpageInfo />
            <SubteamsCard
                name={subteamData.name}
                description={subteamData.description}
                image={subteamData.image}
            />
        </MaxWidth>
    );
};

export default RecruitmentSubpage;
