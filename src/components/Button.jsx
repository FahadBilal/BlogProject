import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-skyBlue",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 py-2 font-semibold rounded-lg ${bgColor} ${textColor} ${className} dark:text-white dark:bg-black dark:border dark:border-white`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
