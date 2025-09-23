import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Topbanner = () => {
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
      className="relative mt-8 sm:mt-12 grid place-items-center min-h-[16rem] sm:min-h-[20rem] w-full 
      overflow-hidden 
      bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_25%,#ddd6fe_60%,#fbcfe8_100%)] 
      px-3 sm:px-6 text-center rounded-b-[5rem] shadow-md"
    >
      {/* Floating Radial Lights */}
      <div className="absolute inset-0">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute top-6 left-6 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute bottom-12 right-6 w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse delay-200"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={lightVariants}
          className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse delay-500"
        ></motion.div>
      </div>

      {/* Banner Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
        className="relative z-10 px-2"
      >
        <h1
          className="text-2xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-4 sm:mb-6 leading-snug"
          style={{ fontFamily: "Poppins" }}
        >
          About Muzammil Ali
        </h1>
        <span
          className="font-semibold text-lg sm:text-2xl text-black"
          style={{ fontFamily: "Poppins" }}
        >
          Passionate{" "}
          <span className="text-white rounded bg-gradient-to-b from-blue-800 via-purple-700">
            designer, strategic thinker, creative
          </span>{" "}
          problem solver
        </span>
      </motion.div>
    </div>
  );
};

export default Topbanner;