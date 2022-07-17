// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// library
import { Fragment } from 'react';

// code
import MaxWidth from '@components/layout/MaxWidth';
import DepartmentCard from '@components/home/DepartmentCard';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <MaxWidth>
      <div className="section-my">
        <h2 className=" mb-20 text-center text-h2 font-bold">
          Our Departments
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {departments.map(
            ({ coverImage, cardDescription, name, path }, index) => (
              <Fragment key={index}>
                <DepartmentCard
                  coverImage={coverImage}
                  cardDescription={cardDescription}
                  name={name}
                  path={path}
                />
              </Fragment>
            )
          )}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Departments;
