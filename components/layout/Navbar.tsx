import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from '@components/layout/DropDown';

const DEPARTMENTS_ITEMS = [
  ['Machine Learning', '/departments/machinelearning'],
  ['Blockchain', '/departments/blockchain'],
  ['Software Development', '/departments/software'],
  ['Operations (Internal)', '/departments/operationsinternal'],
  ['Operations (External)', '/departments/operationsexternal'],
];

const ABOUT_US_ITEMS = [
  ['About Us', '/about'],
  ['The EXCO', '/exco'],
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10  w-[100vw] bg-primary">
      <MaxWidth>
        <div className="flex justify-between py-3 text-white">
          <div className="mt-2 flex cursor-pointer items-center font-bold">
            {!isOpen && (
              <Link href={'/'}>
                <Image
                  src="/images/fintechsoc-logo.png"
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
            className="absolute right-5 top-8 cursor-pointer lg:hidden"
          >
            {isOpen ? (
              <CloseIcon w={10} h={6} />
            ) : (
              <HamburgerIcon w={10} h={7} />
            )}
          </div>

          <ul
            className={`absolute left-0 z-[-1] mt-5 w-full bg-primary pb-5 pl-9 transition-all ease-in 
                        lg:static lg:z-auto lg:mt-0 lg:flex lg:w-auto lg:items-center lg:pb-0 
                        lg:pl-0 ${isOpen ? 'top-17 ' : 'top-[-490px]'}`}
          >
            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link href={'/'} className="rounded-md px-3 py-1 text-white">
                <a>Home</a>
              </Link>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <DropDown title={'About Us'} items={ABOUT_US_ITEMS} />
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <DropDown title={'Departments'} items={DEPARTMENTS_ITEMS} />
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/events'}
                className="rounded-md px-3 py-1 text-white"
              >
                <a>Events</a>
              </Link>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/recruitment'}
                className="rounded-md px-3 py-1 text-white"
              >
                <a>Recruiment</a>
              </Link>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/contact'}
                className="rounded-md px-3 py-1 text-white"
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
