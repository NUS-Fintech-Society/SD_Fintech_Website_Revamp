import MaxWidth from '@components/layout/MaxWidth';

const Milestones = () => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className="mb-20 text-center text-h2 font-bold">Key Milestones</h2>
        <div className="flex justify-center ">
          <div className="flex flex-wrap rounded-md  border border-stone-800 text-h3 text-gray-500 shadow-lg sm:w-8/12">
            <div className=" w-full  border-b border-stone-800 p-10 text-gray-500 lg:w-1/2 lg:border-r lg:border-b-0">
              <div className="mb-3">
                <span className="text-h2 text-black">{'204 '}</span>Members
              </div>
              <p className="">44% Increase from 2020</p>
            </div>
            <div className="  w-full p-10 text-gray-500 lg:w-1/2">
              <div className="mb-3 ">
                <span className="text-h2 text-black">{'23 '}</span>Projects
                Completed
              </div>
              <p className="">40% YOY growth</p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Milestones;
