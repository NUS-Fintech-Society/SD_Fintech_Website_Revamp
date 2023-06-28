// type
import { RolesTextProps } from '@interfaces/roles/RolesText';

const RolesText = ({ header, desc }: RolesTextProps) => {
  return (
    <>
      <h3 className="mb-5 text-xl font-bold text-[#002750] lg:text-3xl">
        {header}
      </h3>
      <div className="text-l mb-10 text-[#002750] lg:text-xl">
        {desc.map((item, index) => (
          <div key={index} className="mb-5">{item}</div>
        ))}
      </div>
    </>
  );
};

export default RolesText;
