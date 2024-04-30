import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
export const MainInformation = () => {
  return (
    <article
      id="mainInformation"
      className="sm:flex sm:items-center md:flex-row flex-col  mt-[100px] w-[100%]   justify-around "
    >
      <div className="ml-[100px] w-full h-full">
        <h3 className="text-white bg-red-600 mb-4 p-2 flex justify-center w-[100px]">
          <label>Hello I am</label>
        </h3>
        <h1 className="text-white text-[40px] font-bold">Mr. Jean Urena</h1>
        <h4 className="text-white mt-3 mb-5">
          A Professional Web Developer and UI/UX Designer
        </h4>
        <div className="flex gap-4 items-center  mb-6 ">
          <button className="bg-orange-600 p-3 rounded text-white">
            Download CV
          </button>
          <button className="text-white border-white border p-3 px-6 rounded">
            My Work
          </button>
        </div>
        <div className="flex items-center  gap-5 ">
          <div className="flex items-center gap-3">
            <MdOutlinePhoneAndroid color="red" />
            <h6 className="text-white">+1(849)-639-0454</h6>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMail color="red" />
            <h6 className="text-white">jeanua8@gmail.com</h6>
          </div>
        </div>
      </div>

      <img
        src="./images/wp4445835.jpg"
        className=" object-cover h-[100%] w-[400px]"
      ></img>
    </article>
  );
};
