// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// library
import { Fragment } from 'react';

// code
import DepartmentCard from '@components/home/DepartmentCard';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <div className="section-my">
      <h2 className="mb-20 text-center text-h2 font-bold">Our Departments</h2>
      <div className="flex flex-wrap justify-center gap-[72px]">
        {departments.map(
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
