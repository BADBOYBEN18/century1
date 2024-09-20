import React from 'react';

export const Footer = ({ year }: { year?: number }) => {
  return (
    <div className="bg-[#3B465C]">
      <footer className="max-w-7xl m-auto px-4 pt-16 pb-10 lg:pb-24 lg:px-7 font-main  text-white">
        <div className="flex flex-col md:flex-row  justify-between space-y-[5rem] md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-[5rem] md:space-y-0 gap-x-16">
            <div className="space-y-3 footer-p">
              <h1>Company</h1>

              <p>About Us</p>
              <p>Careers</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>

            <div className="flex flex-row-reverse md:flex-row  justify-end gap-x-10 md:gap-x-16">
              <div className="space-y-3 footer-p">
                <h1>Connect</h1>
                <p>Locations</p>
                <p>Contact Us</p>
              </div>
              <div className="space-y-3 footer-p">
                <h1>Programs</h1>
                <p>Infants & Toddlers</p>
                <p>Pre-School & Kiindergarten</p>
                <p>School Aged Kids</p>
              </div>
            </div>
          </div>

          <div>
            <div className=" mb-4 ">
              <h1 className="font-sora text-[24px] font-semibold  ">L.O.C.C</h1>
              <p className="font-sora text-xs font-semibold">
                Light Olives Child Center.
              </p>
            </div>

            <p className="text-[12px] md:text-sm font-medium mb-4">
              <span className="text-[#E62074]">©</span> {year} Light Olives
              Child Center. <br /> All Rights Reserved.
            </p>

            <button className="bg-[#E62074] text-white text-[10px] md:text-[16px]  py-[8px] px-[24px] rounded-lg ">
              Enquire Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
