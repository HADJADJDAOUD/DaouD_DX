export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    backgroundPosition: "0% 50%",
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium font-sans backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-gradient"
          style={gradientStyle}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-20 text-transparent animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
    </div>
  );
}
