import { FormControl, FormErrorMessage, Input, Select, Stack, Textarea } from '@chakra-ui/react';
import departmentsData from '@data/departmentsData';
import rolesData from '@data/rolesData';
import { DepartmentsProps } from '@interfaces/departments';
import { RoleProps } from '@interfaces/roles';

const commonStyles = {
  bg: '#f5f5f7',
  boxShadow: 'md',
  w: ['280px', '280px', '480px', '600px'],
  h: ['30px', '30px', '40px', '45px'],
}

const Form = () => {
  return (
    <div className="m-2 md:m-5 lg:mt-0 flex flex-col items-center">
      <h1 className='text-[#004080] text-base w-4/5 lg:w-fit md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-4 text-center self-center'>
        Don’t find your question? Drop us a message below!
      </h1>

      <div className="mt-5 flex">
        <form
          action="https://formsubmit.co/57ba0ba7fab2eeecf5e10de6f0388f08"
          method="POST"
        >
          <Input type="hidden" name="_template" value="table" />
          <Input type="hidden" name="_subject" value="Enquiry for NUS Fintech Society" />
          {/* Replace with domain name */}
          <Input type="hidden" name="_next" value="http://localhost:3000/contact-us" />

          <Stack spacing={[5, 5, 6]} marginBottom={[5, 5, 6]}>
            <FormControl isRequired>
              <Input
                name='Name'
                variant='filled'
                placeholder='Full Name'
                {...commonStyles}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <Input
                name='Email'
                type='email'
                variant='filled'
                placeholder='Email Address'
                {...commonStyles}
              />
            </FormControl>

            <Select
              name='Role'
              variant='filled'
              placeholder='Select Role'
              {...commonStyles}
            >
              {rolesData.roles.map((role: RoleProps, index: any) =>
                <option value={role.name} key={index}>{role.name}</option>
              )}
            </Select>

            <Select
              name='Department'
              variant='filled'
              placeholder='Select Department'
              {...commonStyles}
            >
              {departmentsData.departments.map((department: DepartmentsProps, index: any) =>
                <option value={department.name} key={index}>{department.name}</option>
              )}
            </Select>

            <FormControl isRequired>
              <Textarea
                name='Message'
                variant='filled'
                placeholder='Message'
                rows={7}
                {...commonStyles}
                h='auto'
              />
            </FormControl>
          </Stack>

          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[35px] w-[150px] md:h-[55px] md:w-[275px] items-center justify-center rounded-[15px] md:rounded-[20px] bg-[#004080] text-base md:text-xl font-semibold text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
