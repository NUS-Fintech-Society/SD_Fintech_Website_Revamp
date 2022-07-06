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
        <div className=" section-title">Our Departments</div>
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
