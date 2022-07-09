import React, { useState } from "react";
import { layout } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MaxWidth from "@components/layout/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import DropDown from "@components/layout/DropDown";

const DEPARTMENTS_ITEMS = [
  ["Machine Learning", "/departments/machinelearning"],
  ["Blockchain", "/departments/blockchain"],
  ["Software Development", "/departments/software"],
  ["Operations (Internal)", "/departments/operationsinternal"],
  ["Operations (External)", "/departments/operationsexternal"],
]

const ABOUT_US_ITEMS = [
  ["About Us", "/about/aboutus"],
  ["The EXCO", "/about/exco"]
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 h-16 w-[100vw] bg-primary">
      <MaxWidth>
        <div className="max-w-main flex justify-between mx-auto text-white">
          <div className="font-bold cursor-pointer flex items-center mt-2">
            {!isOpen && (
              <Link href={"/"}>
                <Image
                  src="/static/images/fintechsoc-logo.png"
                  alt="NUS FinTech Society Logo"
                  width="130"
                  height="56"
                  layout="fixed"
                />
              </Link>
            )}
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-5 top-5 cursor-pointer lg:hidden"
          >
            {isOpen ? <CloseIcon w={10} h={6}/> : <HamburgerIcon w={10} h={7}/>}
          </div>

          <ul
            className={`mt-5 bg-primary lg:flex lg:items-center lg:pb-0 absolute lg:static 
                        lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all 
                        ease-in ${ isOpen ? "top-17 " : "top-[-490px]"}`}
          >
            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <Link
                href={"/"}
                className="text-white rounded-md px-3 py-1"
              >
                <a>Home</a>
              </Link>
            </li>

            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <DropDown title={"About Us"} items={ABOUT_US_ITEMS} />
            </li>

            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <DropDown title={"Departments"} items={DEPARTMENTS_ITEMS}/>
            </li>

            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <Link
                href={"/events"}
                className="text-white rounded-md px-3 py-1"
              >
                <a>Events</a>
              </Link>
            </li>

            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <Link
                href={"/recruitment"}
                className="text-white rounded-md px-3 py-1"
              >
                <a>Recruiment</a>
              </Link>
            </li> 

            <li className="hover:text-gray-400 md:ml-8 md:my-0 my-7 md:py-3 lg:py-1">
              <Link
                href={"/contact"}
                className="text-white rounded-md px-3 py-1"
              >
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </MaxWidth>
    </div>
  );
};

export default NavBar;
