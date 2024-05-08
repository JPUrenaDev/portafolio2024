import React from "react";
import { Header } from "../ui/Header";
import { MainInformation } from "../features/MainInformation";
import { ExperienceBanner } from "../features/ExperienceBanner";
import { AboutMe } from "../features/AboutMe";
import { Portafolio } from "../features/Portafolio";
import { AnimationPhotos } from "../helper/AnimationPhotos";
import { ContactMeFeature } from "../features/ContactMeFeature";

export const Root = () => {
  return (
    <>
      <div className="scroll-smooth p-0 sm:p-0">
        <Header />
        <MainInformation />
        <AboutMe />
        <Portafolio />
        <ContactMeFeature />
      </div>
    </>
  );
};

//      <div className="bg-no-repeat bg-cover bg-center bg-[url('./images/desktop-wallpaper-portfolio.jpg')]  h-screen">
