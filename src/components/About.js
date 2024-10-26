import React from "react";
import { SparklesCore } from "./ui/sparkles";

import ScrollEffectParagraph from "./ui/ScrollEffectParagraph";

const About = () => {
  return (
    <div className="mb-16" id="about">
      <div className=" mt-32  h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-5xl lg:text-9xl mt-4 font-bold text-center text-white relative z-20">
          About
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
      <div
        style={{ fontFamily: "tit" }}
        className="text-white text-[15px] lg:text-[35px] w-[90vw] mx-auto  lg:mt-20 mb-80 "
      >
        <ScrollEffectParagraph />
      </div>
    </div>
  );
};
export default About;
