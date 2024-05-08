import React from "react";
import { ContactMe } from "../ui/ContactMe";
export const ContactMeFeature = () => {
  return (
    <div className="w-full">
      <h1 className="text-orange-600 font-bold text-[30px] text-center mt-5 mb-[50px] font-Roboto ">
        Contact Me
      </h1>

      <div className="w-[500px] mx-auto">
        <ContactMe />
      </div>
    </div>
  );
};
