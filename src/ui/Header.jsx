import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "./Button";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { DropDownMenu } from "./DropDownMenu";
import { FcCommandLine } from "react-icons/fc";
import { Animation } from "../helper/Animation";

const Link = styled(HashLink)`
  border: 2px solid transparent;
  padding: 4px;
  transition: border-color 0.3s ease, transform 0.3s ease; /* Adding transition for border-color and transform */
  transform-origin: center; /* Setting the transform origin to the center */

  &:hover {
    transform: scale(1.1); /* Applying a scale transform on hover */
  }
`;

export const Header = () => {
  const [showMenuOnMobile, setShowMenuOnMobile] = useState(false);
  return (
    <div className="sm:flex sm:justify-around sm:pt-3 sm:items-center  sm:flex-row flex-wrap flex flex-row items-center justify-between   bg-gray-900 sm:bg-transparent sm:h-[80px] h-[50px] ">
      <div className="flex items-center">
        <Animation>
          <FcCommandLine size={30} />
        </Animation>
        <Link className="  text-white sm:text-[20px] ml-[10px] text-[20px] font-extralight font-Pacifico hover:bg-orange-600  ">
          Jean Urenas
        </Link>
      </div>

      <DropDownMenu />

      <nav className="sm:flex sm:items-center sm:gap-[50px] sm:visible invisible text-white sm:flex-row  sm:mb-0 mb-[40px]  sm:text-[13px] ">
        <Link className="hover:bg-orange-600" to={"#mainInformation"}>
          Home
        </Link>
        <Link className="hover:bg-orange-600" to={"#aboutMe"}>
          {" "}
          About Me
        </Link>
        <Link className="hover:bg-orange-600" to={"#myServices"}>
          My Services
        </Link>
        <Link className="hover:bg-orange-600" to={"#portafolio"}>
          Portafolio
        </Link>
        <Link className="hover:bg-orange-600" to={"#contact"}>
          Contact
        </Link>
        <Link className="hover:bg-orange-600" to={"#blog"}>
          Blog
        </Link>
        <Button>Hire Me</Button>
      </nav>
    </div>
  );
};
