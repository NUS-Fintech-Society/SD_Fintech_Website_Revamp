//type
import { HomeProps } from '@interfaces/home';

//code
<<<<<<< Updated upstream
import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Journey from '@components/home/Journey';
=======
import Milestones from "@components/home/Milestones";
import Landing from "@components/home/Landing";
import Journey from "@components/home/Journey";
import { Divider } from "@chakra-ui/react";
>>>>>>> Stashed changes

const Home = ({ partnersImages, journey }: HomeProps) => {
  console.log(partnersImages);
  return (
    <>
      <Landing />
      <br/>
      <Divider orientation='horizontal' size='solid' />
      <Milestones />
      <Journey />
    </>
  );
};

export default Home;
