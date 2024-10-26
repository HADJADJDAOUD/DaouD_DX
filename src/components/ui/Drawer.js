import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
export const Drawer = ({ isOpen, onClose }) => {
  const [name, setName] = useState(""); // Added state for name
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => {
    toast("email is sent .");
    console.log("setn");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the email data
    const templateParams = {
      to_email: "daoudhdj@gmail.com", // Your email address
      from_name: name, // User's name
      from_email: email, // User's email
      message: message,
    };
    console.log("it here");
    console.log(process.env.REACT_APP_KEY);
    console.log(process.env.REACT_APP_MY_EMAIL);
    // Send the email using SMTP.js
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: process.env.REACT_APP_MY_EMAIL,
      Password: process.env.REACT_APP_KEY,
      To: templateParams.to_email,
      From: `${templateParams.from_name} <${templateParams.from_email}>`,
      Subject: "New message from contact form",
      Body: `${templateParams.message}`,
    })
      .then((message) => {
        notify();
        onClose(); // Close drawer after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.div
            className="fixed inset-0 flex justify-center items-end z-20"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="bg-[#09090b] w-full justify-center flex flex-col p-8 rounded-t-xl shadow-lg border border-gray-700 mx-auto mb-0">
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

                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-600 bg-transparent text-white rounded-xl px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-950"
                />

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-600 bg-transparent text-white rounded-xl px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-950"
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
                <div className="flex justify-end w-full">
                  <button
                    onClick={handleSubmit}
                    className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
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
