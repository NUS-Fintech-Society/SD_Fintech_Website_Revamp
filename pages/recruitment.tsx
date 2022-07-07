import Recruitment from '@components/recruitment';
import RecruitmentData from '@data/interface/recruitmentData';
import { fetchRecruitmentData } from '@data/mockFetch';
import type { NextPage } from 'next';
import Head from 'next/head';

const RecruitmentPage: NextPage<RecruitmentData> = (props) => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recruitment {...props} />
    </>
  );
};

export async function getStaticProps() {
  const { departmentFaq } = await fetchRecruitmentData();

  return {
    props: {
      departmentFaq,
    },
  };
}

export default RecruitmentPage;
