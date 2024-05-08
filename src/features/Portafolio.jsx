import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { PiArrowSquareUpRightFill } from "react-icons/pi";
import { ProfileCardDesign } from "../ui/ProfileCardDesign";

export const Portafolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "WebApp",
      Link: "",
      category: "WebApp",
      description: "loremsadddadaadsasderwerwer",
      image: "./images/Screenshot 2024-05-02 074750.jpg",
      technologies: ["Javascript", "Css", "Tailwind", "React"],
    },
    {
      id: 4,
      projectName: "prueba",
      Link: "",
      category: "MobileApp",
      description: "loremsadddadaadsasderwerwer",
      image: "./images/Screenshot 2024-05-02 074750.jpg",
      technologies: ["Javascript", "Css", "Tailwind", "React"],
    },
    {
      id: 2,
      projectName: "Mobile App",
      Link: "",
      category: "MobileApp",
      description: "loremsadddadaadsasderwerwer",
      image: "./images/Screenshot 2024-05-02 074750.jpg",
      technologies: ["Javascript", "Css", "Tailwind", "React"],
    },
    {
      id: 3,
      projectName: "Test",
      Link: "",
      category: "test",
      description: "loremsadddadaadsasderwerwer",
      image: "./images/Screenshot 2024-05-02 074750.jpg",
      technologies: ["Javascript", "Css", "Tailwind", "React"],
    },
  ]);
  const [searchParams, setSearchParams] = useSearchParams();

  const FilterCategory = (e) => {
    setSearchParams({ category: e });
  };

  //GETTING THE CATEGORY
  const category = searchParams.get("category");

  const filteredProject = projects.filter((value) => {
    return category?.toLowerCase() == "all" || !category
      ? value
      : value.category?.toLowerCase() == category?.toLowerCase();
  });

  return (
    <div className="font-Roboto" id="portafolio">
      <h1 className="text-center font-bold  text-[30px] mb-4 text-orange-600  font-Roboto">
        PORTAFOLIO
      </h1>

      <div className="flex sm:gap-[80px]  sm:justify-center justify-between">
        <Link
          onClick={() => {
            FilterCategory("All");
          }}
          className="h-[40px] sm:w-[120px] text-white rounded flex justify-center items-center px-3 bg-stone-800 hover:bg-orange-600 "
        >
          All
        </Link>
        <Link
          onClick={() => {
            FilterCategory("WebApp");
          }}
          className="h-[40px] sm:w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600  "
        >
          Web App
        </Link>
        <Link
          onClick={() => {
            FilterCategory("MobileApp");
          }}
          className="h-[40px] sm:w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          Mobile App
        </Link>
        <Link
          onClick={() => {
            FilterCategory("Test");
          }}
          className="h-[40px] sm:w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          Test
        </Link>
      </div>

      <article className="mt-[50px] ml-4 flex gap-4 items-center justify-evenly flex-wrap">
        {filteredProject.map((value, key) => {
          return (
            <ProfileCardDesign projectInformation={value} />
            // <div
            //   key={key}
            //   className="h-[300px] w-[320px] text-white rounded flex justify-center items-center  bg-stone-800 flex-col "
            // >
            //   <img className="h-full w-full object-fit" src={value.image}></img>

            //   <Link to={"NoteApp"} className="w-full mt-8 px-3">
            //     <h2 className="font-bold">{value.projectName}</h2>

            //     <p className="font-thin">{value.description}</p>
            //     <div className="flex items-center justify-between mt-4 font-thin">
            //       <h4>View more details: </h4> <PiArrowSquareUpRightFill />
            //     </div>
            //   </Link>
            // </div>
          );
        })}
      </article>
    </div>
  );
};
