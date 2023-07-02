import { DepartmentRoleProps } from '@interfaces/recruitment/departmentRole';
import { Role } from '@data/interface/departmentRoleData';

import SectionHeader from '@components/layout/SectionHeader';
import RoleCard from '@components/recruitment/RoleCard';
import { useRouter } from 'next/router';
import Link from 'next/link';

const DepartmentRoles = ({ department, roles }: DepartmentRoleProps) => {
  const router = useRouter();
  const isTechnical = router.asPath.includes('/technical-wing');
  const color = isTechnical ? 'blue' : 'green';

  return (
    <div className="sm:section-my my-16">
      <SectionHeader color={color} title={department} subtitle="" />
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {roles.map((role: Role, index: number) => (
          <Link key={index} href={role.path} passHref>
            <div key={index} className="relative cursor-pointer">
              <RoleCard title={role.title} img={role.img} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentRoles;
