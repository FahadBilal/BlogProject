import React from "react";

function Card() {
  return (
    <div>
      <div className="border border-gray-light rounded-lg px-2 py-2 md:[300px]  w-[300px]">
        <img src="/images/Rectangle 38.png" alt="" className="mb-3" />
        <button className="bg-gray-light bg-opacity-20 text-blue px-2 rounded-md text-[12px] mb-3">
          Technology
        </button>
        <h1 className="text-[20px] text-black dark:text-white font-bold leading-tight mb-3 duration-200">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div>
          <img
            src="/images/Image (7).png"
            alt=""
            className="w-8 inline-block mr-2"
          />
          <span className="mr-4 text-black dark:text-white text-opacity-50 text-[14px]  duration-200 ">
            Jason Francisco
          </span>
          <span className=" text-black dark:text-white text-opacity-50 text-[14px] duration-200 ">
            October 22, 2024
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
