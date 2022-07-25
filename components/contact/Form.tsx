const Form = () => {
  return (
    <div className="mt-5 lg:mt-0">
      <div>Get in touch!</div>
      <div>Have a question? We’d love to hear from you! </div>

      <div className="mt-5">
        <form
          action="https://formsubmit.co/120d98fc78eb82935edd63ceac369850"
          method="POST"
        >
          {/* email */}
          <div className="mb-5">
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className=" w-full rounded-md border-2 border-gray-500 p-2 "
            />
          </div>
          {/* name */}
          <div className="mb-5">
            <label htmlFor="name" className="block font-bold">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className=" w-full rounded-md border-2 border-gray-500 p-2 "
            />
          </div>
          {/* message */}
          <div className="mb-5">
            <label htmlFor="message" className="block font-bold">
              Your message
            </label>
            <textarea
              name="message"
              required
              rows={8}
              className=" w-full rounded-md border-2 border-gray-500 p-2 "
            />
          </div>
          <button
            type="submit"
            className="mt-5 flex h-12 w-40 items-center justify-center rounded-lg bg-secondary text-xl font-bold text-white lg:h-16 lg:w-56 lg:text-3xl "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
