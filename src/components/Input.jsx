import React from "react";
import { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="w-full">
        {label && (
          <label
            className="pl-1 mb-1 inline-block  font-sans text-black dark:text-white "
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className={`px-3 py-2 outline-none border-none rounded-lg w-full text-black bg-gray-light  dark:text-white dark:bg-white duration-200 ${className}`}
          {...props}
        />
      </div>
    </>
  );
});

export default Input;

// import React, {useId} from 'react'

// const Input = React.forwardRef( function Input({
//     label,
//     type = "text",
//     className = "",
//     ...props
// }, ref){
//     const id = useId()
//     return (
//         <div className='w-full'>
//             {label && <label
//             className='inline-block mb-1 pl-1 font-semibold'
//             htmlFor={id}>
//                 {label}
//             </label>
//             }
//             <input
//             type={type}
//             className={`px-3 py-2 rounded-lg text-black outline-none  duration-200 border-none bg-gray-light w-full ${className}`}
//             ref={ref}
//             {...props}
//             id={id}
//             />

//         </div>
//     )
// })

// export default Input
