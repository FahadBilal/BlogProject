import React from "react";

function Banner({ children }) {
  return (
    <div className='md:h-[600px] sm:h-[400px] h-[250px] bg-[url("/images/banner.png")] bg-no-repeat bg-cover   w-full md:bg-center bg-right  rounded-xl'>
      {children}
    </div>
  );
}

export default Banner;
