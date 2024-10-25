import React from "react";

function Banner() {
  return (
    <div className="mt-16 sm:px-6 px-2 mb-10">
      <div className="bg-[#F6F6F7] dark:bg-black dark:border dark:border-white py-6 rounded-xl flex justify-center items-center">
        <div className="  sm:w-[550px] sm:px-0 px-2 flex justify-center flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="images/Image (7).png" alt="" className="w-12" />
            <div className="leading-tight">
              <p className="text-black dark:text-white font-sans font-semibold text-[16px]">
                Jonathan Doe
              </p>
              <p className="text-dark-gray dark:text-white font-sans  text-[16px]">
                Collaborator & Editor
              </p>
            </div>
          </div>
          <p className="text-center text-[16px] text-[#3B3C4A] dark:text-white ">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
          <div className="flex items-center gap-1">
            <img src="images/a-button.png" alt="" className="w-8" />
            <img src="images/a-button (1).png" alt="" className="w-8" />
            <img src="images/a-button (2).png" alt="" className="w-8" />
            <img src="images/a-button (3).png" alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
