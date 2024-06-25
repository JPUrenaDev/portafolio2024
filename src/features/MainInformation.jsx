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
          <h3 className=" text-black sm:text-white bg-red-600 mb-4 sm:p-2 flex justify-center w-[150px] rounded-md tracking-wide">
            <LinkWithHover>Hello I am</LinkWithHover>
          </h3>
          <h1 className="text-white text-[40px] font-bold font-Oswald">
            Mr. Jean Urena
          </h1>
          <h4 className="text-white mt-3 mb-5 ">
            A Professional Web Developer
          </h4>
          <div className="flex gap-4 items-center  mb-6 ">
            <Link
              to={"/files/Resume Jean Urena Developer.pdf"}
              target="_blank"
              download={true}
              className="bg-orange-600 p-3 rounded text-white"
            >
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
          <div className=" sm:w-[400px] ml-[-34px] flex justify-center">
            <ContactMe />
          </div>
        </div>

        <div className=" sm:h-96 sm:w-[400px] sm:rounded-full items-center sm:relative ">
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={"Jean Urena </Dev>"}
            src="./images/man-attitude-pro-9.png"
            className="sm:object-cover relative sm:absolute sm:top-[-5px] sm:max-h-fit  sm: sm:h-full  rounded  mx-auto sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110  sm:w-auto"
          ></img>
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={"React"}
            src="./images/1174949_js_react js_logo_react_react native_icon.png"
            className="sm:w-[40px] top-[500px]  w-[30px]  right-[20px] sm:right-[70px] sm:top-[430px]  absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110"
          ></img>
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={"HTML 5"}
            src="./images/HTML5_logo_and_wordmark.svg.png "
            className="sm:w-[40px]   sm:right-[130px]  sm:top-[450px]  absolute sm:max-w-xs  w-[30px]  top-[500px] right-[10px] left-[100px] sm:left-[230px] sm:transition sm:duration-300 ease-in-out hover:scale-110"
          ></img>
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-place="right"
            data-tooltip-content={"CSS"}
            src="./images/css-logo.png "
            className="sm:w-[40px]  sm:right-[10px] top-[500px]   w-[20px]  left-[40px]  sm:left-[345px]  sm:top-[380px] absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110"
          ></img>
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-place="right"
            data-tooltip-content={"Javascript"}
            src="./images/JavaScript-logo.png"
            className="sm:w-[40px]  sm:right-[-30px]  sm:top-[320px]  sm:left-[390px] left-[20px] absolute w-[20px] top-[700px]  sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110 "
          ></img>
          <img
            src="./images/Tailwind_CSS_Logo.svg.png"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom"
            data-tooltip-content={"Tailwind"}
            className="sm:w-[40px]  sm:right-[190px]  sm:left-[90] left-5 sm:top-[469px] absolute sm:absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110 sm:left-[160px] w-[30px] buttom-[0px] top-[600px] "
          ></img>
          <img
            src="./images/node-js-icon-454x512-nztofx17.png"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="left"
            data-tooltip-content={"NodeJS"}
            className="sm:w-[40px]  sm:right-[340px] sm:left-3 left-[350px]  top-[680px] sm:top-[4px] sm:absolute absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110   w-[30px]"
          ></img>
          <img
            src="./images/sql-server-icon-png-1.png"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="left"
            data-tooltip-content={"SQL"}
            className="sm:w-[40px]  sm:right-[380px] sm:top-[60px] left-[350px] top-[600px] sm:absolute  absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110  w-[30px]"
          ></img>
          <img
            src="./images/react-query-logo-1340EA4CE9-seeklogo.com.png"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="left"
            data-tooltip-content={"React Query"}
            className="sm:w-[40px]  sm:right-[410px] sm:top-[140px] sm:absolute absolute top-[600px] sm:left-[-50px] left-[100px] w-[22px] sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110 "
          ></img>
        </div>
      </article>
    </>
  );
};
