import React from "react";
import { Header } from "../ui/Header";
import { MainInformation } from "../features/MainInformation";
import { ExperienceBanner } from "../features/ExperienceBanner";
import { AboutMe } from "../features/AboutMe";
import { Portafolio } from "../features/Portafolio";

export const Root = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Header />
        <MainInformation />
        <AboutMe />
        <Portafolio />
      </div>
    </>
  );
};

//      <div className="bg-no-repeat bg-cover bg-center bg-[url('./images/desktop-wallpaper-portfolio.jpg')]  h-screen">
