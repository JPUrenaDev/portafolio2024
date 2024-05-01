import React from "react";
import { Header } from "../ui/Header";
import { MainInformation } from "../features/MainInformation";
import { ExperienceBanner } from "../features/ExperienceBanner";
import { AboutMe } from "../features/AboutMe";

export const Root = () => {
  return (
    <>
      <div className="bg-black scroll-smooth h-full w-full">
        <Header />
        <MainInformation />
        <AboutMe />
      </div>
    </>
  );
};

//      <div className="bg-no-repeat bg-cover bg-center bg-[url('./images/desktop-wallpaper-portfolio.jpg')]  h-screen">
