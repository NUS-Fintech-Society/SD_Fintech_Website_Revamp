// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// library
import { Fragment } from 'react';

// code
import DepartmentCard from '@components/home/DepartmentCard';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <div className="section-my">
      <div className='w-full flex flex-wrap bg-black rounded-[20px] p-8'>
        <h2 className="text-4xl text-center sm:text-5xl font-bold text-white">Departments</h2>
        <h3 className='hidden lg:block ml-auto text-xl text-right text-white max-w-lg'>Our projects focus on solving problems that impact real people for internal use and industry partnerships</h3>
      </div>
      <div className="mt-16 xl:mx-20 flex flex-wrap justify-center gap-16">
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
      <div className="mt-16 xl:mx-20 flex flex-wrap justify-center gap-16">
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
