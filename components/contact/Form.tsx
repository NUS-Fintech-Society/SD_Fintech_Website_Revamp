import { FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, Textarea } from '@chakra-ui/react';
import rolesData from '@data/rolesData';
import departmentsData from '@data/departmentsData';
import { DepartmentsProps } from '@interfaces/departments';
import { RoleProps } from '@interfaces/roles';
import { useState } from 'react';

const initValues = { fname: '', email: '', message: '' };
const initTouched = {fname: false, email: false, message: false}
const containerColour = '#f5f5f7'
const inputContainerWidth = ['280px', '280px', '480px', '600px']
const inputContainerHeight = ['30px', '30px', '40px', '45px']


const initInput = { values: initValues }
const initTouch = { touched: initTouched}
const Form = () => {

  const [input, setInput] = useState(initInput)
  const [isTouched, setIsTouched] = useState(initTouch)

  const { values } = input
  const { touched } = isTouched

  const onBlur = ({ target }: any) =>
    setIsTouched(prev => ({
      ...prev,
      touched: {
        ...prev.touched,
        [target.name]: true
      }

    }))

  const handleChange = ({ target }: any) =>
    setInput(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))



  return (
    <div className="m-2 md:m-5 lg:mt-0 flex flex-col">
      <h1 className='text-[#004080] text-base w-2/3 lg:w-fit md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-4 text-center self-center'>
        Don’t find your question? Drop us a message below!
      </h1>

      <div className="mt-5 flex flex-col items-center">
        <form
          action="https://formsubmit.co/57ba0ba7fab2eeecf5e10de6f0388f08"
          method="POST"
        >
          <Input type="hidden" name="_template" value="table" />
          <Input type="hidden" name="_subject" value="Enquiry for NUS Fintech Society" />
          {/* Replace with domain name */}
          <Input type="hidden" name="_next" value="http://localhost:3000/contact-us" />

          <Stack spacing={[5, 5, 6]} marginBottom={[5, 5, 6]}>
            <FormControl isRequired isInvalid={touched.fname}>
              <Input
                name='Name'
                value={values.fname}
                onChange={handleChange}
                onBlur={onBlur}
                variant='filled'
                placeholder='Full Name'
                bg={containerColour}
                boxShadow='md'
                w={inputContainerWidth}
                h={inputContainerHeight} />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              <Input name='Email' value={values.email} onChange={handleChange} type='email' variant='filled' placeholder='Email Address' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight} />
            </FormControl>

            <Select name='Role' variant='filled' placeholder='Role' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {rolesData.roles.map((role: RoleProps, index: any) =>
                <option value={role.name} key={index}>{role.name}</option>
              )}
            </Select>

            <Select name='Department' variant='filled' placeholder='Relevant Department' bg={containerColour} boxShadow='md' w={inputContainerWidth} h={inputContainerHeight}>
              <option value='NA'>Not Applicable</option>
              {departmentsData.departments.map((department: DepartmentsProps, index: any) =>
                <option value={department.name} key={index}>{department.name}</option>
              )}
            </Select>

            <FormControl isRequired>
              <Textarea name='Message' variant='filled' placeholder='Message' rows={7} bg={containerColour} boxShadow='md' w={inputContainerWidth} />
            </FormControl>
          </Stack>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex h-[35px] w-[150px] md:h-[55px] md:w-[275px] items-center justify-center rounded-[15px] md:rounded-[20px] bg-[#004080] text-base md:text-xl font-semibold text-white"
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
