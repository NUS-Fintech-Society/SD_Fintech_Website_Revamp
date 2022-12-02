// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// code
import DepartmentCard from '@components/home/DepartmentCard';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <div className="mt-10 sm:section-my">
      <div className='w-full flex flex-wrap bg-black p-3 rounded-[10px] sm:p-6 sm:rounded-[20px]'>
        <h2 className="text-center sm:text-3xl font-bold text-white">Our Departments</h2>
        <h3 className='mt-1 ml-auto text-xs sm:text-lg text-right text-white max-w-lg'>5 Core Departments</h3>
      </div>
      <div className="mt-10 sm:mt-16 xl:mx-20 flex flex-wrap justify-center gap-10 sm:gap-16">
        {departments.slice(0, 3).map(
          ({ coverImage, cardDescription, name, path, wingType }, index) => (
            <DepartmentCard
              key={index}
              coverImage={coverImage}
              cardDescription={cardDescription}
              name={name}
              path={path}
              wingType={wingType}
            />
          )
        )}
      </div>
      <div className="mt-10 sm:mt-16 xl:mx-20 flex flex-wrap justify-center gap-10 sm:gap-16">
        {departments.slice(3).map(
          ({ coverImage, cardDescription, name, path, wingType }, index) => (
            <DepartmentCard
              key={index}
              coverImage={coverImage}
              cardDescription={cardDescription}
              name={name}
              path={path}
              wingType={wingType}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Departments;
