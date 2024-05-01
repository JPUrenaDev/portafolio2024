import React from "react";
import { LinkWithHover } from "../helper/LinkWithHover";
import { Tooltip } from "react-tooltip";
export const AboutMe = () => {
  return (
    <article
      id="aboutMe"
      className="text-white  justify-evenly  mt-4 flex  w-full font-Roboto   py-[100px]  items-center  "
    >
      <div className=" h-96 w-[400px] rounded-full items-center relative ">
        {" "}
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={"Jean Urena </Dev>"}
          src="./images/man-attitude-pro-9.png"
          className=" object-cover absolute top-[-1px]  max-h-fit  max-w-xs transition duration-300 ease-in-out hover:scale-110"
        ></img>
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={"React"}
          src="./images/1174949_js_react js_logo_react_react native_icon.png"
          className="w-[40px]  right-[70px] top-[430px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110"
        ></img>
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={"HTML 5"}
          src="./images/HTML5_logo_and_wordmark.svg.png "
          className="w-[40px]  right-[130px] top-[450px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110"
        ></img>
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="right"
          data-tooltip-content={"CSS"}
          src="./images/css-logo.png "
          className="w-[40px]  right-[10px] top-[380px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110"
        ></img>
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-place="right"
          data-tooltip-content={"Javascript"}
          src="./images/JavaScript-logo.png"
          className="w-[40px]  right-[-30px] top-[320px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110 "
        ></img>
        <img
          src="./images/Tailwind_CSS_Logo.svg.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content={"Tailwind"}
          className="w-[40px]  right-[190px] top-[460px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110 "
        ></img>
        <img
          src="./images/node-js-icon-454x512-nztofx17.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={"NodeJS"}
          className="w-[40px]  right-[340px] top-[4px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110 "
        ></img>
        <img
          src="./images/sql-server-icon-png-1.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={"SQL"}
          className="w-[40px]  right-[380px] top-[60px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110 "
        ></img>
        <img
          src="./images/react-query-logo-1340EA4CE9-seeklogo.com.png"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-content={"React Query"}
          className="w-[40px]  right-[410px] top-[140px] absolute max-w-xs transition duration-300 ease-in-out hover:scale-110 "
        ></img>
      </div>

      <div className={"w-96 flex flex-col gap-5 "}>
        <Tooltip
          style={{ backgroundColor: "#ea580c" }}
          id="my-tooltip"
        ></Tooltip>{" "}
        <div>
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-600 inline-block text-transparent bg-clip-text font-Oswald">
            Biography
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            temporibus voluptatum cum sit est explicabo doloribus, aperiam
            placeat quos officia voluptate, error, rerum at iure? Nostrum unde
            corrupti labore maiores.
          </p>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-600 inline-block text-transparent bg-clip-text font-Oswald ">
            Experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum
            blanditiis magni optio, accusamus debitis iusto libero, quidem autem
            omnis vitae sunt eius distinctio temporibus amet dolorum,
            consectetur ex iure?
          </p>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-600 inline-block text-transparent bg-clip-text font-Oswald ">
            Competences
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            nesciunt rerum illum quidem distinctio quod dolore illo, commodi,
            totam reiciendis reprehenderit expedita pariatur exercitationem,
            voluptas magnam provident ipsam debitis iusto!
          </p>
        </div>
      </div>
    </article>
  );
};
