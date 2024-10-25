import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="md:px-6 pt-6 md:flex md:justify-between md:items-center relative md:bg-white bg-skyBlue dark:bg-black md:pb-0 pb-2">
        <div className="flex items-center  gap-2 md:mb-0 mb-4 md:pl-0 pl-4">
          <img src={`/images/Logo.png`} alt="" className="w-10" />
          <h2 className="text-[28px] leading-3 font-sans md:text-black text-white dark:text-white">
            Meta<span className="font-bold">Blog</span>
          </h2>
        </div>
        <div>
          <ul
            className={`md:flex md:gap-7 md:items-center md:static w-full  absolute  duration-700 transition-all ease-in-out 
                        ${
                          isOpen
                            ? "top-32 w-full bg-skyBlue dark:bg-black z-40 flex flex-col gap-3 rounded-b-xl "
                            : "top-[-498px]"
                        }
                        `}
          >
            <li className="mb-3 md:mb-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-black dark:text-white text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${
                    isActive ? "opacity-100 font-bold " : "opacity-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-3 md:mb-0">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-black dark:text-white text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${
                    isActive ? "opacity-100 font-bold " : "opacity-50"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="mb-3 md:mb-0">
              <NavLink
                to="/single-post"
                className={({ isActive }) =>
                  `text-black dark:text-white  text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${
                    isActive ? "opacity-100 font-bold " : "opacity-50"
                  }`
                }
              >
                Single Post
              </NavLink>
            </li>
            <li className="mb-3 md:mb-0">
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  `text-black dark:text-white  text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${
                    isActive ? "opacity-100 font-bold " : "opacity-50"
                  }`
                }
              >
                Pages
              </NavLink>
            </li>
            <li className="mb-3 md:mb-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-black dark:text-white text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${
                    isActive ? "opacity-100 font-bold " : "opacity-50"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <div className="md:w-60 md:px-6 px-2 w-full">
            <div class="relative ">
              <input
                type="search"
                placeholder="Search..."
                class="pl-4  md:py-1 py-2 w-full rounded-lg md:bg-[#F6F6F7] dark:text-white dark:bg-black dark:border focus:outline-none"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-300 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0a7 7 0 111.48-1.48L21 21z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <ThemeBtn />
        </div>

        <div className="md:hidden absolute top-7 md:right-12  sm:right-8 right-4">
          <button
            onClick={toggleMenu}
            className="text-white dark:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
