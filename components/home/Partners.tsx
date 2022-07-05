import MaxWidth from "@components/layout/MaxWidth";
import {
  Divider,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'

const Partners = () => {
  return (
    <MaxWidth>
      <div className='flex my-6 justify-center'>
        <div className='flex flex-col my-6'>
          <div className="text-4xl text-center mb-6">
            Partners we have worked with
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Partners;
