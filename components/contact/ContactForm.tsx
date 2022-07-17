// code
import Info from '@components/contact/Info';
import MaxWidth from '@components/layout/MaxWidth';
import Form from '@components/contact/Form';

const ContactForm = () => {
  return (
    <MaxWidth>
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
    </MaxWidth>
  );
};

export default ContactForm;
