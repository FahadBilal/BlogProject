import React from "react";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-[#F6F6F7] dark:bg-[#0c0c0c]  sm:px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 sm:pl-0 pl-4">
        {/* Column 1: About */}
        <div>
          <h4 className="text-black dark:text-white text-[18px] font-semibold mb-3">
            About
          </h4>
          <p className="text-[16px] text-black dark:text-white text-opacity-50 leading-tight mb-5">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna
            aliqua. Ut enim ad <br /> minim veniam
          </p>
          <p className="text-[16px] text-black dark:text-white font-semibold">
            Email:{" "}
            <span className="font-normal opacity-90">info@jstemplate.net</span>
          </p>
          <p className="text-[16px] text-black dark:text-white font-semibold">
            Phone:{" "}
            <span className="font-normal opacity-90">880 123 456 789</span>
          </p>
        </div>

        {/* Column 2: Quick Links & Category */}
        <div className="flex items-start gap-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-black dark:text-white text-[18px] font-semibold mb-4">
              Quick Links
            </h4>
            <ul>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Home
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                About
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Blog
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Archived
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Author
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Contact
              </li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h4 className="text-black dark:text-white text-[18px] font-semibold mb-4">
              Category
            </h4>
            <ul>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Lifestyle
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Technology
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Travel
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Business
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Economy
              </li>
              <li className="text-black dark:text-white text-[16px] font-normal opacity-90 mb-2">
                Sports
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="bg-white dark:bg-[#0c0c0c] dark:border dark:border-white sm:px-6 px-2 py-4 rounded-xl flex flex-col items-center sm:w-[320px] w-[290px] text-center">
          <h3 className="text-black dark:text-white text-[20px] font-semibold mb-2">
            Weekly Newsletter
          </h3>
          <p className="text-[16px] text-black dark:text-white font-normal opacity-50 mb-8">
            Get blog articles and offers via email
          </p>
          <div className="relative w-full mb-3">
            <input
              type="email"
              placeholder="Your email"
              className="pl-4 pr-10 py-2 w-full text-[16px] border border-black dark:text-white border-opacity-50 rounded-md bg-transparent focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CiMail className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <button className="px-2 py-2 text-[16px] w-full rounded-md text-white bg-blue text-opacity-70 hover:text-opacity-100">
            Subscribe
          </button>
        </div>
      </div>

      <hr />

      <div className="flex md:flex-row flex-col md:justify-between md:items-end gap-5 sm:pl-0 pl-2">
        <div className="flex items-center sm:gap-3 gap-1 flex-wrap  mt-10">
          <img src={`/images/Logo.png`} alt="" className="w-10" />
          <div>
            <h2 className="text-[20px]  font-sans text-black dark:text-white">
              Meta<span className="font-bold">Blog</span>
            </h2>
            <p className="text-[16px] text-black dark:text-white text-opacity-50">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>
        <ul className="flex items-center sm:gap-10 gap-2">
          <li className="text-black dark:text-white text-[16px] font-normal opacity-90 ">
            Terms of Use
          </li>
          <li className="text-black dark:text-white text-[16px] font-normal opacity-90 ">
            Privacy Policy
          </li>
          <li className="text-black dark:text-white text-[16px] font-normal opacity-90 ">
            Cookie Policy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
