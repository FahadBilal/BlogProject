import React from "react";
import Card from "../../components/Card";

function Container() {
  return (
    <div className="sm:px-6 px-2 mb-20 ">
     <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center place-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button className="border text-[16px] border-gray-light border-opacity-50 text-black dark:text-white text-opacity-50 px-3 py-2 rounded-md">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Container;
