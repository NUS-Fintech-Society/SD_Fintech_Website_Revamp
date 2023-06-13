import MaxWidth from '@components/layout/MaxWidth';

const SignUp = () => {
  return (
    <MaxWidth>
      <div className="block rounded-lg bg-[#EEF6FE] p-6 md:p-14">
        <div className="grid grid-flow-col grid-rows-4 gap-10 text-[#004C98] lg:grid-rows-3 lg:gap-20">
          <div className="w-[300px] sm:w-[1056px]">
            <h1 className="mb-1 text-2xl font-bold md:text-4xl">
              Sign Up Now!
            </h1>
            <h1 className="mb-3 md:text-xl">
              Sign ups close on{' '}
              <time className="font-bold">10 Aug 2022 23:59</time>
            </h1>
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://forms.gle/3GhF99Qt1pbLEomV6"
            >
              https://forms.gle/3GhF99Qt1pbLEomV6
            </a>
          </div>
          <div className="w-[300px] sm:w-[320px] md:w-2/3">
            <h1 className="mb-1 text-2xl font-bold md:text-4xl">Welcome Tea</h1>
            <h1 className="mb-3 md:text-xl">
              Missed our Welcome Tea?
              <br />
              Watch the recordings{' '}
              <a
                className="font-bold underline underline-offset-1"
                href="https://drive.google.com/file/d/1OSCo00YSh07ZsptqTdQfMZdgenLuNrdG/view?usp=sharing"
              >
                here!
              </a>
            </h1>
          </div>
          <div className="w-[300px] md:w-[700px] md:grid-cols-2 md:gap-x-24 md:gap-y-0 lg:grid">
            <div>
              <h1 className="mb-1 text-2xl font-bold md:text-4xl">FAQs</h1>
              <h1 className="mb-3 md:text-xl">
                Have questions?
                <br />
                Take a look at our FAQs on recruitment{' '}
                <span className="font-bold underline underline-offset-1">
                  here
                </span>
              </h1>
            </div>
            <div className="hidden lg:block">
              <h1 className="mb-1 text-2xl font-bold md:text-4xl">
                Contact Us
              </h1>
              <h1 className="mb-3 md:text-xl">
                You could also contact us{' '}
                <span className="font-bold underline underline-offset-1">
                  here
                </span>
              </h1>
            </div>
          </div>

          <div className="w-[300px] sm:w-[1056px] lg:hidden">
            <h1 className="mb-1 text-2xl font-bold md:text-4xl">Contact Us</h1>
            <h1 className="mb-3 md:text-xl">
              You could also contact us{' '}
              <span className="font-bold underline underline-offset-1">
                here
              </span>
            </h1>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default SignUp;
