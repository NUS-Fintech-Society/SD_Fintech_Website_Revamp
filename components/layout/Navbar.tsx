/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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
    <nav className="fixed top-0 z-10 w-[100vw]">
        <div className = "flex text-white">
          <div className="ml-20 flex cursor-pointer font-bold">
            <Link href="/">
              <Image
                src="/images/fintechsoc-logo.png"
                alt="NUS FinTech Society Logo"
                width="170px"
                height="90px"
                layout="fixed"
              />
            </Link>
          </div>

          <div className='h-[55px] text-l mt-6 mr-24 lg:ml-auto'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="absolute right-[24px] top-[37px] z-30 -translate-y-1/2 cursor-pointer sm:right-[48px] lg:hidden"
              >
                {isOpen ? (
                  <CloseIcon width={10} height={6} />
                ) : (
                  <HamburgerIcon width={10} height={7} />
                )}
            </div>


            <ul
              className={`fixed z-20 transition-all duration-150 ease-in lg:pt-0
                      ${isOpen ? 'top-0' : 'top-[-900px] '}
                          lg:static lg:z-auto lg:mt-0 lg:flex lg:w-auto lg:pb-0 
                          lg:pl-0`}
            >

              <div className= "flex flex-wrap lg:divide-x bg-[#002750BF] lg:bg-transparent">
                <li className=" my-7 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ml-4 lg:mr-4">
                  <Link href="/" className="rounded-md px-3 py-1 text-white ">
                    <a onClick={handleCloseNav}>Home</a>
                  </Link>
                </li>
                

                <li className="my-7 md:my-0 md:px-4 md:py-1 px-8">
                  <div className="lg:hidden">
                    <div className="rounded-md">About</div>
                    <ul>
                      {ABOUT_US_ITEMS.map((item) => (
                        <li key={item[1]} className="my-4 ml-3 hover:text-gray-400">
                          <Link href={item[1]}>
                            <a
                              onClick={handleCloseNav}
                              className=" h-full w-full p-2 hover:text-gray-400"
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
                      title="About"
                      items={ABOUT_US_ITEMS}
                    />
                  </div>
                </li>

                <li className="my-7  md:my-0 md:py-1 md:px-4 lg:py-1 ml-4 lg:ml-5">
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
                      title="Departments"
                      items={DEPARTMENTS_ITEMS}
                    />
                  </div>
                </li>

                <li className="my-7 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ml-4 ">
                  <Link href="/events" className="rounded-md px-3 py-1 text-white">
                    <a onClick={handleCloseNav}>Events</a>
                  </Link>
                </li>

                <li className="my-7 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ml-4  px-4">
                  <Link
                    href="/recruitment"
                    className="rounded-md px-3 py-1 text-white"
                  >
                    <a onClick={handleCloseNav}>Recruitment</a>
                  </Link>
                </li>

                <li className="my-7 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ml-4 lg:mr-5">
                  <Link
                    href="/contact-us"
                    className="rounded-md px-3 py-1 text-white"
                  >
                    <a onClick={handleCloseNav}>Contact Us</a>
                  </Link>
                </li>
              </div>        
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
