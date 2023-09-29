// code
import Info from '@components/contact/Info';
import MaxWidth from '@components/layout/MaxWidth';

const ContactForm = () => {
  return (
    <MaxWidth>
      <div className="m-2 flex flex-col items-center md:m-5 lg:mt-0">
        <h1 className="mt-2 w-full self-center text-center text-base font-bold text-[#004080] md:text-2xl lg:mt-4 lg:w-full lg:text-3xl">
          Don’t find your question? Drop us an email below!
        </h1>

        <div className="mt-4 flex flex-col items-center">
        <p className="text-center text-[#004080] md:text-lg lg:text-xl">
          Internal Affairs and External Relations: <a href="mailto:nusfintech.ops@gmail.com">nusfintech.ops@gmail.com</a>
        </p>
        <p className="text-center text-[#004080] md:text-lg lg:text-xl">  
          Blockchain: <a href="mailto:nusfintech.bc@gmail.com">nusfintech.bc@gmail.com</a>
        </p>
        <p className="text-center text-[#004080] md:text-lg lg:text-xl"> 
          Quant: <a href="mailto:nusfintech.quant@gmail.com">nusfintech.quant@gmail.com</a> 
        </p>
        <p className="text-center text-[#004080] md:text-lg lg:text-xl"> 
          Software Development: <a href="mailto:nusfintech.dev@gmail.com">nusfintech.dev@gmail.com</a>
        </p>
        <p className="text-center text-[#004080] md:text-lg lg:text-xl"> 
          Machine Learning: <a href="mailto:nusfintech.ml@gmail.com">nusfintech.ml@gmail.com</a>
        </p>
      </div>
    </div>
    </MaxWidth>
  );
};

export default ContactForm;
