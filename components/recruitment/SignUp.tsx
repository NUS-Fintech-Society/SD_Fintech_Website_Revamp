import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();
  const isTechnical = router.asPath.includes('/technical-wing');
  const bgColor = isTechnical ? '#EEF6FE' : '#CEF0F1';
  const textColor = isTechnical ? '#004C98' : '#006C6C';

  return (
    <div className={`bg-[${bgColor}] block rounded-lg p-6 md:p-14`}>
      <div
        className={`text-[${textColor}] grid grid-flow-col grid-rows-4 gap-10 lg:grid-rows-3 lg:gap-20`}
      >
        <div className="w-[300px] sm:w-[900px] lg:w-full">
          <h1 className="mb-1 text-2xl font-bold md:text-4xl">Sign Up Now!</h1>
          
            <h1 className="mb-3 md:text-xl">
              Sign ups close on{' '}
              <time className="font-bold">25th August 2024 23:59</time>
            </h1>
            <h1 className="mb-3 md:text-xl underline">
              <a>
              https://forms.gle/3GhF99Qt1pbLEomV6
              </a> 
            </h1>
          <div className={`ml-2 ${isTechnical ? 'block' : 'hidden'}`}>
            {/* <br />
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1RExoYn3oKHG2gGjYZ-znYIpaz9iNeUXtOdHPFMn20Zjv8A/viewform"
            >
              <strong>Quant</strong>
            </a>{' '}
            <br />
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu4Tf4N9xbLftMpERfvxZCN5n9fMfqeZlXOf_IQ0SVq9Emrg/viewform"
            >
              <strong>Software Development</strong>
            </a>
            <br />
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdr6dgteBdY7ym7amLtSCi_IcOjEz-K82DGmuxy9tuWiLRheA/viewform?ts=64b4af15"
            >
              <strong>Blockchain</strong>
            </a>
            <br />
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/1AxqRvgO1Mw29lZHs0iwth8-TFnIhA7DKKQORSn-2pFE/viewform?edit_requested=true"
            >
              <strong>Machine Learning</strong>
            </a>
          </div>

          <div className={`ml-2 ${isTechnical ? 'hidden' : 'block'}`}>
            <br />
            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf25SsNXt5zczBqKUrnMWNR7ivQpQ-__Q8000TtNShsjJ10lg/viewform"
            >
              <strong>External Relations</strong>
            </a>

            <br />

            <a
              className="underline underline-offset-1 md:text-xl"
              href="https://docs.google.com/forms/d/e/1FAIpQLScq1e4feF5CbF9N-nWc0sjq2mKw6b0_rZe4eBdAl-z5o8FAhQ/viewform"
            >
              <strong>Internal Affairs</strong>
            </a> */}
          </div>
        </div>
        <div className="w-[300px] sm:w-[6400px] md:w-2/3 lg:w-full">
          <h1 className="mb-1 text-2xl font-bold md:text-4xl">Welcome Tea</h1>
          <h1 className="mb-3 md:text-xl">
            Missed our Welcome Tea? Watch the recordings here!
          </h1>
          <h1 className="mb-3 md:text-xl underline">
            <a>
              https://drive.google.com/file/d/1OSCo00YSh07ZsptqTdQfMZdgenLuNrdG/view?usp=sharing
            </a>
          </h1>
        </div>
        <div className="w-[300px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] md:grid-cols-2 md:gap-x-24 md:gap-y-0 lg:grid">
          <div>
            <h1 className="mb-1 text-2xl font-bold md:text-4xl">FAQs</h1>
            <h1 className="mb-3 md:text-xl">
              Have questions?
              <br />
              Take a look at our FAQs on recruitment{' '}
              <Link href="/contact-us">
                <a className="font-bold underline underline-offset-1">here!</a>
              </Link>
            </h1>
          </div>
          <div className="hidden lg:block">
            <h1 className="mb-1 text-2xl font-bold md:text-4xl">Contact Us</h1>
            <h1 className="mb-3 md:text-xl">
              You could also contact us{' '}
              <Link href="/contact-us">
                <a className="font-bold underline underline-offset-1">here!</a>
              </Link>
            </h1>
          </div>
        </div>

        <div className="w-[300px] sm:w-[768px] lg:hidden">
          <h1 className="mb-1 text-2xl font-bold md:text-4xl">Contact Us</h1>
          <h1 className="mb-3 md:text-xl">
            You could also contact us{' '}
            <Link href="/contact-us">
              <a className="font-bold underline underline-offset-1">here!</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
