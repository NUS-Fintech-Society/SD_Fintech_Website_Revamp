import Recruitment from "@components/recruitment/Recruitment";
import type { NextPage } from "next";
import Head from "next/head";

const RecruitmentPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recruitment />
    </>
  );
};

export default RecruitmentPage;
