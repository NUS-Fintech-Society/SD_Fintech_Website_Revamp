export interface Role {
  title: string;
  img: string;
  path: string;
}

export default interface DepartmentRoleData {
  department: string;
  roles: Role[];
}
