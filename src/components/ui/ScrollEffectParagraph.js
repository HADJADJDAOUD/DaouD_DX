import React, { useState, useEffect } from "react";

const ScrollEffectParagraph = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // Initial check

  const lines1 = [
    "I'm Daoud, a Computer Science student skilled in",
    " MERN stack and machine learning. I love building web",
    " apps and solving problems with code.",
    " ",
    "I’m also proficient in PowerPoint for creating clear,",
    " effective presentations.",
    " ",
    "Currently, I'm exploring machine learning and",
    " looking for opportunities to apply my skills in innovative",
    " projects.",
  ];

  const lines2 = [
    "I'm Daoud, a Computer Science student skilled in MERN stack and machine learning. I love ",
    "building web apps and solving problems with code. I’m also proficient in PowerPoint for ",
    "creating clear, effective presentations. Currently, I'm exploring machine learning and",
    " looking for opportunities to apply my skills in innovative projects.",
    "",
  ];

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCentered = (index) => {
    const lineElement = document.getElementById(`line-${index}`);
    if (lineElement) {
      const rect = lineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const lineCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      return Math.abs(lineCenter - screenCenter) < 100;
    }
    return false;
  };

  const lines = isLargeScreen ? lines2 : lines1; // Choose based on screen size

  return (
    <div className="text-purple leading-[30px]">
      <div className="flex-wrap flex-row max-w-[70vw] inline mx-auto" style={{ padding: "10px" }}>
        {lines.map((line, index) => (
          <p
            key={index}
            id={`line-${index}`}
            className="line py-8"
            style={{
              display: "inline",
              opacity: isCentered(index) ? 1 : 0.2,
              transition: "opacity 2s ease, color 2s ease",
            }}
          >
            {line.split(" ").map((word, wordIndex) => {
              let color = "white";

              if (word === "MERN") color = isCentered(index) ? "blue" : "white";
              if (word === "machine") color = isCentered(index) ? "purple" : "white";
              if (word === "PowerPoint") color = isCentered(index) ? "orange" : "white";
              if (word === "learning") color = isCentered(index) ? "purple" : "white";
              if (word === "quantum") color = isCentered(index) ? "purple" : "white";

              return (
                <span key={wordIndex} style={{ color }}>
                  {word}{" "} 
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollEffectParagraph;
