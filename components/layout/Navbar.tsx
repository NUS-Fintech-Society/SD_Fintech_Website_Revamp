import React, { useState } from "react";
import { layout } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import DropDown from "@components/layout/DropDown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 h-16 w-[100vw] bg-primary">
      <MaxWidth>
        <div className="max-w-main flex justify-between mx-auto text-white">
          <div className="font-bold cursor-pointer flex items-center mt-2 bg-white">
            {!isOpen && (
              <Link href={"/"}>
                <Image
                  src={"https://fintechsociety.comp.nus.edu.sg/images/SocietyLogo.png"}
                  width={100}
                  height={20}
                  alt={"Fintech Society Logo"}
                />
              </Link>
            )}
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 top-3 cursor-pointer md:hidden"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </div>

          <ul
            className={`mt-5 bg-primary md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in ${
              isOpen ? "top-17 " : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Home</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <DropDown />
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/content"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Content</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/events"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Events</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/recruitment"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Recruitment</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/faq"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>FAQs</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/contact"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Contact Us</a>
              </Link>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <Link
                href={"/login"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </MaxWidth>
    </div>
  );
};

export default NavBar;
