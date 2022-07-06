import Recruitment from '@components/recruitment';
import Accordion from '@components/recruitment/accordion';
import RecruitmentData from '@data/interface/recruitmentData';
import { fetchRecruitmentData } from '@data/mockFetch';
import type { NextPage } from 'next';
import Head from 'next/head';
import MaxWidth from '@components/layout/MaxWidth';
import {Box, Text } from '@chakra-ui/react'


const RecruitmentPage: NextPage<RecruitmentData> = (props) => {
  return (
    <>
      <Box width="100%" height="20vh" display="flex" align-items="center" justify-content="center">
        <Text text-align="center">Recruitment</Text>
        <Text>Keen on joining us? Find out more.</Text>
      </Box>
      <Recruitment {...props} />
      <Accordion title="Blockchain">
        <Text>
          What skillsets do I need to have to apply to Machine Learning? Can I still apply if I am new 
          to machine learning? 
        </Text>
      </Accordion>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export async function getStaticProps() {
  const { departments } = await fetchRecruitmentData();

  return {
    props: {
      departments,
    },
  };
}

export default RecruitmentPage;
