import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
  Textarea
} from '@chakra-ui/react';
import departmentsData from '@data/departmentsData';
import rolesData from '@data/rolesData';
import { DepartmentsProps } from '@interfaces/departments';
import { RoleProps } from '@interfaces/roles';
import { useState } from 'react';
import { useRouter } from 'next/router';

const commonStyles = {
  bg: '#f5f5f7',
  boxShadow: 'md',
  w: ['280px', '280px', '480px', '600px'],
  h: ['30px', '30px', '40px', '45px'],
};

const Form = () => {
  const emailApiUrl = process.env.EMAIL_API; 
  const { asPath } = useRouter();
  const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : 'https://fintechsociety.comp.nus.edu.sg';

  const routerUrl = `${origin}${asPath}`;
  const [subject, setSubject] = useState("")

  const handleInput = (value: string): void => {
    setSubject(value)
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
            value={subject}
          />
          <Input
            type="hidden"
            name="_next"
            value={routerUrl}
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
              <Input
                name="Subject"
                variant="filled"
                placeholder="Subject"
                value={subject}
                onChange={e => handleInput(e.target.value)}
                {...commonStyles}
              />
            </FormControl>

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


