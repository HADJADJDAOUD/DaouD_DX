import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useAnimate } from "framer-motion";

export const SlidingText = ({ text }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowText(true); // Set showText to true after 3.5 seconds
      }, 2800);

      return () => clearTimeout(timer); // Clean up the timer on unmount
    } else {
      setShowText(false); // Reset showText if component goes out of view
    }
  }, [isInView]);

  // Inline styles
  const styles = {
    container: {
      opacity: showText ? 1 : 0, // Fade in when showText is true
      transform: showText ? "translateY(0)" : "translateY(-10px)", // Slide from up to down
      transition: "opacity 0.5s ease, transform 0.7s ease", // Smooth transition
    },
  };
  console.log(showText);
  return (
    <div
      ref={scope}
      className="text-[14px] md:text-[20px] text-purple-200"
      style={styles.container}
    >
      {text}
    </div>
  );
};
