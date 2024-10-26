import React from "react";
import { useState, useEffect } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
export default function Head() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 2400); // Change 3000 to the number of milliseconds you want to wait (e.g., 3000 ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="w-full z-10 absolute sm:top-2 top-2 h-[46rem] ">
      {!showRest && <TextHoverEffect  text="DX" />}
    </div>
  );
}
