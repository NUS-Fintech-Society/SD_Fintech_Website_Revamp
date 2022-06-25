import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-[100vw] h-16 py-5 bg-primary">
      <div className="max-w-main flex justify-end mx-auto px-4">
        <div className="flex gap-3 text-white">
          <Link href={"/"}>
            <a>About</a>
          </Link>
          <Link href={"/recruitment"}>
            <a>Recruitment</a>
          </Link>
          <Link href={"/example"}>
            <a>Example</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
