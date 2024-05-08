import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimationPhotos } from "../helper/AnimationPhotos";

export const NotesProject = ({ projectInformation }) => {
  const navigate = useNavigate();
  const goToThePreviousPage = () => {
    navigate(-1);
  };
  return (
    <div className="text-white font-Roboto">
      <h1 className="text-center pt-4">Notes Project</h1>
      <button
        type="button"
        className=" ml-4 mt-5 w-full flex items-center justify-center px-5 py-2 text-sm text-white transition-colors duration-200 bg-orange-600 border rounded-lg gap-x-2 sm:w-auto   hover:bg-red-500"
      >
        <svg
          class="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span onClick={goToThePreviousPage}>Go back</span>
      </button>
      <AnimationPhotos />
      <img
        src="./images/Screenshot 2024-05-02 074750.jpg "
        className="object-fit w-[800px] mt-5 flex m-auto"
      ></img>
      <h2>Description:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ullam dolore
        quas vero, dicta fuga alias similique pariatur? Eaque corporis
        voluptatem harum tenetur minus sunt mollitia ex, vel fuga expedita.
      </p>
    </div>
  );
};
