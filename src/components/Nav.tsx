import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
    <div className="font-main shadow-sm ">
      {open && <MobileNav handleOpen={handleOpen} />}
      <div className="px-4 max-w-7xl m-auto md:px-7  xl:px-2">
        <div className="py-6 flex items-center justify-between">
          <div className="">
            <h1 className="font-sora text-[24px] font-semibold ">L.O.C.C</h1>
            <p className="font-sora text-xs font-semibold">
              Light Olives Child Center.
            </p>
          </div>
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
            <Link href="career" className=" text-black text-lg">
              <p
                className={`${
                  path === '/career'
                    ? 'bg-[url(https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Ellipse%201.svg?updatedAt=1725673068993)] p-2'
                    : ''
                } bg-no-repeat bg-bottom`}
              >
                Career
              </p>
            </Link>
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
          <button className="bg-[#E62074] text-white hidden lg:block py-[16px] px-[24px] rounded-lg ">
            Stay in Touch
          </button>
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
