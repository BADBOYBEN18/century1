/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

const MobileNav = ({ handleOpen }: any) => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    handleOpen();
  };

  return (
    <div className="bg-white lg:hidden  text-black items-center h-full fixed  z-[99] py-9 px-4 md:px-[3rem] w-full">
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

      <div className=" mb-10 text-[14px] font-light">
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
