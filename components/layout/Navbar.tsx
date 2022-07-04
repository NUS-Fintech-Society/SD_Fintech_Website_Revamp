import { layout } from "@chakra-ui/react";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="z-10 sticky top-0 w-[100vw] h-16 bg-primary">
      <MaxWidth>
        <div className="max-w-main flex justify-end mx-auto px-4 py-4">
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
      </MaxWidth>
    </div>
  );
};

export default NavBar;
