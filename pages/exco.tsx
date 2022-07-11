import type { NextPage } from 'next';
import ExcoData from '@data/interface/excoData';
import { fetchExcoData } from '@data/mockFetch';
import Head from 'next/head';
import Exco from '@components/exco';

const ExcoPage : NextPage<ExcoData> = (props) => {
    return(
    <>
        <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Exco {...props} />
    </>
    );
}

export async function getStaticProps(){
    const {departmentExcos} = await fetchExcoData();
    
    return {
        props: {
            departmentExcos,
        }
    }
}

export default ExcoPage;