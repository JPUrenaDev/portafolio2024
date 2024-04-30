import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiMenuBurger } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { Button } from "./Button";
import { IoClose } from "react-icons/io5";
const Link = styled(HashLink)``;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DropDownMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left sm:invisible visited:"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-inset  ">
          {toggleMenu ? (
            <IoClose
              size={30}
              color="white"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <CiMenuBurger
              color="white"
              size={30}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10  w-screen h-screen origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black  focus:outline-none">
          <div className="py-1 flex flex-col items-center gap-[40px] mt-4">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#mainInformation"}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#aboutMe"}
                >
                  {" "}
                  About Me
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#MyServices"}
                >
                  {" "}
                  My Services
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#Portafolio"}
                >
                  {" "}
                  Portafolio
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#Contact"}
                >
                  {" "}
                  Contact
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm text-[34px]"
                  )}
                  to={"#Blog"}
                >
                  {" "}
                  Blog
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Button
                  border-color={"bg-black"}
                  textColor={"text-black"}
                  mobile={true}
                >
                  Hire Me
                </Button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
