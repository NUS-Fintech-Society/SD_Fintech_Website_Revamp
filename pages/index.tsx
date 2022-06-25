import Home from "@components/home";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
