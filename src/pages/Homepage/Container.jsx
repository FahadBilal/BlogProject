import React from "react";
import Card from "../../components/Card";

function Container() {
  return (
    <div className="sm:px-6 mb-20 ">
      <h2 className="font-extrabold text-black mb-4">Latest Post</h2>
      <div className="grid  gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
        <Card />
        <Card />
        <Card />
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
          View All Post
        </button>
      </div>
    </div>
  );
}

export default Container;
