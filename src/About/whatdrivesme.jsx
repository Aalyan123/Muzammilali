import React from "react";
import { Hammer, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WhatDrivesMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      className="bg-[#F9FAFB] w-full py-16 px-6 sm:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Section Heading */}
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={childVariants}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          What{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Drives
          </span>{" "}
          Me
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl mt-3 text-[#4c4d54]"
          style={{ fontFamily: "Outfit" }}
        >
          My mission is to help businesses and individuals communicate their
          unique value through exceptional visual design.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div 
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div 
          className="px-4 text-center"
          variants={childVariants}
        >
          <Hammer className="w-12 h-12 mx-auto text-blue-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Excellence in Craft
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Continuously improving my skills and staying current with design
            trends and technologies.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="px-4 text-center"
          variants={childVariants}
        >
          <TrendingUp className="w-12 h-12 mx-auto text-green-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Client Success
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Measuring my success by the results my clients achieve with their
            new designs.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="px-4 text-center"
          variants={childVariants}
        >
          <ShieldCheck className="w-12 h-12 mx-auto text-purple-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Ethical Practice
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Maintaining honesty, transparency, and integrity in all client
            relationships.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          className="px-4 text-center"
          variants={childVariants}
        >
          <Sparkles className="w-12 h-12 mx-auto text-pink-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Creative Innovation
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Pushing creative boundaries while respecting proven design
            principles.
          </p>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="mt-20 h-40 rounded-xl grid grid-cols-2 items-center md:grid-cols-4 gap-8 text-center"
        variants={containerVariants}
      >
        <motion.div variants={childVariants}>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">25+</div>
          <div className="text-gray-600">Projects Completed</div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">96%</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1.5+</div>
          <div className="text-gray-600">Years Experience</div>
        </motion.div>
        <motion.div variants={childVariants}>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">6+</div>
          <div className="text-gray-600">Happy Clients</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhatDrivesMe;