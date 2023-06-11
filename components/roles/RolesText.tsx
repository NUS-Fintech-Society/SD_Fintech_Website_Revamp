// type
import { RolesTextProps } from '@interfaces/roles/RolesText';

const RolesText = ({ header, desc }: RolesTextProps) => {
  return (
    <>
      <h3 className="mb-5 text-xl font-bold lg:text-3xl text-[#002750]">
        {header}
      </h3>
      <p className="text-l mb-10 lg:text-xl text-[#002750]">
        {desc}
      </p>
    </>
  );
};

export default RolesText;