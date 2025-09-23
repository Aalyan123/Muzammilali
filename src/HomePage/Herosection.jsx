import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import illustrator from "../assets/adobeillustrator.png";
import canva from "../assets/canva.png";
import photoshop from "../assets/photoshop.png";
import hero from "../assets/Muzammil.jpeg";


const Herosection = () => {
  // Use a placeholder image URL since local file paths do not work in this environment.
  // Replace this URL with a link to your own hosted image in the future.
  const profileImage = "https://placehold.co/400x400/805ad5/ffffff?text=Muzammil+Ali";

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay by 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center
      bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_33%,#ddd6fe_66%,#fbcfe8_100%)] px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle floating radial lights */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-200 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-200 opacity-15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-16 w-full max-w-6xl py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"} // Control animation start here
      >
        {/* Left Text Content */}
        <motion.div className="text-center lg:text-left w-full lg:w-1/2" variants={containerVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-800 font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug"
            style={{ fontFamily: "Poppins" }}
            variants={textVariants}
          >
            Hi, I am
            <br />
            <span className="font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Muzammil Ali
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 font-light leading-relaxed px-2 sm:px-4 lg:px-0"
            style={{ fontFamily: "Outfit" }}
            variants={textVariants}
          >
            Crafting impactful designs with precision and creativity. 
Transforming ideas into visually striking, brand-focused visuals that connect and inspire.
          </motion.p>

          <motion.div
            className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto lg:mx-0 mt-4 sm:mt-6 rounded-full"
            variants={textVariants}
          ></motion.div>

          {/* Buttons Container */}
         <motion.div
  className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-none mx-auto lg:mx-0"
  variants={textVariants}
>
  {/* Primary Button */}
  <Link to="/portfolio" className="w-full sm:w-auto flex justify-center">
    <button
      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold
      px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base
      rounded-lg sm:rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300
      flex items-center justify-center w-[200px] sm:w-auto"
      style={{ fontFamily: "Poppins" }}
    >
      View Projects
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
  </Link>
  {/* Secondary Button */}
  <Link to="/contact" className="w-full sm:w-auto flex justify-center">
    <button
      className="group px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base
      rounded-lg sm:rounded-full border-2 border-black
      bg-transparent transition-all duration-300 hover:scale-105 transform
      hover:bg-black hover:shadow-lg w-[200px] sm:w-auto"
    >
      <span
        className="text-black font-medium tracking-wider
        transition-colors duration-300 group-hover:text-white"
        style={{ fontFamily: "Poppins" }}
      >
        Let's Work Together
      </span>
    </button>
  </Link>
</motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex-shrink-0"
          variants={imageVariants}
        >
          {/* Main profile image */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl"
            style={{ zIndex: 2 }}
          >
            <img
              src={hero}
              alt="Muzammil Ali Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Animated circle frame 1 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ zIndex: 1 }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="49" fill="none" stroke="url(#grad1)" strokeWidth="4" />
            </svg>
          </motion.div>

          {/* Animated circle frame 2 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ zIndex: 1 }}
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "easeInOut",
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad2)" strokeWidth="4" />
            </svg>
          </motion.div>

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{
              zIndex: 0,
              background: 'linear-gradient(45deg, #fbcfe8, #e0e7ff, #ddd6fe)',
              filter: 'blur(32px)',
              opacity: 0.7,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Icons for Photoshop, Illustrator, and Canva */}
          <motion.div
            className="absolute -top-2 xs:-top-4 -left-2 xs:-left-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center "
            variants={iconVariants}
            animate={{
              x: ["0rem", "-0.5rem", "0rem"],
              y: ["0rem", "-1rem", "0rem"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <img
              src={photoshop}
              alt="Photoshop"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center "
            variants={iconVariants}
            animate={{
              x: ["0rem", "0.5rem", "0rem"],
              y: ["0rem", "-1rem", "0rem"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <img
              src={illustrator}
              alt="Illustrator"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
            variants={iconVariants}
            animate={{
              x: ["0rem", "-0.5rem", "0rem"],
              y: ["0rem", "1rem", "0rem"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <img
              src={canva}
              alt="Canva"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Herosection;