import React, { useState } from "react";

export const ContactSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleToggleSlider = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission logic (e.g., sending email)
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the fields after submission
    setEmail("");
    setMessage("");
    setIsOpen(false); // Close the slider after sending
  };

  // Styles for the slider
  const sliderStyle = {
    position: "fixed",
    bottom: isOpen ? "0" : "-100%", // Move slider in and out
    left: "0",
    right: "0",
    backgroundColor: "#1e2631",
    transition: "bottom 0.5s ease",
    padding: "20px",
    borderTop: "1px solid #ccc",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      <button
        className="cursor-pointer mb-3 mt-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mx-auto"
        onClick={handleToggleSlider}
      >
        Contact me
      </button>

      <div style={sliderStyle}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mb-4 rounded-md"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 mb-4 rounded-md"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};


