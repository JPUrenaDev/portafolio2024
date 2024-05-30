import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { LinkWithHover } from "../helper/LinkWithHover";
import { Link } from "react-router-dom";

import { ContactMe } from "../ui/ContactMe";

export const MainInformation = () => {
  return (
    <>
      <article
        id="mainInformation"
        className=" sm:flex sm:items-center sm:mt-[100px] mt-[50px]  sm:w-full sm:justify-evenly font-Roboto sm:ml-3 ml-3 "
      >
        <div className="sm:w-[700px]  w-full ">
          <h3 className=" text-black sm:text-white bg-red-600 mb-4 sm:p-2 flex justify-center w-[150px] tracking-wide">
            <LinkWithHover>Hello I am</LinkWithHover>
          </h3>
          <h1 className="text-white text-[40px] font-bold font-Oswald">
            Mr. Jean Urena
          </h1>
          <h4 className="text-white mt-3 mb-5 ">
            A Professional Web Developer and UI/UX Designer
          </h4>
          <div className="flex gap-4 items-center  mb-6 ">
            <Link to={'/files/Resume Jean Urena Developer.pdf'}  target='_blank' download={true} className="bg-orange-600 p-3 rounded text-white">
              Download CV
            </Link>
            <button className="text-white border-white border p-3 px-6 rounded">
              My Work
            </button>
          </div>
          <div className="flex items-center  sm:gap-5 gap-2 mb-5">
            <div className="flex items-center sm:gap-3">
              <MdOutlinePhoneAndroid color="red" />
              <h6 className="text-white">+1(849)-639-0454</h6>
            </div>
            <div className="flex items-center sm:gap-3">
              <MdOutlineMail color="red" />
              <h6 className="text-white">jeanua8@gmail.com</h6>
            </div>
          </div>
          <div className=" sm:w-[400px]  flex justify-center">
            <ContactMe />
          </div>
        </div>

        <img
          src="./images/wp4445835.jpg"
          className=" sm:object-cover sm:h-full sm:w-[600px] w-full h-full sm:inline hidden"
        ></img>
      </article>
    </>
  );
};
