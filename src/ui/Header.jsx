import { HashLink } from "react-router-hash-link";
import { Button } from "./Button";
import styled from "styled-components";

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
  return (
    <div className=" sm:flex sm:justify-around    px-3     font-Roboto bg-gray-900  h-full py-4 w-full">
      <div className="flex items-center ">
        <Animation>
          <FcCommandLine size={30} />
        </Animation>
        <Link className="  text-white  ml-[10px] text-[20px] font-extralight rounded-md hover:bg-orange-600  ">
          Jean Urena
        </Link>

        <DropDownMenu />
      </div>

      <nav className="sm:flex items-center sm:gap-[50px]   text-white sm:flex-row  mb-0  text-[13px]  hidden py-4">
        <Link
          className="hover:bg-orange-600 rounded-md"
          to={"#mainInformation"}
        >
          Home
        </Link>
        <Link className="hover:bg-orange-600 rounded-md" to={"#aboutMe"}>
          {" "}
          About Me
        </Link>
        <Link className="hover:bg-orange-600 rounded-md" to={"#myServices"}>
          My Services
        </Link>
        <Link className="hover:bg-orange-600 rounded-md" to={"#portafolio"}>
          Portafolio
        </Link>
        <Link
          className="hover:bg-orange-600 rounded-md"
          to={"#mainInformation"}
        >
          Contact
        </Link>
        <Link className="hover:bg-orange-600 rounded-md" to={"#blog"}>
          Blog
        </Link>
        <Button>Hire Me</Button>
      </nav>
    </div>
  );
};
