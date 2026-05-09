import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller = scrollContainerRef?.current || window;

    // 1) Slow‐down rotation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: "+=300px", // faster rotation reveal
          scrub: 0.8,
        },
      }
    );

    // 2) Slow‐down words opacity
    const wordElements = el.querySelectorAll(".word");
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity },
      {
        opacity: 1,
        stagger: 0.05, 
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=15%",
          end: "+=350px", // snappier reveal
          scrub: 1,
        },
      }
    );

    // 3) Slow‐down blur
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=15%",
            end: "+=350px",
            scrub: 1,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[28px] md:text-[35px] leading-[2.2] font-semibold tracking-tight ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
