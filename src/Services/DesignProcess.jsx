import React from "react";
import { motion } from "framer-motion";

const DesignProcess = () => {
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
      className="py-19 px-4 bg-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" 
        style={{fontFamily:"Poppins"}}
        variants={childVariants}
      >
        My Design Process
      </motion.h2>
      <motion.p 
        className="text-gray-600 text-sm sm:text-lg max-w-2xl mt-6 mx-auto mb-8" 
        style={{fontFamily:"Outfit"}}
        variants={childVariants}
      >
        A proven methodology that ensures exceptional results for every project
      </motion.p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
        {/* Step 01: Discovery */}
        <motion.div 
          className="flex flex-col items-center mt-10"
          variants={childVariants}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>01</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Discovery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Understanding your goals, audience, and requirements through detailed
            consultation.
          </p>
        </motion.div>

        {/* Step 02: Strategy */}
        <motion.div 
          className="flex flex-col items-center mt-10"
          variants={childVariants}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>02</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Strategy
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Developing a creative strategy and approach tailored to your specific
            needs.
          </p>
        </motion.div>

        {/* Step 03: Design */}
        <motion.div 
          className="flex flex-col items-center mt-10"
          variants={childVariants}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>03</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Design
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Creating initial concepts and refining them based on your feedback.
          </p>
        </motion.div>

        {/* Step 04: Delivery */}
        <motion.div 
          className="flex flex-col items-center mt-10"
          variants={childVariants}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>04</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Delivery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Finalizing designs and delivering all files with ongoing support.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DesignProcess;