// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// code
import DepartmentCard from '@components/home/DepartmentCard';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <div className="sm:section-my mt-10">
      <div className="flex w-full flex-wrap rounded-[10px] bg-black p-3 sm:rounded-[20px] sm:p-6">
        <h2 className="text-center font-bold text-white sm:text-3xl">
          Our Departments
        </h2>
        <h3 className="mt-1 ml-auto max-w-lg text-right text-xs text-white sm:text-lg">
          5 Core Departments
        </h3>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-10 sm:mt-16 sm:gap-16 xl:mx-20">
        {departments
          .slice(0, 3)
          .map(
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
      <div className="mt-10 flex flex-wrap justify-center gap-10 sm:mt-16 sm:gap-16 xl:mx-20">
        {departments
          .slice(3)
          .map(
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
