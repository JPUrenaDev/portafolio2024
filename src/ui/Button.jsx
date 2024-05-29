import React from "react";

export const Button = ({ children, mobile = false }) => {
  return (
    <button
      type="button"
      className={`sm:w-[100px] inline-block rounded-full  border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none dark:hover:bg-yellow-950 dark:focus:bg-yellow-950 ${
        mobile
          ? "text-white border-white w-[300px] transition ease-in-out delay-150 bg-[#141414] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
          : "text-white bg-orange-600"
      }`}
      data-twe-ripple-init
    >
      {children}
    </button>
  );
};
