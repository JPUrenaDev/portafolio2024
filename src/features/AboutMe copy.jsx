import React from "react";

import { Tooltip } from "react-tooltip";
export const AboutMe = () => {
  return (
    <article
      id="aboutMe"
      className="text-white  sm:justify-evenly  sm:mt-4 sm:flex  sm:w-full font-Roboto   sm:py-[100px] py-[10px]  sm:items-center "
    >
      <div className=" sm:h-96 sm:w-[400px] sm:rounded-full items-center sm:relative ">
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={"Jean Urena </Dev>"}
          src="./images/man-attitude-pro-9.png"
          className="sm:object-cover relative sm:absolute sm:top-[-1px]    sm:max-h-fit  sm:max-w-xs sm:h-full  rounded  mx-auto sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110  w-[screen]"
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
          className="sm:w-[40px]   sm:right-[130px]  sm:top-[450px]  absolute sm:max-w-xs  w-[30px]  top-[670px] right-[20px] sm:left-[230px] sm:transition sm:duration-300 ease-in-out hover:scale-110"
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
          className="sm:w-[40px]  sm:right-[340px] sm:left-3 left-[100px]  top-[700px] sm:top-[4px] sm:absolute absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110   w-[30px]"
        ></img>
        <img
          src="./images/sql-server-icon-png-1.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={"SQL"}
          className="sm:w-[40px]  sm:right-[380px] sm:top-[60px] left-[300px] top-[600px] sm:absolute  absolute sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110  w-[30px]"
        ></img>
        <img
          src="./images/react-query-logo-1340EA4CE9-seeklogo.com.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={"React Query"}
          className="sm:w-[40px]  sm:right-[410px] sm:top-[140px] sm:absolute absolute top-[600px] sm:left-[-50px] left-[100px] w-[22px] sm:max-w-xs sm:transition sm:duration-300 sm:ease-in-out sm:hover:scale-110 "
        ></img>
      </div>

      <div className={"sm:w-96 sm:flex sm:flex-col sm:gap-5 "}>
        <Tooltip
          style={{ backgroundColor: "#ea580c" }}
          id="my-tooltip"
        ></Tooltip>{" "}
        <div className="mt-[40px]">
          <h1 className="text-orange-600  font-Roboto font-bold sm:text-[30px] sm:mb-3 text-center">
            BIOGRAPHY
          </h1>
          <p className="text-justify px-4 sm:px0 mb-4 ">
            I am a systems engineer from the Dominican Republic with a passion
            for front-end development, particularly in JavaScript and React. I
            have 3 years of experience designing dynamic, responsive user
            interfaces, and 5 years of expertise in database management,
            including API integrations with SQL Server. I strive to stay updated
            with the latest technologies to provide innovative and high-quality
            solutions.
          </p>
        </div>
        <div>
          <h1 className="text-orange-600 sm:font-Roboto font-bold sm:text-[30px] text-center sm:mb-3">
            EXPERIENCE
          </h1>
          <p className="text-justify px-4 sm:px0 mb-4  ">
            I developed a full-stack notes application and a calendar project,
            highlighting my front-end and back-end development skills. With 3
            years of JavaScript experience and 5 years in database management,
            including API integrations with SQL Server, I have honed my ability
            to create efficient, user-friendly applications and manage complex
            data operations.
          </p>
        </div>
        <div>
          <h1 className="text-orange-600  font-Roboto font-bold sm:text-[30px] text-center mb-3">
            COMPETENCES
          </h1>

          <p className="text-justify px-4 sm:px0">
            <h3 className="text-orange-600">JavaScript & React:</h3> Proficient
            in developing dynamic and responsive front-end applications.{" "}
            <br></br>
            <br></br>
            <h3 className="text-orange-600">Full-Stack Development:</h3>{" "}
            Experience in creating comprehensive applications from front-end to
            back-end. <br></br>
            <br></br>
            <h3 className="text-orange-600">Database Management:</h3> Extensive
            experience with SQL Server and integrating APIs. <br></br>
            <br></br>
            <h3 className="text-orange-600">Problem-Solving:</h3> Strong
            analytical skills to identify issues and implement effective
            solutions. <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </article>
  );
};
