//type
import type { NextPage } from 'next';
import { HomeData } from '@data/interface/homeData';

//library
import Head from 'next/head';

//code
import Home from '@components/home';
import { fetchHomeData } from '@data/mockFetch';

const HomePage: NextPage<HomeData> = (props) => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home {...props} />
    </>
  );
};

export async function getStaticProps() {
  const { journey, partnersImages } = await fetchHomeData();

  return {
    props: {
      journey,
      partnersImages,
    },
  };
}

export default HomePage;
