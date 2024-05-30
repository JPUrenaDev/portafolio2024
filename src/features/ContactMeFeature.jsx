import React from "react";
import { ContactMe } from "../ui/ContactMe";
export const ContactMeFeature = () => {
  return (
    <div className="w-full">
      <h1 className="text-orange-600 font-bold text-[30px] text-center mt-5 mb-[50px] font-Roboto ">
        Contact Me
      </h1>

      <div className="w-full flex ml-[40px] sm:w-[500px] sm:mx-auto" >
        <ContactMe />
      </div>
    </div>
  );
};
