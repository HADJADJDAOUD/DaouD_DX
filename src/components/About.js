import React from "react";
import { SparklesCore } from "./ui/sparkles";
import ScrollReveal from "./ScrollReveal";

import GradientText from "./GradientText";
const About = () => {
  return (
    <div className="mb-16" id="about">
      <div className=" mt-32  h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-5xl font-sans lg:text-8xl mt-4 font-bold text-center text-white relative z-20">
          <GradientText
            colors={["#1A0033", "#2C0A5D", "#1A005D", "#1A0033", "#2C0A5D"]}
            animationSpeed={4}
            showBorder={false}
            className="custom-class"
          >
            About
          </GradientText>
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
        style={{ fontFamily: " sans" }}
        className="text-white text-[15px] lg:text-[15px] w-[90vw] mx-auto  lg:mt-20 mb-80 "
      >
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={10}
        >
          I'm a full-stack developer proficient in MERN and Django, with
          hands-on experience in machine learning and deep learning through
          personal projects. I'm also exploring quantum mechanics and its
          applications in Quantum Machine Learning to bridge web tech, AI, and
          emerging computing paradigms.
        </ScrollReveal>
      </div>
    </div>
  );
};
export default About;
