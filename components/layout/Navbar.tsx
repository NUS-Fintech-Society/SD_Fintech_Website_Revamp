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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative z-10 w-[100vw] text-sm">
      <div className="flex h-[105px] bg-white text-black">
        <div className="relative ml-10 flex w-[100px] cursor-pointer items-center font-bold">
          <Link href="/">
            <div className="relative">
              <Image
                // className="relative z-10 rounded-full"
                src="/images/black-fintech-logo.jpg"
                alt="NUS FinTech Society Logo"
                width="100px"
                height="100px"
                layout="fixed"
              />
              {/* <div className="absolute -inset-1 h-[80px] w-[80px] rounded-full bg-gradient-to-br from-[#f3ecdb] via-[#f3ecdb] to-[#DDEEFE] blur-xl" /> */}
            </div>
          </Link>
        </div>

        <div className="mr-24 mt-6 h-[55px] lg:ml-auto">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-[24px] top-[37px] z-30 mt-3 -translate-y-1/2 cursor-pointer sm:right-[48px] lg:hidden"
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
            <div
              className={`flex flex-wrap lg:divide-x ${
                isOpen ? 'rounded-xl' : 'rounded-full py-3'
              } bg-[#DDEEFE] text-[#002750]`}
            >
              <li
                className={` my-3 hover:text-gray-400 md:my-0 ${
                  isOpen ? 'px-4' : 'px-7'
                } py-1`}
              >
                <Link href="/" className="rounded-md px-3 py-1 text-black ">
                  <a onClick={handleCloseNav}>HOME</a>
                </Link>
              </li>

              <li className="my-3 px-4 py-1 hover:text-gray-400 md:my-0">
                <Link
                  href="/about"
                  className="rounded-md px-3 py-1 text-white "
                >
                  <a onClick={handleCloseNav}>ABOUT US</a>
                </Link>
              </li>

              <li className="my-3  ml-4 md:my-0 md:px-4 md:py-1 lg:ml-5 lg:py-1">
                <div className="lg:hidden hover:lg:visible">
                  <div className="rounded-md">DEPARTMENTS</div>
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
                    title="DEPARTMENTS"
                    items={DEPARTMENTS_ITEMS}
                  />
                </div>
              </li>

              <li className="my-3 ml-4 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ">
                <Link
                  href="/events"
                  className="rounded-md px-3 py-1 text-black"
                >
                  <a onClick={handleCloseNav}>EVENTS</a>
                </Link>
              </li>

              <li className="my-3  ml-4 md:my-0 md:px-4 md:py-1 lg:ml-5 lg:py-1">
                <div className="lg:hidden">
                  <div className="rounded-md ">RECRUITMENT</div>
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
                    title="RECRUITMENT"
                    items={RECRUITMENT_ITEMS}
                  />
                </div>
              </li>

              <li className="my-3 ml-4 hover:text-gray-400 md:my-0 md:px-4 md:py-1 ">
                <Link
                  href="/sponsors"
                  className="rounded-md px-3 py-1 text-black"
                >
                  <a onClick={handleCloseNav}>SPONSORS</a>
                </Link>
              </li>

              <li className="my-3 ml-4 hover:text-gray-400 md:my-0 md:px-4 md:py-1">
                <Link href="/blogs" className="rounded-md px-3 py-1 text-black">
                  <a onClick={handleCloseNav}>BLOGS</a>
                </Link>
              </li>

              <li className="my-3 ml-4 hover:text-gray-400 md:my-0 md:px-4 md:py-1 lg:mr-5">
                <Link
                  href="/contact-us"
                  className="rounded-md px-3 py-1 text-black"
                >
                  <a onClick={handleCloseNav}>CONTACT US</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
