import MaxWidth from '@components/layout/MaxWidth';

const WhoShouldJoin = () => {
  return (
    <MaxWidth>
      <div className="section-my pb-0 ">
        <h2 className=" mb-10 text-h2 font-bold">Who Should Join Us?</h2>
        <p className=" text-xl lg:text-2xl">
          The NUS FinTech Society is looking for passionate and driven people
          looking to be at the forefront of cutting edge technology in the
          FinTech space. Learners of all skill levels are welcome and interested
          parties can discover more in the link below.
        </p>
        <a
          href="https://nusfintechsociety.notion.site/NUS-Fintech-Society-Recruitment-AY23-24-5cb9bb6aba0941ab849fc6c89b6a1f4b"
          className="mx-auto mt-16 flex h-16 w-40 items-center justify-center rounded-lg bg-secondary text-xl font-bold text-white lg:h-20 lg:w-56 lg:text-3xl "
          target="_blank"
          rel="noreferrer"
        >
          Apply Now
        </a>
      </div>
    </MaxWidth>
  );
};

export default WhoShouldJoin;
