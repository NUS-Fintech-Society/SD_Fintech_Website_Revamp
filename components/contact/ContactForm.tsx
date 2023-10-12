// code
// import MaxWidth from '@components/layout/MaxWidth';

const ContactForm = () => {
  return (
    <div className="m-2 flex w-full flex-col gap-6 md:m-5 lg:mt-0">
      <h1 className="mt-2 w-full self-center text-center text-base font-bold text-[#004080] md:text-2xl lg:mt-4 lg:w-full lg:text-3xl">
        Don&rsquo;t find your question? Drop us an email!
      </h1>

      <div className="mt-4 flex flex-col gap-6">
        <div className="md:text-md text-[#004080] lg:text-xl">
          <p className="font-semibold">
            Internal Affairs and External Relations:&nbsp;
          </p>
          <a className="underline" href="mailto:nusfintech.ops@gmail.com">nusfintech.ops@gmail.com</a>
        </div>
        <div className="text-[#004080] md:text-lg lg:text-xl">
          <p className="font-semibold">Blockchain:&nbsp;</p>
          <a className="underline" href="mailto:nusfintech.bc@gmail.com">nusfintech.bc@gmail.com</a>
        </div>
        <div className="text-[#004080] md:text-lg lg:text-xl">
          <p className="font-semibold">Quant:&nbsp;</p>
          <a className="underline" href="mailto:nusfintech.quant@gmail.com">
            nusfintech.quant@gmail.com
          </a>
        </div>
        <div className="text-[#004080] md:text-lg lg:text-xl">
          <p className="font-semibold">Software Development:&nbsp;</p>
          <a className="underline" href="mailto:nusfintech.dev@gmail.com">nusfintech.dev@gmail.com</a>
        </div>
        <div className="text-[#004080] md:text-lg lg:text-xl">
          <p className="font-semibold">Machine Learning:&nbsp;</p>
          <a className="underline" href="mailto:nusfintech.ml@gmail.com">nusfintech.ml@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
