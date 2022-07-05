import MaxWidth from '@components/layout/MaxWidth';
import {
  Divider,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';

const Milestones = () => {
  return (
    <MaxWidth>
      <div className="my-28">
        <div className=" mb-20 text-center text-3xl font-bold">
          Key Milestones
        </div>
        <div className="flex justify-center ">
          <div className="flex w-3/4 flex-wrap rounded-md border border-stone-400 text-gray-500 shadow-md">
            <div className="w-full border-b-2  p-10 text-h4 text-gray-500 md:w-1/2 md:border-r-2">
              <span className="text-h2 text-black">{'100 '}</span>MEMBERS
            </div>
            <div className="w-full  p-10 text-h4 text-gray-500 md:w-1/2">
              <span className="text-h2 text-black">{'12 '}</span>PROJECTS
              COMPLETED
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Milestones;
