import React, { useState } from "react";
import { layout } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./Dropdown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 w-[100vw] h-16 bg-primary">
      <MaxWidth>
        <div className="max-w-main flex justify-between mx-auto text-white">
          <div className="font-bold cursor-pointer flex items-center mt-2 bg-white">
            {!isOpen && (
              <a href={"/"}>
                <Image
                  src={"https://fintechsociety.comp.nus.edu.sg/images/SocietyLogo.png"}
                  width={100}
                  height={20}
                  alt={"Fintech Society Logo"}
                />
              </a>
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
              <a
                href={"/"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Home
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <DropDown />
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/content"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Content
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/events"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Events
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/recruitment"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Recruitment
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/faq"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                FAQs
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/contact"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Contact Us
              </a>
            </li>

            <li className="md:ml-8 md:my-0 my-7">
              <a
                href={"/login"}
                className="hover:text-gray-400 text-white rounded-md px-3 py-1"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </MaxWidth>
    </div>
  );
};

export default NavBar;
