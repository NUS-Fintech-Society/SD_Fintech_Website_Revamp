import { Select } from '@chakra-ui/react'

const Form = () => {
  return (
    <div className="mt-5 lg:mt-0 flex flex-col items-center w-[350px] h-[500px] md:w-[550px] md:h-[650px] lg:w-[820px] lg:h-[780px] ">
      <h1 className='text-[#004080] text-base w-2/3 lg:w-fit md:text-2xl lg:text-3xl font-bold mt-2 lg:mt-[60px] text-center'>
        Don’t find your question? Drop us a message below!
      </h1>

      <div className="mt-5 flex flex-col items-center">
        <form
          action="https://formsubmit.co/120d98fc78eb82935edd63ceac369850"
          method="POST"
        >

          <div className="mb-5 w-[280px] md:w-[480px] lg:w-[600px]">
            <label htmlFor="name" className="block font-bold" />
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-base md:text-lg h-[30px] md:h-[40px]"
            />
          </div>

          <div className="mb-5 w-[280px] md:w-[480px] lg:w-[600px]">
            <label htmlFor="email" className="block font-bold" />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-base md:text-lg h-[30px] md:h-[40px]"
            />
          </div>

          <div className="mb-5">
            <Select variant='filled' placeholder='Role' bg='#f5f5f7' boxShadow='md' w={['280px', '280px', '480px', '600px']} h={['30px', '30px', '40px', '45px']}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>

          <div className="mb-5">
            <Select variant='filled' placeholder='Relevant Department' bg='#f5f5f7' boxShadow='md' w={['280px', '280px', '480px', '600px']} h={['30px', '30px', '40px', '45px']}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>

          {/* message */}
          <div className="mb-5">
            <label htmlFor="message" className="block font-bold" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-base md:text-lg"
            />
          </div>
          <button
            type="submit"
            className="md:mt-5 flex h-[35px] w-[150px] md:h-[55px] md:w-[275px] items-center justify-center rounded-[15px] md:rounded-[20px] bg-[#004080] text-base md:text-xl font-semibold text-white"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Form;
