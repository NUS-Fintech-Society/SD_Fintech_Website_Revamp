// type

// library
import Image from 'next/image';

// code
import SocialHandles from './SocialHandles';

const ContactInfoCard = () => {
  return (
    <>
      <div className="relative h-[340px] flex-1 gap-10 bg-[#002750]/80 px-10 py-12 sm:px-12 sm:py-16 text-white sm:h-[520px] lg:h-[550px] lg:w-[620px] lg:min-w-[400px] lg:rounded-r-[20px] lg:px-16">
        <Image
          src="/images/contact/contact_info_image.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-10 opacity-70 sm:rounded-r-[20px]"
        />
        <div className="mb-8 text-center text-xl font-bold leading-[1.388rem] sm:mb-20 sm:text-4xl lg:text-4xl">
          Contact Information
        </div>

        {/* email */}
        <div className="mb-6 sm:mb-10 flex items-center gap-10">
          <div className="flex items-start">
            <Image
              src="/images/contact/email_icon.svg"
              alt="mail icon"
              layout="intrinsic"
              width={30}
              height={30}
            />
          </div>
          <div className="font-semibold sm:text-xl">
            nusfintech.ops@gmail.com
          </div>
        </div>

        {/* location */}
        <div className="mb-10 sm:mb-20 flex items-center gap-10">
          <div className="flex items-start">
            <Image
              src="/images/contact/location_icon.svg"
              alt="location icon"
              layout="intrinsic"
              width={30}
              height={30}
            />
          </div>
          <div className="font-semibold sm:text-xl">
            <div>NUS School of Computing, COM1</div>
            <div>13 Computing Drive</div>
            <div>Singapore 117417</div>
          </div>
        </div>

        <SocialHandles />
      </div>
    </>
  );
};

export default ContactInfoCard;
