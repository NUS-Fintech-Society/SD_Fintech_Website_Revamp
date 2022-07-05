//type
import { HomeProps } from '@interfaces/home';

//code
import Milestones from "@components/home/Milestones";
import Landing from "@components/home/Landing";
import Journey from "@components/home/Journey";
import Departments from '@components/home/Departments';
import Partners from '@components/home/Partners';
import { Divider } from "@chakra-ui/react";


const Home = ({ partnersImages, journey }: HomeProps) => {
  console.log(partnersImages);
  return (
    <>
      <Landing/>
      <br/>
      <Divider orientation='horizontal' size='solid' />
      <Milestones/>
      <br/>
      <Divider orientation='horizontal' size='solid' />
      <Departments/>
      <Divider orientation='horizontal' size='solid' />
      <Partners/>
      <Journey/>
    </>
  );
};

export default Home;
