/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export const Footer = ({ year }: { year: number }) => {
  return (
    <div className="bg-[#172026]/95 text-white">
      <footer className="max-w-7xl mx-auto px-4 py-12 lg:py-16 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4dbf88]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#4dbf88] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#4dbf88] transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-[#4dbf88] transition-all"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#4dbf88] transition-all"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4dbf88]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex md:items-center lg:items-start gap-2">
                <MdLocationOn className="text-[#4dbf88]  lg:text-[1.5rem]" />
                <span>15 Olanrewaju Ninolowo street lekki 1, Lagos.</span>
              </li>
              <li className="flex md:items-center lg:items-start gap-2">
                <MdPhone className="text-[#4dbf88] lg:text-[1.5rem]" />
                <span>+234 903 940 9537 , +2349124261004</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-[#4dbf88]" />
                <span>info@century1.one</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 lg:ml-[3rem]">
            <h3 className="text-lg font-semibold text-[#4dbf88]">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="/"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Copyright and Call-to-Action Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <Link href="/">
                <div className="prevent-select text-xl font-semibold mb-2 flex items-center gap-2">
                  <img
                    src="https://ik.imagekit.io/h6pmd5ivo/century%201/CENTURY1LOGO.svg?updatedAt=1742072488748"
                    width={110}
                    height={110}
                    // className="w-20 h-20"
                    alt=""
                  />

                  <h1>Limited</h1>
                </div>
              </Link>
              <p className="text-sm font-medium">
                Energy without limits powering today, tomorrow sustainably.
              </p>
            </div>

            <p className="text-sm font-medium mb-4">
              <span className="text-[#4dbf88]">©</span> {year} Century1
              Limited.
              <br /> All Rights Reserved.
            </p>

            <Link href={'/contact'} className="block mt-4">
              <button className="bg-[#4dbf88] text-white text-sm md:text-base py-2 px-6 rounded-lg hover:bg-[#3aa371] transition-all duration-300">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
