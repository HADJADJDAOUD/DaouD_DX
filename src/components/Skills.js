import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Button } from "./ui/moving-border";
import { skills, workExperience } from "../data";
export default function Skills() {
  return (
    <div className="py-20 " id="skills">
      <div className=" mt-28 h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-5xl lg:text-9xl mt-4 font-bold text-center text-white relative z-20">
          Skills
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
      <div className=" mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 mx-10 lg:mx-4    ">
        {" "}
        {skills.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className={card.className}
          >
            <div className="flex lg:flex-row flex-col lg:items-center w-full justify-start p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="flex lg:flex-col flex-row lg:items-center  justify-start    gap-2">
                {/* Loop over each image in the thumbnail array */}
                {card.thumbnail.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="lg:w-12 h-7 md:w-8 w-4"
                  />
                ))}
              </div>
              <div className="lg:ms-5 p-">
                <h1 className=" pb-6 text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt- font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
