// type
import { HomeProps } from '@interfaces/home';

// code
import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Departments from '@components/home/Departments';
import Partners from '@components/home/Partners';
import MaxWidth from '@components/layout/MaxWidth';
import FeaturedProjects from '@components/home/FeaturedProjects';

const Home = ({ partnersImages, departments, featuredProjects }: HomeProps) => {
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
