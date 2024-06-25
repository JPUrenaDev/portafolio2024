import React from "react";

import { Tooltip } from "react-tooltip";
export const AboutMe = () => {
  return (
    <article
      id="aboutMe"
      className="text-white   sm:mt-[100px]    w-full font-Roboto  sm:mb-[50px]   "
    >
      <div className={"sm:w-full    sm:gap-20 sm:items-center  "}>
        <Tooltip
          style={{ backgroundColor: "#ea580c" }}
          id="my-tooltip"
        ></Tooltip>{" "}
        <div className="mt-[40px]">
          <h1 className="text-orange-600  font-Roboto font-bold sm:text-[30px] sm:mb-[50px] text-center">
            BIOGRAPHY
          </h1>
          <p className="text-justify sm:px0 mb-4 w-[70%]  mx-auto sm:mb-[80px]">
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
          <h1 className="text-orange-600  font-Roboto font-bold sm:text-[30px] sm:mb-[50px] text-center">
            EXPERIENCE
          </h1>
          <p className="text-justify sm:px0 mb-4 w-[70%]  mx-auto">
            I developed a full-stack notes application and a calendar project,
            highlighting my front-end and back-end development skills. With 3
            years of JavaScript experience and 5 years in database management,
            including API integrations with SQL Server, I have honed my ability
            to create efficient, user-friendly applications and manage complex
            data operations.
          </p>
        </div>
        <div>
          <h1 className="text-orange-600  font-Roboto font-bold sm:text-[30px] text-center mb-3 sm:mt-[70px]">
            COMPETENCES
          </h1>

          <p className="text-justify px-4 sm:px0 flex flex-col gap-6">
            <div>
              <h3 className="text-orange-600 text-center">
                JavaScript & React:
              </h3>
              <h3 className="sm:text-center">
                Proficient in developing dynamic and responsive front-end
                applications. <br></br>
              </h3>
              <br></br>
            </div>
            <div>
              <h3 className="text-orange-600 text-center">
                Full-Stack Development:
              </h3>{" "}
              <h3 className="sm:text-center">
                Experience in creating comprehensive applications from front-end
                to back-end. <br></br>
              </h3>
              <br></br>
            </div>
            <div>
              <h3 className="text-orange-600 text-center">
                Database Management:
              </h3>{" "}
              <h3 className="sm:text-center">
                {" "}
                Extensive experience with SQL Server and integrating APIs.{" "}
                <br></br>
                <br></br>
              </h3>
              <h3 className="text-orange-600 text-center">Problem-Solving:</h3>
              <h3 className="sm:text-center">
                {" "}
                Strong analytical skills to identify issues and implement
                effective solutions.<br></br>
                <br></br>
              </h3>
            </div>
          </p>
        </div>
      </div>
    </article>
  );
};
