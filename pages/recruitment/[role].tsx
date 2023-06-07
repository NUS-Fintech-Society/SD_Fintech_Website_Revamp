// type
import type { NextPage } from 'next';
import RolesData from '@data/interface/rolesData';

// library
import Head from 'next/head';

// code
import Roles from '@components/roles';
import { fetchRolesData } from '@data/mockFetch';

const RolePage: NextPage<RolesData> = (props: any) => {
  return (
    <>
    <Head>
      <title>NUS Fintech Society</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Roles {...props}/>
  </>
  )
}

export const getStaticPaths = async () => {
  const { roles } = await fetchRolesData();
  const paths = roles.map((role) => {
    return {
      params: { role: role.path },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { role: string };
}) => {
  const { role } = context.params;
  const { roles } = await fetchRolesData();
  const data = roles.find((recruitmentRole) => recruitmentRole.path === role);
  return {
    props: data,
  };
};

export default RolePage