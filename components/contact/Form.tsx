import { FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import rolesData from '@data/rolesData';
import departmentsData from '@data/departmentsData';
import { DepartmentsProps } from '@interfaces/departments';
import { RoleProps } from '@interfaces/roles';

const Form = () => {

  const containerColour = '#f5f5f7'
  const inputContainerWidth = ['280px', '280px', '480px', '600px']
  const inputContainerHeight = ['30px', '30px', '40px', '45px']

  return (
    <div className="m-2 md:m-5 lg:mt-0 flex flex-col">
      <h1 className='text-[#004080] text-base w-2/3 lg:w-fit md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-4 text-center self-center'>
        Don’t find your question? Drop us a message below!
      </h1>

      <div className="mt-5 flex flex-col items-center">
        <form
          action="https://formsubmit.co/120d98fc78eb82935edd63ceac369850"
          method="POST"
        >

          <Stack spacing={[5,5,6]} marginBottom={[5,5,6]}>
            <Input type='text' variant='filled' placeholder='Full Name' bg={containerColour} boxShadow='md'w={inputContainerWidth} h={inputContainerHeight}/>
            <Input type='email' variant='filled' placeholder='Email Address' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}/>
            <Select variant='filled' placeholder='Role' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {rolesData.roles.map((role: RoleProps, index: any) =>
                <option value={role.name} key={index}>{role.name}</option>
              )}
            </Select>
            <Select variant='filled' placeholder='Relevant Department' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {departmentsData.departments.map((department: DepartmentsProps, index: any) =>
                <option value={department.name} key={index}>{department.name}</option>
              )}
            </Select>
            {/* <Input variant='filled' placeholder='Message' bg={containerColour} boxShadow='md' w={inputContainerWidth}/> */}
          </Stack>
          {/* <div className="mb-5 w-[280px] md:w-[480px] lg:w-[600px]">
            <label htmlFor="name" className="block font-bold" />
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="border-1 w-full rounded-md p-2 bg-[#f5f5f7] shadow-md text-base md:text-lg h-[30px] md:h-[40px]"
            />
          </div> */}

          {/* <div className="mb-5 w-[280px] md:w-[480px] lg:w-[600px]">
            <label htmlFor="email" className="block font-bold" />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border-1 w-full rounded-md p-2 bg-[#f5f5f7] shadow-md text-base md:text-lg h-[30px] md:h-[40px]"
            />
          </div> */}

          {/* <div className="my-5">
            <Select variant='filled' placeholder='Role' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {rolesData.roles.map((role: RoleProps, index: any) =>
                <option value={role.name} key={index}>{role.name}</option>
              )}
            </Select>
          </div>

          <div className="mb-5">
            <Select variant='filled' placeholder='Relevant Department' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {departmentsData.departments.map((department: DepartmentsProps, index: any) =>
                <option value={department.name} key={index}>{department.name}</option>
              )}
            </Select>
          </div> */}

          {/* message */}
          <div className="mb-5">
            <label htmlFor="message" className="block font-bold" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              className="border-1 w-full rounded-md p-2 bg-[#f5f5f7] shadow-md text-base md:text-lg"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex h-[35px] w-[150px] md:h-[55px] md:w-[275px] items-center justify-center rounded-[15px] md:rounded-[20px] bg-[#004080] text-base md:text-xl font-semibold text-white"
            >
              Send Message
            </button>
          </div>


          {/* <input
            type="submit"
            className="md:mt-5 flex h-[35px] w-[150px] md:h-[55px] md:w-[275px] items-center justify-center rounded-[15px] md:rounded-[20px] bg-[#004080] text-base md:text-xl font-semibold text-white"
          /> */}
        </form>

      </div>
    </div>
  );
};

export default Form;
