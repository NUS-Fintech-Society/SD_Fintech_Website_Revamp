// type
import type { NextPage } from 'next';
import { HomeData } from '@data/interface/homeData';

// library
import Head from 'next/head';

// code
import Home from '@components/home';
import { fetchHomeData } from '@data/mockFetch';

const HomePage: NextPage<HomeData> = (props) => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/images/FintechSocietyLogo.png" />
      </Head>
      <Home {...props} />
    </>
  );
};

export async function getStaticProps() {
  const props = await fetchHomeData();
  return {
    props,
  };
}

export default HomePage;
