//type
import { HomeProps } from '@interfaces/home';

//code

import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Departments from '@components/home/Departments';

const Home = ({ departments }: HomeProps) => {
  return (
    <>
      <Landing />
      <Milestones />
      <Departments departments={departments} />
    </>
  );
};

export default Home;
