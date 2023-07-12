// type

// library
import Image from 'next/image';

// code
import SocialHandles from './SocialHandles';

const ContactInfoCard = () => {
  return (
    <>
      <div className="relative h-[330px] bg-[#002750]/80 px-10 py-12 text-white sm:h-[520px] sm:px-12 sm:py-16 lg:w-[620px] lg:rounded-r-[20px] lg:px-16">
        <div className="absolute -z-10 -mx-10 -my-12 h-full w-full sm:-mx-12 sm:-my-16 lg:-m-16">
          <Image
            src="/images/contact/contact_info_image.jpg"
            alt="Contact Info Logo"
            layout="fill"
            objectFit="cover"
            className="opacity-70 lg:rounded-r-[20px]"
          />
        </div>
        <div className="text-center text-xl font-bold leading-[1.388rem] sm:text-4xl lg:text-4xl">
          Contact Information
        </div>

        {/* email and location */}
        <div className="my-10 grid justify-center gap-5 text-left sm:my-20 sm:gap-10">
          <div className="flex items-center gap-7 sm:gap-10">
            <Image
              src="/images/contact/email_icon.svg"
              alt="mail icon"
              layout="intrinsic"
              width={30}
              height={30}
            />
            <div className="text-sm font-semibold sm:text-xl">
              nusfintech.ops@gmail.com
            </div>
          </div>

          <div className="flex items-center gap-7 sm:gap-10">
            <Image
              src="/images/contact/location_icon.svg"
              alt="location icon"
              layout="intrinsic"
              width={30}
              height={30}
            />
            <div className="text-sm font-semibold sm:text-xl">
              NUS School of Computing, COM1 <br />
              13 Computing Drive <br />
              Singapore 117417
            </div>
          </div>
        </div>

        <SocialHandles />
      </div>
    </>
  );
};

export default ContactInfoCard;
