import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import departmentsData from '@data/departmentsData';
import rolesData from '@data/rolesData';
import { DepartmentsProps } from '@interfaces/departments';
import { RoleProps } from '@interfaces/roles';

const commonStyles = {
  bg: '#f5f5f7',
  boxShadow: 'md',
  w: ['280px', '280px', '480px', '600px'],
  h: ['30px', '30px', '40px', '45px'],
};

const Form = () => {
  let emailApiUrl = process.env.EMAIL_API_DEV; 
  let redirectUrl = "http://localhost:3000/contact-us";
  if (process.env.NODE_ENV === 'production') {
    emailApiUrl = process.env.EMAIL_API_PROD;
    redirectUrl = "https://fintechsociety.comp.nus.edu.sg/contact-us";
  }

  return (
    <div className="m-2 flex flex-col items-center md:m-5 lg:mt-0">
      <h1 className="mt-2 w-4/5 self-center text-center text-base font-bold text-[#004080] md:text-2xl lg:mt-4 lg:w-fit lg:text-3xl">
        Don’t find your question? Drop us a message below!
      </h1>

      <div className="mt-5 flex">
        <form
          action={emailApiUrl}
          method="POST"
        >
          <Input type="hidden" name="_template" value="table" />
          <Input
            type="hidden"
            name="_subject"
            value="Enquiry for NUS Fintech Society"
          />
          <Input
            type="hidden"
            name="_next"
            value={redirectUrl}
          />

          <Stack spacing={[5, 5, 6]} marginBottom={[5, 5, 6]}>
            <FormControl isRequired>
              <Input
                name="Name"
                variant="filled"
                placeholder="Full Name"
                {...commonStyles}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <Input
                name="Email"
                type="email"
                variant="filled"
                placeholder="Email Address"
                {...commonStyles}
              />
            </FormControl>

            <Select
              name="Role"
              variant="filled"
              placeholder="Select Role"
              {...commonStyles}
            >
              {rolesData.roles.map((role: RoleProps, index: any) => (
                <option value={role.name} key={index}>
                  {role.name}
                </option>
              ))}
            </Select>

            <Select
              name="Department"
              variant="filled"
              placeholder="Select Department"
              {...commonStyles}
            >
              {departmentsData.departments.map(
                (department: DepartmentsProps, index: any) => (
                  <option value={department.name} key={index}>
                    {department.name}
                  </option>
                )
              )}
            </Select>

            <FormControl isRequired>
              <Textarea
                name="Message"
                variant="filled"
                placeholder="Message"
                rows={7}
                {...commonStyles}
                h="auto"
              />
            </FormControl>
          </Stack>

          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[35px] w-[150px] items-center justify-center rounded-[15px] bg-[#004080] text-base font-semibold text-white md:h-[55px] md:w-[275px] md:rounded-[20px] md:text-xl"
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
