//type
import { HomeProps } from '@interfaces/home';

//code

import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Departments from '@components/home/Departments';
import Partners from '@components/home/Partners';

const Home = ({ partnersImages, departments }: HomeProps) => {
  return (
    <>
      <Landing />
      <Milestones />
      <Departments departments={departments} />
      <Partners {...partnersImages} />
    </>
  );
};

export default Home;
