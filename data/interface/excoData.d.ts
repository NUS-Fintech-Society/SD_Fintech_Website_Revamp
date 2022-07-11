interface ExcoData{
    departmentExcos: DepartmentExco[];
}

interface DepartmentExco{
    department: string;
    excos: Exco[];
}

interface Exco{
    role: string;
    designation: string;
    name: string;
    text: string;
}

export default ExcoData;