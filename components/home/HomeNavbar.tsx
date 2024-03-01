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
  ['Quantitative', '/departments/quant'],
  ['External Relations', '/departments/external'],
  ['Internal Affairs', '/departments/internal'],
];

const RECRUITMENT_ITEMS = [
  ['Technical Wing', '/recruitment/technical-wing'],
  ['Operations Wing', '/recruitment/operations-wing'],
];

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative z-10 w-[100vw]">
      <div className="flex text-white">
        <div className="relative ml-4 mt-3 flex h-[50px] w-[100px] cursor-pointer font-bold sm:ml-20 sm:h-[77px] sm:w-[144px]">
          <Link href="/">
            <Image
              src="/images/fintechsoc-logo.png"
              alt="NUS FinTech Society Logo"
              layout="fill"
            />
          </Link>
        </div>

        <div className="mr-24 mt-6 h-[55px] lg:ml-auto">
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
            <div className="flex flex-wrap bg-[#002750BF] lg:divide-x lg:bg-transparent">
              <li className="my-7 px-4 py-1 hover:text-gray-400 md:my-0">
                <Link href="/" className="rounded-md px-3 py-1 text-white ">
                  <a onClick={handleCloseNav}>Home</a>
                </Link>
              </li>

              <li className="my-7 px-4 py-1 hover:text-gray-400 md:my-0">
                <Link
                  href="/about"
                  className="rounded-md px-3 py-1 text-white "
                >
                  <a onClick={handleCloseNav}>About Us</a>
                </Link>
              </li>

              <li className="my-7 px-4 py-1 md:my-0">
                <div className="lg:hidden">
                  <div className="rounded-md">Departments</div>
                  <ul>
                    {DEPARTMENTS_ITEMS.map((item) => (
                      <li
                        key={item[1]}
                        className="my-4 ml-3 hover:text-gray-400"
                      >
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
                <div className="hidden lg:block">
                  <DropDown
                    handleCloseNav={handleCloseNav}
                    title="Departments"
                    items={DEPARTMENTS_ITEMS}
                  />
                </div>
              </li>

              <li className="my-7 px-4 py-1 hover:text-gray-400 md:my-0">
                <Link
                  href="/events"
                  className="rounded-md px-3 py-1 text-white"
                >
                  <a onClick={handleCloseNav}>Events</a>
                </Link>
              </li>

              <li className="my-7 px-4 py-1 md:my-0">
                <div className="lg:hidden">
                  <div className="rounded-md ">Recruitment</div>
                  <ul>
                    {RECRUITMENT_ITEMS.map((item) => (
                      <li
                        key={item[1]}
                        className="my-4 ml-3 hover:text-gray-400"
                      >
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
                    title="Recruitment"
                    items={RECRUITMENT_ITEMS}
                  />
                </div>
              </li>

              {/*
              <li className="my-7 px-4 py-1 hover:text-gray-400 md:my-0">
                <Link
                  href="/recruitment"
                  className="rounded-md px-3 py-1 text-white"
                >
                  <a onClick={handleCloseNav}>Recruitment</a>
                </Link>
              </li>
*/}

              <li className="my-7 px-4 py-1 hover:text-gray-400 md:my-0">
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

export default HomeNavbar;
