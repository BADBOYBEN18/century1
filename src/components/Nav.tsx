/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { IoIosHome } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { MdGroups2 } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import MobileNav from './MobileNav';

export const Nav = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* <div className="max-w-7xl m-auto flex justify-between items-center px-4 md:px-7 xl:px-2">
        <div className="flex gap-4">
          <div>
            <p>
              contact us: <a href="#">08038080480490</a>
            </p>
          </div>
          <div>
            <p>
              email us: <a href="#">johndoe@gmail.com</a>
            </p>
          </div>
        </div>

        <div>

        </div>
      </div> */}

      <div className="font-main shadow-sm bg-white lg:bg-white/10 lg:backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 py-1 md:py-2 lg:py-4">
        {open && <MobileNav handleOpen={handleOpen} />}
        <div className="px-4  max-w-7xl m-auto md:px-7  xl:px-5 ">
          <div className="py-2 flex items-center justify-between">
            <Link href="/">
              <div className="prevent-select">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/century%201/CENTURY1LOGO.svg?updatedAt=1742072488748"
                  width={110}
                  height={110}
                  // className="w-20 h-20"
                  alt=""
                />
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 ">
              <Link
                href="/"
                className="flex items-center gap-2 text-black text-sm hover:text-[#d23e3e] transition-all"
              >
                <IoIosHome
                  className={`text-md ${path === '/' ? 'text-[#d23e3e]' : ''}`}
                />
                <p
                  className={`${
                    path === '/' ? '  text-[#d23e3e]' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Home
                </p>
              </Link>

              <Link
                href="/location"
                className="flex items-center gap-2 text-black text-sm hover:text-[#d23e3e] transition-all"
              >
                <FaLocationDot
                  className={`${path === '/location' ? 'text-[#d23e3e]' : ''}`}
                />
                <p
                  className={`${
                    path === '/location' ? '  text-[#d23e3e]' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Location
                </p>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-black text-sm hover:text-[#d23e3e] transition-all"
              >
                <MdGroups2
                  className={` text-lg ${path === '/about' ? 'text-[#d23e3e]' : ''} `}
                />
                <p
                  className={`${
                    path === '/about' ? '  text-[#d23e3e]' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  About Us
                </p>
              </Link>

              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <MenuButton className="inline-flex w-full justify-center items-center text-sm text-black hover:text-[#d23e3e] transition-all">
                    <FaCog
                      className={`${path === '' ? 'text-[#d23e3e]' : ''} text-md`}
                    />
                    <p
                      className={`ml-1 ${
                        path === '/infants' ||
                        path === '/Toddlers' ||
                        path === '/preschool'
                          ? 'text-[#FDE812]'
                          : ''
                      }`}
                    >
                      Services
                    </p>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className=" h-5 w-5 text-black hover:text-[#d23e3e] transition-all"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 top-[2rem] z-10 mt-2 w-[60rem] origin-center rounded-md bg-white 
                  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none \
                  data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 
                  data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
                >
                  <div className="py-1 flex justify-between">
                    <div>
                      <MenuItem>
                        <h2 className="block px-4 py-2 text-md text-gray-700">
                          <span className="">CNG services</span>
                        </h2>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/infants"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Infants
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/Toddlers"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Toddlers
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/preschool"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Pre-School & Kindergarten
                        </Link>
                      </MenuItem>
                    </div>

                    <div>
                      <MenuItem>
                        <Link
                          href="/infants"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Infants
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/Toddlers"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Toddlers
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/preschool"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Pre-School & Kindergarten
                        </Link>
                      </MenuItem>
                    </div>

                    <div>
                      <MenuItem>
                        <Link
                          href="/infants"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Infants
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/Toddlers"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Toddlers
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/preschool"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                          Pre-School & Kindergarten
                        </Link>
                      </MenuItem>
                    </div>
                  </div>
                </MenuItems>
              </Menu>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-black text-sm hover:text-[#d23e3e] transition-all"
              >
                <IoIosMail
                  className={`text-lg ${path === '/contact' ? 'text-[#d23e3e]' : ''}`}
                />
                <p
                  className={`${
                    path === '/contact' ? '  text-[#d23e3e]' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Contact Us
                </p>
              </Link>
            </nav>
            {/* <Link href="/contact">
              <button className="bg-[#E62074] text-white hidden lg:block py-[16px] px-[24px] rounded-lg ">
                Stay in Touch
              </button>
            </Link> */}
            {/* <button className="lg:hidden border border-gray-800 rounded-full p-3">
            <RxHamburgerMenu />
          </button> */}

            {/* mobile nav */}
            <div className=" lg:hidden cursor-pointer" onClick={handleOpen}>
              {open ? (
                <IoIosClose className="hidden" />
              ) : (
                <RxHamburgerMenu className="border border-gray-800 rounded-full w-8 h-8 p-2" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
