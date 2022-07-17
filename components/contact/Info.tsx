import Image from 'next/image';

const Info = () => {
  return (
    <>
      <div className="mb-10 ">
        <Image
          src="/images/contact/com1_bg.png"
          alt="com 1 background"
          layout="responsive"
          width={462}
          height={263}
        />
      </div>
      {/* location */}
      <div className="flex pl-2">
        <div className="mr-3 mt-2 flex items-start">
          <Image
            src="/images/contact/location.svg"
            alt="location icon"
            layout="intrinsic"
            width={20}
            height={22}
          />
        </div>
        <div>
          <div>NUS School of Computing, COM1</div>
          <div>13 Computing Drive</div>
          <div>Singapore 117417</div>
        </div>
      </div>
      {/* email */}
      <div className="mt-5 flex pl-2">
        <div className="mr-3 mt-1 flex items-start">
          <Image
            src="/images/contact/mail.svg"
            alt="mail icon"
            layout="intrinsic"
            width={24}
            height={24}
          />
        </div>
        <div>nusfintech.ops@gmail.com</div>
      </div>
    </>
  );
};

export default Info;
