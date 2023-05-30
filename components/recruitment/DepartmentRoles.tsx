import { DepartmentRoleProps } from '@interfaces/recruitment/departmentRole';
import { Role } from '@data/interface/departmentRoleData';

import SectionHeader from '@components/layout/SectionHeader';
import RoleCard from '@components/recruitment/RoleCard';

const DepartmentRoles = ({ department, roles }: DepartmentRoleProps) => {
  return (
    <div className="sm:section-my my-16">
      <div className="mx-16">
        <SectionHeader color="blue" title={department} subtitle="" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {roles.map((role: Role, index: number) => (
            <div key={index} className="relative">
              <RoleCard title={role.title} img={role.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentRoles;