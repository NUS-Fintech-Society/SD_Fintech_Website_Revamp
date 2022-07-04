import MaxWidth from "@components/layout/MaxWidth";
import DepartmentCard from "@components/home/DepartmentCard";
import { Department } from "@data/interface/homeData";

type DepartmentsProps = {
  ds: Department[]; 
}

const Departments = (departments: DepartmentsProps) => {
  return (
    <MaxWidth>
      <div className="font-bold text-3xl h-12 mt-4 mb-4 text-center">Departments</div>
      <div className="flex flex-wrap">
        {departments.ds?.map((d) => (
          <DepartmentCard
            coverImage={d.coverImage}
            cardDescription={d.cardDescription}
            name={d.name}
            path={d.path}
          />
        ))}
      </div>
    </MaxWidth>
  );
};

export default Departments;
