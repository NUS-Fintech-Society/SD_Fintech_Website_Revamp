//library
import Image from 'next/image';
import Head from 'next/head';

//code
import MaxWidth from '@components/layout/MaxWidth';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About • NUS Fintech Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-[calc(60vh-64px)] min-h-[400px] w-screen">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/images/recruitment/recruitment-bg.png"
            alt="Insert Photo Here"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <MaxWidth>
          <div className="pt-[15vh] text-center">
            <div className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              About Us
            </div>
            <div className="mt-9 text-2xl text-white sm:text-3xl lg:text-4xl">
              Discover the story behind NUS Fintech Society
            </div>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth>
        <div className="section-my">
          <h2 className="mb-16 text-2xl font-bold lg:text-4xl">Our History</h2>
          <p className="text-lg lg:text-2xl">
            NUS Fintech Society was founded in 2018 in collaboration with NUS
            Fintech Lab under the NUS School of Computing. We identify ourselves
            as Fintech enthusiasts looking for opportunities to learn and grow
            our knowledge, skills and network in the Fintech space.
          </p>
        </div>
      </MaxWidth>
      <MaxWidth>
        <div className="section-my">
          <h2 className="mb-16 text-2xl font-bold lg:text-4xl">
            Our Mission and Vision
          </h2>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div>
              <svg
                className="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <h4 className="my-5 text-xl font-bold lg:text-3xl">Mission</h4>
              <p className="text-lg lg:text-2xl">
                To educate students with Fintech knowledge through events and
                industry projects, and connect and establish relationships with
                industry partners.
              </p>
            </div>
            <div>
              <svg
                className="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
              </svg>
              <h4 className="my-5 text-xl font-bold lg:text-3xl">Vision</h4>
              <p className="text-lg lg:text-2xl">
                To be the leading student-led Fintech Club known for incubating
                industry-ready Fintech talents and industry-grade financial
                digital transformation projects.
              </p>
            </div>
          </div>
        </div>
      </MaxWidth>
    </>
  );
};

export default AboutPage;
