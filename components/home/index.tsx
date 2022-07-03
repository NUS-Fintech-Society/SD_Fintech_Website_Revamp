//type
import { HomeProps } from '@interfaces/home';

//code
import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Journey from '@components/home/Journey';

const Home = ({ partnersImages, journey }: HomeProps) => {
  console.log(partnersImages);
  return (
    <>
      <Landing />
      <Milestones />
      <Journey />
    </>
  );
};

export default Home;
