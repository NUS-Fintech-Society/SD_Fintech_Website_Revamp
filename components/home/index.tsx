//type
import { HomeProps } from "@interfaces/home";

//code
import Milestones from "@components/home/Milestones";
import Landing from "@components/home/Landing";
import Journey from "@components/home/Journey";
import Departments from "@components/home/Departments";

const Home = (
  { partnersImages, journey, departments }: HomeProps,
) => {
  console.log(partnersImages);
  return (
    <>
      <Landing />
      <Milestones />
      <Departments ds={departments}/>
      <Journey />
    </>
  );
};

export default Home;
