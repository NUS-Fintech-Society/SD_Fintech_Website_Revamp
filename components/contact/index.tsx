// type

// library
import Image from 'next/image';

// code
import Form from '@components/contact/Form';
import Info from '@components/contact/Info';
import Landing from '@components/contact/landing';
import MaxWidth from '@components/layout/MaxWidth';
import ContactInfoCard from './ContactInfoCard';

const Contact = () => {
  return (
    <>
      {/* old contact us code */}
      {/* <Landing /> */}
      {/* <MaxWidth>
        <div className="section-my flex w-full flex-wrap text-lg md:text-xl lg:justify-around">
          <div className="mb-10 w-full lg:order-2 lg:flex lg:w-1/2">
            <div className="lg:w-5/6">
              <Info />
            </div>
          </div>
          <div className="w-full lg:order-1 lg:w-1/2">
            <div className="lg:w-5/6">
              <Form />
            </div>
          </div>
        </div>
      </MaxWidth> */}

      <MaxWidth>
        <div className="flex">
          <div className="mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] ">
            <div className="relative h-[52px] w-[47.46px] sm:h-[100px] sm:w-[115px]">
              <Image
                src="/images/contact/main_icon.jpg"
                alt="Contact Us Logo"
                layout="fill"
              />
            </div>
            <h1 className="ml-4 mt-3 mb-10 border-b-2 border-[#002750] sm:ml-6 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
              Contact Us
            </h1>
          </div>
        </div>
      </MaxWidth>
      <ContactInfoCard />
    </>
  );
};

export default Contact;
