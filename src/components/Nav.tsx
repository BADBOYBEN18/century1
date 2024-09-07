import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import MobileNav from './MobileNav';

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="font-main shadow-sm ">
      {open && <MobileNav handleOpen={handleOpen} />}
      <div className="px-4 max-w-7xl m-auto xl:px-0">
        <div className="py-6 flex items-center justify-between">
          <div className="">
            <h1 className="font-sora text-[24px] font-semibold ">L.O.C.C</h1>
            <p className="font-sora text-xs font-semibold">
              Light Olives Child Center.
            </p>
          </div>
          <nav className="hidden lg:flex items-center gap-6 ">
            <a href="#" className=" text-black text-lg">
              Home
            </a>
            <a href="#" className=" text-black text-lg">
              Location
            </a>
            <a href="#" className=" text-black text-lg">
              About Us
            </a>
            <a href="#" className=" text-black text-lg">
              Career
            </a>
            <a href="#" className=" text-black text-lg">
              Contact Us
            </a>
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
              <IoIosClose />
            ) : (
              <RxHamburgerMenu className="border border-gray-800 rounded-full w-8 h-8 p-2" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
