import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import Link from 'next/link';
import DropDown from '@components/layout/DropDown';

const DEPARTMENTS_ITEMS = [
  ['Machine Learning', '/departments/machine-learning'],
  ['Blockchain', '/departments/blockchain'],
  ['Software Development', '/departments/software'],
  ['Operations', '/departments/operations'],
];

const ABOUT_US_ITEMS = [
  ['About Us', '/about'],
  ['The EXCO', '/about/exco'],
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10  w-[100vw] bg-primary">
      <MaxWidth>
        <div className="flex items-center justify-between py-1 text-white">
          <div className="mt-2 flex cursor-pointer items-center font-bold">
            {!isOpen && (
              <Link href={'/'}>
                <Image
                  src="/images/fintechsoc-logo.png"
                  alt="NUS FinTech Society Logo"
                  width="130"
                  height="58"
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
            className={`fixed left-0 z-[-1]  w-full bg-primary pt-10 pb-5 pl-9 transition-all duration-100 ease-in lg:pt-0
                    ${isOpen ? 'top-0 ' : 'top-[-700px]'}
                        lg:static lg:z-auto lg:mt-0 lg:flex lg:w-auto lg:items-center lg:pb-0 
                        lg:pl-0`}
          >
            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link href={'/'} className="rounded-md px-3 py-1 text-white">
                <a onClick={handleCloseNav}>Home</a>
              </Link>
            </li>

            <li className="my-7  md:my-0 md:ml-8 md:py-3 lg:py-1">
              <div className="lg:hidden">
                <div className="rounded-md ">About</div>
                <ul>
                  {ABOUT_US_ITEMS.map((item) => (
                    <li key={item[1]} className="my-4 ml-3 hover:text-gray-400">
                      <Link href={item[1]}>
                        <a
                          onClick={handleCloseNav}
                          className=" h-full w-full p-2"
                        >
                          {item[0]}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" hidden lg:block">
                <DropDown
                  handleCloseNav={handleCloseNav}
                  title={'About'}
                  items={ABOUT_US_ITEMS}
                />
              </div>
            </li>

            <li className="my-7  md:my-0 md:ml-8 md:py-3 lg:py-1">
              <div className="lg:hidden">
                <div className="rounded-md ">Departments</div>
                <ul>
                  {DEPARTMENTS_ITEMS.map((item) => (
                    <li key={item[1]} className="my-4 ml-3 hover:text-gray-400">
                      <Link href={item[1]}>
                        <a
                          onClick={handleCloseNav}
                          className=" h-full w-full p-2"
                        >
                          {item[0]}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" hidden lg:block">
                <DropDown
                  handleCloseNav={handleCloseNav}
                  title={'Departments'}
                  items={DEPARTMENTS_ITEMS}
                />
              </div>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/events'}
                className="rounded-md px-3 py-1 text-white"
              >
                <a onClick={handleCloseNav}>Events</a>
              </Link>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/recruitment'}
                className="rounded-md px-3 py-1 text-white"
              >
                <a onClick={handleCloseNav}>Recruiment</a>
              </Link>
            </li>

            <li className="my-7 hover:text-gray-400 md:my-0 md:ml-8 md:py-3 lg:py-1">
              <Link
                href={'/contact-us'}
                className="rounded-md px-3 py-1 text-white"
              >
                <a onClick={handleCloseNav}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </MaxWidth>
    </nav>
  );
};

export default NavBar;
