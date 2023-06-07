// type
import { RolesTextProps } from '@interfaces/roles/RolesText';

const RolesText = ({ header, desc }: RolesTextProps) => {
  return (
    <>
      <h3 className="mb-5 text-h3 font-bold">
        {header}
      </h3>
      <p className="text-l mb-10 lg:text-xl">
        {desc}
      </p>
    </>
  );
};

export default RolesText;