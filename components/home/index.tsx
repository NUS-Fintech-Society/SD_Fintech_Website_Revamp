// type
import { HomeProps } from '@interfaces/home';

// code
import Landing from '@components/home/Landing';
import Departments from '@components/home/Departments';
import Partners from '@components/home/Partners';
import MaxWidth from '@components/layout/MaxWidth';

const Home = ({ partnersImages, departments }: HomeProps) => {
  return (
    <>
      <Landing />
      <MaxWidth>
        <Departments departments={departments} />
        <Partners partnersImages={partnersImages} />
      </MaxWidth>
    </>
  );
};

export default Home;
