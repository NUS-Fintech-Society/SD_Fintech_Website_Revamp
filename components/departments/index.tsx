// type
import { DepartmentsProps } from '@interfaces/departments';

// code
import DepartmentInfo from '@components/departments/DepartmentInfo';
import FeaturedProjects from '@components/departments/FeaturedProjects';
import MaxWidth from '@components/layout/MaxWidth';

const Departments = ({
  name,
  logo,
  purpose,
  vision,
  directors,
  roles,
  projects,
}: DepartmentsProps) => {
  return (
    <MaxWidth>
      <DepartmentInfo
        name={name}
        logo={logo}
        purpose={purpose}
        vision={vision}
        directors={directors}
        roles={roles}
      />
      <FeaturedProjects key={name} projects={projects} />
    </MaxWidth>
  );
};

export default Departments;
