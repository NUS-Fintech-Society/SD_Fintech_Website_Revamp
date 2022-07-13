import MaxWidth from '@components/layout/MaxWidth';

const Milestones = () => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h1 className="section-title ">Key Milestones</h1>
        <div className="flex justify-center ">
          <div className="flex flex-wrap rounded-md border border-stone-400 text-gray-500 shadow-md sm:w-3/4">
            <div className="w-full border-b-2  p-10 text-h4 text-gray-500 md:w-1/2 md:border-r-2 md:border-b-0">
              <div>
                <span className="text-h2 text-black">{'100 '}</span>MEMBERS
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ad eveniet rerum vitae culpa deleniti nobis error voluptatibus
                repudiandae? Quas officiis illum impedit optio in?
              </div>
            </div>
            <div className="w-full  p-10 text-h4 text-gray-500 md:w-1/2">
              <div>
                <span className="text-h2 text-black">{'12 '}</span>PROJECTS
                COMPLETED
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ad eveniet rerum vitae culpa deleniti nobis error voluptatibus
                repudiandae? Quas officiis illum impedit optio in?
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Milestones;
