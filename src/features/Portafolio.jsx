import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Portafolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "WebApp",
      Link: "",
      category: "WebApp",
    },
    {
      id: 1,
      projectName: "Mobile App",
      Link: "",
      category: "MobileApp",
    },
    {
      id: 1,
      projectName: "Test",
      Link: "",
      category: "test",
    },
  ]);
  const [searchParams, setSearchParams] = useSearchParams();

  const FilterCategory = (e) => {
    setSearchParams({ category: e });
  };

  //GETTING THE CATEGORY
  const category = searchParams.get("category");

  const filteredProject = projects.filter((value) => {
    return category.toLowerCase() == "all" || !category
      ? value
      : value.category.toLowerCase() == category.toLowerCase();
  });

  console.log(category);

  return (
    <div className="font-Roboto" id="portafolio">
      <h1 className="text-center font-bold text-white mb-4 ">Portafolio</h1>

      <div className="flex gap-[80px]  justify-center">
        <Link
          onClick={() => {
            FilterCategory("All");
          }}
          className="h-[40px] w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          All
        </Link>
        <Link
          onClick={() => {
            FilterCategory("WebApp");
          }}
          className="h-[40px] w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600  "
        >
          Web App
        </Link>
        <Link
          onClick={() => {
            FilterCategory("MobileApp");
          }}
          className="h-[40px] w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          Mobile App
        </Link>
        <Link
          onClick={() => {
            FilterCategory("Test");
          }}
          className="h-[40px] w-[120px] text-white rounded flex justify-center items-center  bg-stone-800 hover:bg-orange-600 "
        >
          Test
        </Link>
      </div>

      <article className="mt-[100px] ml-4 flex gap-4 items-center justify-evenly">
        {filteredProject.map((value, key) => {
          return (
            <div
              key={key}
              className="h-[300px] w-[320px] text-white rounded flex justify-center items-center  bg-stone-800"
            >
              {value.projectName}
            </div>
          );
        })}
      </article>
    </div>
  );
};
