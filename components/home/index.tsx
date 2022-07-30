// type
import { HomeProps } from '@interfaces/home';

// code
import Milestones from '@components/home/Milestones';
import Landing from '@components/home/Landing';
import Departments from '@components/home/Departments';
import Partners from '@components/home/Partners';
import MaxWidth from '@components/layout/MaxWidth';

const Home = ({ partnersImages, departments }: HomeProps) => {
  return (
    <>
      <Landing />
      <MaxWidth>
        <div className="lg:gapx-3 mt-20 flex flex-wrap gap-y-10 ">
          <div className="w-full text-center lg:w-1/2">
            <div className=" mb-3 text-h3 font-bold">Passionate</div>
            <p className="text-h3">
              Driving R&D in emerging realms of Blockchain and Machine Learning.
            </p>
          </div>
          <div className="w-full text-center lg:w-1/2">
            <div className=" mb-3 text-h3 font-bold">Goal Oriented</div>
            <p className="text-h3">
              Leading more than 200 members with a strong grasp of their fields.
            </p>
          </div>
        </div>
      </MaxWidth>

      <Milestones />
      <Departments departments={departments} />
      <Partners partnersImages={partnersImages} />
    </>
  );
};

export default Home;
