import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "./Button";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { DropDownMenu } from "./DropDownMenu";
import { FcCommandLine } from "react-icons/fc";
import { Animation } from "../helper/Animation";
import { LinkWithHover } from "../helper/LinkWithHover";

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
    <div className="flex justify-around pt-3   px-3  flex-wrap flex-row items-center font-Roboto    bg-gray-900 sm:bg-transparent h-[80px] ">
      <div className="flex items-center">
        <Animation>
          <FcCommandLine size={30} />
        </Animation>
        <Link className="  text-white  ml-[10px] text-[20px] font-extralight  hover:bg-orange-600  ">
          Jean Urena
        </Link>
      </div>

      <DropDownMenu />

      <nav className="flex items-center sm:gap-[50px] visible   text-white sm:flex-row  mb-0  text-[13px] ">
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
