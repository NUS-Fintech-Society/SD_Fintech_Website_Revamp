// type
import { DepartmentsProps } from '@interfaces/home/Departments';

// code
import DepartmentCard from '@components/home/DepartmentCard';

// library
import SectionHeader from '@components/layout/SectionHeader';

const Departments = ({ departments }: DepartmentsProps) => {
  return (
    <div className="sm:section-my mt-10">
      <SectionHeader
        color="blue"
        title="Our Departments"
        subtitle="5 Core Departments"
      />
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
