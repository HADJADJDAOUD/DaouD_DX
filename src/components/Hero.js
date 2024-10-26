import { FaLocationArrow } from "react-icons/fa6";
import "./hero.css";
import { useEffect, useState } from "react";
import MagicButton from "./ui/Shimmer";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";

const Hero = () => {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 2400); // Change 3000 to the number of milliseconds you want to wait (e.g., 3000 ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div id='home' className="relative max-h-[100hv]">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background and Mask */}
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Maintain Space for the Content */}
      <div
        className={`flex justify-center transition-opacity duration-700 relative my-20 ${
          showRest ? "" : "h-screen"
        }`} // Fixed height while loading
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {showRest ? (
            <>
              <TextGenerateEffect
                words="Hi, I'm DAOUD_DX. computer Science Student."
                className="text-center text-[52px] md:text-[50px] lg:text-[64px] py-6 sm:py-11"
              />

              <p
                style={{ fontFamily: "cs" }}
                className="text-white text-center md:tracking-wider  mt-7 text-lg md:text-lg lg:text-2xl"
              >
                "Helping businesses grow with scalable websites, AI-driven
                insights."
              </p>

              <a href="#projects" className="relative z-20 ">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              {/* Placeholder content while loading */}
              <p className="text-transparent">Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
