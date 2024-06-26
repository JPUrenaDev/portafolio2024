import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { ProfileCardDesign } from "../ui/ProfileCardDesign";
import { FaGithub } from "react-icons/fa";

export const Portafolio = () => {
  const [projects] = useState([
    {
      id: 1,
      projectName: "NoteApp",
      Link: "",
      category: "WebApp",
      description:
        "This project is a note-taking application built with Node.js and React. Users can create, delete, and edit notes, providing a versatile platform for managing personal or professional tasks efficiently.",
      image: "./images/Screenshot 2024-05-02 074750.jpg",
      technologies: [
        "Javascript",
        "Css",
        "Tailwind",
        "React",
        "NodeJs",
        "sequelize",
        "React Query",
        "react hook",
      ],
      gitHub: (
        <Link to={"https://github.com/JPUrenaDev/noteApp"}>
          <FaGithub size={40} color="red" />
        </Link>
      ),
    },
    {
      id: 2,
      projectName: "GLPI Api Integration",
      Link: "",
      category: "WebApp",
      description:
        "This project integrates the GLPI API with Express.js and SQL Server for nationwide ambulance status monitoring in the healthcare sector. It enables efficient management and synchronization of IT assets and service tickets, ensuring secure data handling and enhanced functionality across the country.",
      image: "./images/Screenshot 2024-06-24 131854.jpg",
      technologies: ["SQL Server", "NodeJS", "Express"],
      gitHub: (
        <Link to={"https://github.com/JPUrenaDev/glpi-external-api2"}>
          <FaGithub size={40} color="red" />
        </Link>
      ),
    },
    {
      id: 4,
      projectName: "Calendar",
      Link: "",
      category: "WebApp",
      description:
        "The calendar project is a web application that allows users to add, edit, and delete events on specific days of the calendar. It provides an intuitive interface for managing events efficiently, ensuring users can easily visualize and organize their schedules.",
      image: "./images/Screenshot 2024-05-30 082759.png",
      technologies: ["Javascript", "Css", "Tailwind", "React"],
      gitHub: (
        <Link to={"https://github.com/JPUrenaDev/calendarApp"}>
          <FaGithub size={40} color="red" />
        </Link>
      ),
    },

    {
      id: 5,
      projectName: "Ecommerce Corotos Clone",
      Link: "",
      category: "WebApp",
      description:
        "The calendar project is a web application that allows users to add, edit, and delete events on specific days of the calendar. It provides an intuitive interface for managing events efficiently, ensuring users can easily visualize and organize their schedules.",
      image: "./images/Screenshot 2024-06-26 112013.jpg",
      technologies: [
        "Javascript",
        "Css",
        "Tailwind",
        "React",
        "React Query",
        "Redux",
        "NodeJS",
        "ExpressJS",
      ],
      gitHub: (
        <Link to={"https://github.com/JPUrenaDev/calendarApp"}>
          <FaGithub size={40} color="red" />
        </Link>
      ),
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

      <div className="flex sm:gap-[80px] gap-4 sm:mx-0 sm:px-0 px-3  sm:justify-center justify-between">
        <Link
          onClick={() => {
            FilterCategory("All");
          }}
          className="h-[40px] w-[130px] sm:w-[120px] sm:p-0  text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          All
        </Link>
        <Link
          onClick={() => {
            FilterCategory("WebApp");
          }}
          className="h-[40px] w-[130px] sm:w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600  "
        >
          Web App
        </Link>
        <Link
          onClick={() => {
            FilterCategory("MobileApp");
          }}
          className="h-[40px] w-[130px] sm:w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          Mobile App
        </Link>
      </div>

      <article className="mt-[50px] ml-4 flex gap-4 items-center justify-evenly flex-wrap">
        {category == "MobileApp" ? (
          <h1 className="text-white">Ops, coming soon</h1>
        ) : (
          filteredProject.map((value) => {
            return <ProfileCardDesign projectInformation={value} />;
          })
        )}
      </article>
    </div>
  );
};
