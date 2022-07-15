//type
import { DepartmentsProps } from '@interfaces/departments';

//code
import DepartmentInfo from '@components/departments/DepartmentInfo';
import FeaturedProjects from '@components/departments/FeaturedProjects';

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
    <>
      <DepartmentInfo
        name={name}
        logo={logo}
        purpose={purpose}
        vision={vision}
        directors={directors}
        roles={roles}
      />
      <FeaturedProjects projects={projects} />
    </>
  );
};

export default Departments;
