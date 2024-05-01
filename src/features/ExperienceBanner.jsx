import React from "react";

export const ExperienceBanner = () => {
  return (
    <div class=" w-[900px]  m-auto mt-[100px] flex p-3 items-center pl-4 bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600">
      <div className="text-white  w-screen justify-between flex items-center gap-5 mt-6">
        <div className="flex flex-col text-black">
          <h1 className="font-bold text-black text-center">1+</h1>
          <h5>Years Of Experience</h5>
        </div>
        <div className="flex flex-col text-black">
          <h1 className="font-bold text-center">5+</h1>
          <h5>Projects completed</h5>
        </div>
        <div className="flex flex-col text-black">
          <h1 className="font-bold text-center">1+</h1>
          <h5>Years Of Experience</h5>
        </div>
        <div className="flex flex-col text-black">
          <h1 className="font-bold text-center">1+</h1>
          <h5>Years Of Experience</h5>
        </div>
      </div>
    </div>
  );
};
