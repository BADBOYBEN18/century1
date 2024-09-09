import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import MobileNav from './MobileNav';

export const Nav = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="font-main shadow-sm bg-white">
      {open && <MobileNav handleOpen={handleOpen} />}
      <div className="px-4 max-w-7xl m-auto md:px-7  xl:px-2">
        <div className="py-6 flex items-center justify-between">
          <Link href="/">
            <div className="prevent-select">
              <h1 className="font-sora text-[24px] font-semibold ">L.O.C.C</h1>
              <p className="font-sora text-xs font-semibold">
                Light Olives Child Center.
              </p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 ">
            <Link href="/" className=" text-black text-lg">
              <p
                className={`${
                  path === '/'
                    ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                    : ''
                } bg-no-repeat bg-bottom `}
              >
                Home
              </p>
            </Link>
            <Link href="/location" className=" text-black text-lg">
              <p
                className={`${
                  path === '/location'
                    ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                    : ''
                } bg-no-repeat bg-bottom`}
              >
                Location
              </p>
            </Link>
            <Link href="/about" className=" text-black text-lg">
              <p
                className={`${
                  path === '/about'
                    ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                    : ''
                } bg-no-repeat bg-bottom`}
              >
                About Us
              </p>
            </Link>

            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <MenuButton className="inline-flex w-full justify-center items-center text-lg text-black">
                  <p
                    className={`${
                      path === '/infants' || 'preschool'
                        ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                        : ''
                    } bg-no-repeat bg-bottom`}
                  >
                    Program
                  </p>

                  <ChevronDownIcon
                    aria-hidden="true"
                    className=" h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      href="/infants"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Infants & Toddlers
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
              </MenuItems>
            </Menu>

            <Link href="/contact" className=" text-black text-lg">
              <p
                className={`${
                  path === '/contact'
                    ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                    : ''
                } bg-no-repeat bg-bottom`}
              >
                Contact Us
              </p>
            </Link>
          </nav>
          <Link href="/contact">
            <button className="bg-[#E62074] text-white hidden lg:block py-[16px] px-[24px] rounded-lg ">
              Stay in Touch
            </button>
          </Link>
          {/* <button className="lg:hidden border border-gray-800 rounded-full p-3">
            <RxHamburgerMenu />
          </button> */}
          {/* mobile nav */}
          <div className="lg:hidden cursor-pointer" onClick={handleOpen}>
            {open ? (
              <IoIosClose className="hidden" />
            ) : (
              <RxHamburgerMenu className="border border-gray-800 rounded-full w-8 h-8 p-2" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
