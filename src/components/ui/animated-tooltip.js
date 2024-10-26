import React, { useState } from "react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipStyle, setTooltipStyle] = useState({
    transform: "translateX(0) rotate(0deg)",
    opacity: 0,
    visibility: "hidden",
  });

  const handleMouseEnter = (item) => {
    setHoveredIndex(item.id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTooltipStyle({
      transform: "translateX(0) rotate(0deg)",
      opacity: 0,
      visibility: "hidden",
    });
  };

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    const offsetX = event.nativeEvent.offsetX - halfWidth;

    const rotate = (offsetX / halfWidth) * 45; // Rotate between -45 and 45 degrees
    const translateX = (offsetX / halfWidth) * 50; // Translate between -50 and 50 pixels

    setTooltipStyle({
      transform: `translateX(${translateX}px) rotate(${rotate}deg)`,
      opacity: 1,
      visibility: "visible",
    });
  };

  return (
    <div className="flex flex-row justify-start items-center w-full  ">
      {items.map((item, idx) => (
        <div
          className=" relative px-1 group self-start items-start  "
          key={item.name}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-2 py-1`}
            style={tooltipStyle}
          >
            <div className="absolute inset-x-10 z-30 w-[10%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-10 w-[30%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
            <div className="font-bold text-white relative z-30 text-xs">
              {hoveredIndex === item.id && item.name}
            </div>
            <div className="text-white text-xs">
              {hoveredIndex === item.id && item.designation}
            </div>
          </div>

          <img
            onMouseMove={handleMouseMove}
            height={50}
            width={50}
            src={item.image}
            alt={item.name}
            className="object-fill !m-0 !p-0 object-top rounded-full h-8 w-8 border-2 group-hover:scale-105 group-hover:z-30 border-white transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
