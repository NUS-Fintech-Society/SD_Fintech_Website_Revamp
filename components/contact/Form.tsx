import { Select } from '@chakra-ui/react'

const Form = () => {
  return (
    <div className="mt-5 lg:mt-0">
      <h1 className='text-[#004080] text-2xl font-bold'>Don’t find your question?  Drop us a message below!</h1>

      <div className="mt-5">
        <form
          action="https://formsubmit.co/120d98fc78eb82935edd63ceac369850"
          method="POST"
        >

          <div className="mb-5 w-[600px] h-[50px] ">
            <label htmlFor="name" className="block font-bold" />
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-lg"
            />
          </div>

          <div className="mb-5 w-[600px] h-[50px] ">
            <label htmlFor="email" className="block font-bold" />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-lg"
            />
          </div>

          <div className="mb-5 w-[600px] h-[50px] ">
            <Select variant='filled' placeholder='Role' bg='#f5f5f7' boxShadow='md' w='600px' h='45px'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>

          <div className="mb-5 w-[600px] h-[50px] ">
            <Select variant='filled' placeholder='Relevant Department' bg='#f5f5f7' boxShadow='md' w='600px' h='45px'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </div>



          {/* message */}
          <div className="mb-5 w-[600px]">
            <label htmlFor="message" className="block font-bold"/>
            <textarea
              name="message"
              required
              rows={8}
              placeholder="Message"
              className="border-1 w-full rounded-md p-2 bg-neutral-100/80 shadow-md text-lg"
            />
          </div>
          <button
            type="submit"
            className="mt-5 flex h-[55px] w-[275px] items-center justify-center rounded-[20px] bg-[#004080] text-xl font-semibold text-white lg:h-16 lg:w-56 lg:text-xl "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
