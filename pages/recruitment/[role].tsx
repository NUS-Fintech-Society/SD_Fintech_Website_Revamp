// type
import type { NextPage } from 'next';
import RecruitmentSubpageData from '@data/interface/recruitmentSubpageData';

// library
import Head from 'next/head';
import RecruitmentSubpage from '@components/recruitmentsSubpage';

const RolePage: NextPage<RecruitmentSubpageData> = () => {
  return (
    <>
    <Head>
      <title>NUS Fintech Society</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <RecruitmentSubpage/>
  </>
  )
}

export default RolePage