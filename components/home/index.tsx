//type
import { HomeProps } from '@interfaces/home';

//code
import Landing from "@components/home/Landing";
import Milestones from "@components/home/Milestones";
import Journey from "@components/home/Journey";
import Partners from "@components/home/Partners";

const Home = ({ partnersImages, journey }: HomeProps) => {
  return (
    <>
      <Landing />
      <Milestones />
      <Journey />
      <Partners {...partnersImages} />
    </>
  );
};

export default Home;
