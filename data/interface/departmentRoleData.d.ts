export interface Role {
  title: string;
  img: string;
}

export default interface DepartmentRoleData {
  department: string;
  roles: Role[];
}
