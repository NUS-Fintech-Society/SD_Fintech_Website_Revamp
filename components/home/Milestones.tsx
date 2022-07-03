<<<<<<< Updated upstream
import MaxWidth from '@components/layout/MaxWidth';
=======
import MaxWidth from "@components/layout/MaxWidth";
import {
  Divider,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
>>>>>>> Stashed changes

const Milestones = () => {
  return (
    <MaxWidth>
      <div className='flex my-6 justify-center'>
        <div className='flex flex-col my-6'>
          <div className="text-4xl text-center mb-6">
            Key Milestones
          </div>
          <div>
            <Center h='150px' w='800px' border='1px' borderColor='gray.200'>
              <Stat p={4} display='flex' justifyContent='center'>
                <StatLabel fontSize='lg'>Members</StatLabel>
                <StatNumber fontSize='3xl'>100</StatNumber>
                <StatHelpText>Insert some text here</StatHelpText>
              </Stat>
              <Divider orientation='vertical' size='solid' />
              <Stat p={4} display='flex' justifyContent='center'>
                <StatLabel fontSize='lg'>Projects Completed</StatLabel>
                <StatNumber fontSize='3xl'>12</StatNumber>
                <StatHelpText>Insert some text here</StatHelpText>
              </Stat>
            </Center>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Milestones;
