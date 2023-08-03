// type
import Contact from '@components/contact';
import type { NextPage } from 'next';
import RecruitmentData from '@data/interface/recruitmentData';
import { fetchRecruitmentData } from '@data/mockFetch';

// library
import Head from 'next/head';

const ContactUs: NextPage<RecruitmentData> = (props) => {
  return (
    <>
      <Head>
        <title>Contact Us • NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact {...props} />
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

export default ContactUs;
