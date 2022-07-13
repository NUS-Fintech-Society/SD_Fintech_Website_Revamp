//type
import Contact from '@components/contact';
import type { NextPage } from 'next';

//library
import Head from 'next/head';

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>NUS Fintech Society: Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
};

export default ContactUs;
