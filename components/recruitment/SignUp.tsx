import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();
  const isTechnical = router.asPath.includes('/technical-wing');
  console.log(isTechnical);
  const bgColor = isTechnical ? 'bg-[#EEF6FE]' : 'bg-[#CEF0F1]';
  const textColor = isTechnical ? 'text-[#004C98]' : 'text-[#006C6C]';
  console.log(bgColor, textColor);
  setTimeout(() => {
    console.log(isTechnical, bgColor, textColor);
  }, 5000);

  return (
    <div className={`${bgColor} block rounded-lg mb-6 p-6 md:p-14`}>
      <div
        className={`${textColor} grid grid-flow-col grid-rows-3 gap-10 lg:grid-rows-2 lg:gap-20`}
      >
        <div className="w-[300px] sm:w-[900px] lg:w-full">
          <h1 className="mb-1 text-2xl font-bold md:text-4xl">Sign Up Now!</h1>

          <h1 className="mb-3 md:text-xl">
            We are reviewing applicants on a rolling basis so sign up ASAP!
          </h1>
          <h1 className="mb-3 md:text-xl underline">
            <a href="https://forms.gle/95FUGAjHB46BMJd89" target='_blank' rel="noopener noreferrer">
              https://forms.gle/95FUGAjHB46BMJd89
            </a>
          </h1>
          {/* <div className={`ml-2 ${isTechnical ? 'block' : 'hidden'}`}> */}
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
          {/* </div> */}
        </div>
        <div className="w-[300px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:grid-cols-2 lg:gap-x-24 lg:gap-y-0 lg:grid">
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
