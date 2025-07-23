import React from "react";
import "./GlitchText.css"; // We'll create this CSS file next

const GlitchText = ({ text, className, isParagraph = false }) => {
  return (
    <div className={`${className} glitch-container`}>
      {/* If it's a paragraph, we'll render it differently for word-based glitches */}
      {isParagraph ? (
        <p>
          {text.split(" ").map((word, index) => (
            <span key={index} className="glitch-word">
              {word} {/* Add a space after each word */}
            </span>
          ))}
        </p>
      ) : (
        // For titles, apply the glitch directly to the text
        <span className="glitch-effect" data-text={text}>
          {text}
        </span>
      )}
    </div>
  );
};

export default GlitchText;
