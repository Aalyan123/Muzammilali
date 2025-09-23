import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TopBanner = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation variants for radial lights
  const lightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.2, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  // Hook for in-view detection
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      className="relative mt-12 grid place-items-center min-h-[20rem] w-full 
      overflow-hidden 
      bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_25%,#ddd6fe_60%,#fbcfe8_100%)] 
      px-4 text-center rounded-b-[5rem] shadow-md"
    >
      {/* Floating Radial Lights */}
      <div className="absolute inset-0">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute bottom-20 right-10 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse delay-200"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse delay-500"
        ></motion.div>
      </div>

      {/* Banner Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
        className="relative z-10"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-6 leading-snug"
          style={{ fontFamily: "Poppins" }}
        >
          Portfolio & Expertise
          <br />
          <span className="font-semibold text-2xl bold to-pink-700 bg-clip-text text-black">
            The technical <span className="text-white rounded bg-gradient-to-b from-blue-800 via-purple-700">skills and creative </span>capabilities that drive exceptional results
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export default TopBanner;