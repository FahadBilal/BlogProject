import React from "react";
import { useId } from "react";

function Textarea(
  {
    label,
    textColor = "text-black",
    bgColor = "bg-gray-light",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block pl-1 mb-1 font-sans text-black dark:text-white"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`px-3 py-2 w-full rounded-lg  border-none outline-none text-black bg-gray-light  dark:text-white dark:bg-white ${textColor} ${bgColor} ${className}`}
        {...props}
        ref={ref}
      ></textarea>
    </div>
  );
}

export default React.forwardRef(Textarea);
