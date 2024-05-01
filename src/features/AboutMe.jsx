import React from "react";

export const AboutMe = () => {
  return (
    <article className="text-white  justify-evenly  mt-4 flex  w-full font-Roboto   py-[100px]  items-center  ">
      <div className=" h-96 w-[400px] rounded-full items-center relative ">
        {" "}
        <img
          src="./images/man-attitude-pro-9.png"
          className=" object-cover absolute top-[-1px]  max-h-fit rounded-full"
        ></img>
        <img
          src="./images/1174949_js_react js_logo_react_react native_icon.png"
          className="w-[40px]  right-[70px] top-[430px] absolute"
        ></img>
        <img
          src="./images/HTML5_logo_and_wordmark.svg.png "
          className="w-[40px]  right-[130px] top-[450px] absolute rounded-full"
        ></img>
        <img
          src="./images/1420398.png"
          className="w-[40px]  right-[-30px] top-0  absolute"
        ></img>
        <img
          src="./images/css-logo.png "
          className="w-[40px]  right-[10px] top-[380px] absolute"
        ></img>
        <img
          src="./images/JavaScript-logo.png"
          className="w-[40px]  right-[-30px] top-[320px] absolute"
        ></img>
        <img
          src="./images/Tailwind_CSS_Logo.svg.png"
          className="w-[40px]  right-[190px] top-[460px] absolute"
        ></img>
      </div>

      <div className={"w-96 flex flex-col gap-5"}>
        {" "}
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
