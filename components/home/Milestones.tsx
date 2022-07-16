import MaxWidth from '@components/layout/MaxWidth';

const Milestones = () => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h1 className="section-title ">Key Milestones</h1>
        <div className="flex justify-center ">
          <div className="flex flex-wrap rounded-md border border-stone-400 text-gray-500 shadow-md sm:w-3/4">
            <div className="w-full border-b-2  p-10 text-h4 text-gray-500 lg:w-1/2 lg:border-r-2 lg:border-b-0">
              <div className="mb-3">
                <span className="text-h2 text-black">{'100 '}</span>MEMBERS
              </div>
              <p className="text-xl lg:text-2xl">
                Our members come from diverse backgrounds and faculties with the
                common goal of learning about and elevating the global FinTech
                Space.
              </p>
            </div>
            <div className="w-full  p-10 text-h4 text-gray-500 lg:w-1/2">
              <div className="mb-3">
                <span className="text-h2 text-black">{'12 '}</span>PROJECTS
                COMPLETED
              </div>
              <p className="text-xl lg:text-2xl">
                Over the years, our society members have had the privilege of
                developing applications with enormous real world potential in
                the fields of machine learning, blockchain development and
                software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Milestones;
