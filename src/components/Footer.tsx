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
                <a href="#" className="hover:text-[#4dbf88] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4dbf88] transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4dbf88] transition-all">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4dbf88] transition-all">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#4dbf88]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MdLocationOn className="text-[#4dbf88]" />
                <span>123 Energy Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-[#4dbf88]" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-[#4dbf88]" />
                <span>info@century1.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 lg:ml-[3rem]">
            <h3 className="text-lg font-semibold text-[#4dbf88]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#4dbf88] transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
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
                Innovating Energy Solutions for a Sustainable Future.
              </p>
            </div>

            <p className="text-sm font-medium mb-4">
              <span className="text-[#4dbf88]">©</span> {year} Century1
              Limited.
              <br /> All Rights Reserved.
            </p>

            <button className="bg-[#4dbf88] text-white text-sm md:text-base py-2 px-6 rounded-lg hover:bg-[#3aa371] transition-all duration-300">
              Enquire Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
