/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

interface MobileNavProps {
  handleOpen: () => void;
  isOpen: boolean; // Add isOpen prop to control animation
}

const MobileNav = ({ handleOpen, isOpen }: MobileNavProps) => {
  const path = usePathname();
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    handleOpen();
  };

  return (
    <div
      className={`bg-white lg:hidden shadow-md text-black h-full fixed inset-0 z-[99] py-5 px-4 md:px-[3rem] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button and Logo */}
      <div className="flex justify-between mb-[2rem]">
        <Link href="/">
          <div className="">
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/century%201/CENTURY1LOGO.svg?updatedAt=1742072488748"
              width={110}
              height={110}
              alt="Century1 Limited"
            />
          </div>
        </Link>
        <button onClick={handleOpen}>
          <IoIosClose className="w-8 h-8" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="mb-10 text-[14px] font-light cursor-pointer">
        <a
          onClick={() => navigate('/')}
          className={`${path === '/' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Home</p>
        </a>
        <br />
        <br />
        <a
          onClick={() => navigate('/about')}
          className={`${path === '/about' ? 'text-[#35a76c]' : ''}`}
        >
          <p>About us</p>
        </a>
        <br />
        <br />

        <a
          onClick={() => navigate('/services')}
          className={`${path === '/services' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Services</p>
        </a>
        <br />
        <br />
        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center items-center text-lg text-black">
              <p
                className={`text-[14px] ${
                  path === '/infants' ||
                  path === '/Toddlers' ||
                  path === '/preschool'
                    ? 'text-[#35a76c]'
                    : ''
                }`}
              >
                Services
              </p>
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/')}
                >
                  <p>CNG solutions</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/')}
                >
                  <p>Pipeline</p>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  onClick={() => navigate('/')}
                >
                  <p>Oil and gas</p>
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu> */}
        <a
          onClick={() => navigate('/contact')}
          className={`${path === '/contact' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Contact Us</p>
        </a>
      </div>

      {/* Stay in Touch Button */}
      <Link href="/contact">
        <button className="bg-[#35a76c] text-white text-[14px] py-[8px] px-[20px] rounded-lg">
          Gey in Touch
        </button>
      </Link>
    </div>
  );
};

export default MobileNav;
