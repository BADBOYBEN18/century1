/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

const MobileNav = ({ handleOpen }: any) => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    handleOpen();
  };

  return (
    <div className="bg-white lg:hidden  text-black items-center h-full fixed  z-[99] py-9 px-4 md:px-[3rem] w-full overflow-y-scroll md:overflow-y-hidden">
      <div className="flex justify-between mb-[4rem]">
        <Link href="/">
          <div className="">
            <h1 className="font-sora text-[24px] font-semibold ">L.O.C.C</h1>
            <p className="font-sora text-xs font-semibold">
              Light Olives Child Center.
            </p>
          </div>
        </Link>
        <button onClick={handleOpen}>
          <IoIosClose className="w-8 h-8" />
        </button>
      </div>

      <div className=" mb-10 text-[14px] font-light cursor-pointer">
        <a onClick={() => navigate('/')}>
          <p>Home</p>
        </a>
        <br />
        <br />
        <a onClick={() => navigate('/location')}>
          <p>Location</p>
        </a>
        <br />
        <br />
        <a onClick={() => navigate('/about')}>
          <p>About us</p>
        </a>
        <br />
        <br />
        <Menu as="div" className="relative inline-block text-left ">
          <div>
            <MenuButton className="inline-flex w-full justify-center items-center text-lg text-black">
              <p className="text-[14px]">Program</p>

              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute  z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/infants')}
                >
                  <p> Infants</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/Toddlers')}
                >
                  <p>Toddlers</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/preschool')}
                >
                  <p> Pre-School & Kindergarten</p>
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <br />
        <br />
        <br />
        <a onClick={() => navigate('/contact')}>
          <p>Contact Us</p>
        </a>
      </div>
      <Link href="/contact">
        <button className="bg-[#E62074] text-white text-[14px]  py-[8px] px-[20px] rounded-lg ">
          Stay in Touch
        </button>
      </Link>
    </div>
  );
};

export default MobileNav;
