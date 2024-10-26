import React, { useState } from "react";
import { motion, AnimatePresence, Varinats } from "framer-motion";

export const Drawer = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Email:", email);
    console.log("Message:", message);
    onClose(); // Close drawer after submission (optional)
  };
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur background effect */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Drawer */}
          <motion.div
            className="fixed inset-0 flex justify-center items-end z-20"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="bg-[#09090b] w-full justify-center flex flex-col p-8 rounded-t-xl shadow-lg border border-gray-700 mx-auto mb-0">
              {/* Content */}
              <button
                onClick={onClose}
                className="text-white relative self-end text-2xl focus:outline-none hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
              >
                &times;
              </button>
              <div className="md:w-1/3 self-center flex md:border-purple-950/75 border-dashed md:border-x p-4 flex-col justify-center">
                <h2 className="text-lg font-semibold text-white mb-4 text-center">
                  Contact Us
                </h2>
                <p className="text-gray-400 mb-6 text-center">
                  We'd love to hear from you. Please send us your message.
                </p>

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border  border-gray-600 bg-transparent text-white rounded-xl  px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-950"
                />

                {/* Message Input */}
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-600 bg-transparent text-white rounded-xl p-2 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-purple-950"
                  rows="4"
                ></textarea>

                {/* Buttons */}
                <div className="flex justify-end  w-full">
                  <button
                    onClick={onClose}
                    className="bg-slate-800 no-underline  group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span>Send</span>
                      <svg
                        fill="none"
                        height="30"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};