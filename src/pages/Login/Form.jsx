import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="bg-white dark:bg-black dark:border dark:border-white  sm:w-[500px] shadow-xl shadow-black px-6 py-6 rounded-xl">
      <h1 className="text-black dark:text-white sm:text-[36px] text-[24px] font-bold font-sans text-center">
        Login{" "}
      </h1>
      <p className="mt-2 text-black dark:text-white text-opacity-90 sm:text-[20px] text-[18px] font-sans font-semibold text-center">
        Please enter your Login and your Password
      </p>
      <form action="" className="flex flex-col gap-4 mt-8">
        <Input label="Username" placeholder="Enter Username" className="py-3" />
        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          className="py-3"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          className="py-3"
        />

        <div className="mt-6 flex justify-center items-center">
          <Button
            children={"Login"}
            className="w-[150px] py-3 rounded-xl font-bold text-[20px]"
          />
        </div>
        <p className="text-black dark:text-white text-center font-semibold font-sans">
          Not a member yet?{" "}
          <Link to={"/signUp"} className={`cursor-pointer underline`}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Form;
