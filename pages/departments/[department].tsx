//type
import type { NextPage } from 'next';
import DepartmentsData from '@data/interface/departmentsData'

//library
import Head from 'next/head';

//code
import Departments from '@components/departments';
import { fetchDepartmentsData } from '@data/mockFetch';

const DepartmentPage: NextPage<DepartmentsData> = (props) => {
  return (
    <>
    <Head>
        <title>NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Departments {...props}/>
    </>
  );
};

export const getStaticPaths = async () => {
    const { departments } = await fetchDepartmentsData();
    const paths = departments.map(department => {
        return {
            params: { department: department.path }
        }
    }) 

    return {
        paths: paths,
        fallback: false
    };
}

export const getStaticProps = async (context: { params: { department: string; }; }) => {
    const department = context.params.department;
    const { departments } = await fetchDepartmentsData();
    const data = departments.find(dpartment => dpartment.path === department);
    return {
        props: data
    };
}

export default DepartmentPage;
