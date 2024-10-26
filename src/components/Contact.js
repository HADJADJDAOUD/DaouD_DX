import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SlidingText } from "./ui/SlidingText";
import { SparklesCore } from "./ui/sparkles";
import { useState } from "react";
import { Drawer } from "./ui/Drawer";
import toast, { Toaster } from "react-hot-toast";
import { socialMedia } from "../data";

export default function Contact() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const words = [
    {
      text: "Ready to  ",
    },
    {
      text: "add  ",
    },
    {
      text: "an  ",
    },
    {
      text: "innovative  ",
    },
    {
      text: "touch  ",
    },
    {
      text: "to  ",
    },
    {
      text: "your  ",
    },

    {
      text: "business ?",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full flex flex-col justify-center items-center mb-40 md:mb-56 mt-20"
    >
      <div className=" md:mt-36 mt-20 md:mb-20 h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-5xl lg:text-9xl mt-4 font-bold text-center text-white relative z-20">
          Get in Touch
        </h1>
        <div className="w-[30rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-45 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.6}
            particleDensity={2000}
            className="w-full  md:h-full  h-[5vh] "
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex flex-col m-x-4 items-center justify-center h-[02rem]">
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4"></div>
      </div>
      <div className="text-white mt-4 ">
        {" "}
        <SlidingText text="Let’s connect and explore how I can help you reach your goals!" />
      </div>

      <div className="flex flex-col mt-6 items-center justify-center">
        <button
          onClick={toggleDrawer}
          className="cursor-pointer mb-3 mt-8 h-12 animate-shimmer  items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mx-auto"
        >
          Contact me
        </button>

        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      </div>
      <Toaster
        toastOptions={{
          className: "text-white bg-black",
          style: {
            border: "1px solid purple",

            color: "white",
            backgroundColor: "black",
          },
        }}
      />
      <div className="flex mt-16 p-8 md:flex-row flex-col justify-evenly items-center w-full">
        <p className="md:text-base text-sm md:font-normal m-4 font-light text-white  ">
          Copyright © 2024 Daoud_DX
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-50 bg-black-100 rounded-xl border border-black-300"
            >
              <img
                src={profile.img}
                alt={`social-${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
