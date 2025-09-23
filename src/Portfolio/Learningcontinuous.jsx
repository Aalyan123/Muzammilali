import React, { useRef } from "react";
import { Sparkles, Layers, User, Compass, Figma } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ContinuousLearning = () => {
  const learningData = [
    { id: 1, title: "Advanced motion graphics techniques", icon: Sparkles },
    { id: 2, title: "Sustainable design practices", icon: Layers },
    { id: 3, title: "Accessibility in design", icon: User },
    { id: 4, title: "Emerging social media platform requirements", icon: Compass },
    { id: 5, title: "AI-assisted design tools and workflows", icon: Figma },
  ];

  // Reference for the section to detect when it comes into view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for the section header, paragraph, and subheading
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for list items with stagger
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
  };

  return (
    <section
      className="bg-gray-100 py-10 sm:py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center"
      ref={ref}
    >
      <div className="container mx-auto max-w-2xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        {/* Section Header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center"
          style={{ fontFamily: "Poppins" }}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Continuous{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Learning
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 text-center"
          style={{ fontFamily: "Outfit" }}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          I'm committed to continuous learning and professional growth. I regularly
          participate in design workshops, online courses, and industry conferences
          to stay current with emerging trends, new technologies, and evolving best practices.
        </motion.p>

        {/* Subheading */}
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-left sm:text-center"
          style={{ fontFamily: "Poppins" }}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          Recent Learning Initiatives:
        </motion.h3>

        {/* Learning List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-600">
          {learningData.map((item, index) => (
            <motion.li
              key={item.id}
              className="flex items-center p-4 sm:p-5 rounded-xl bg-white shadow-sm border border-gray-200
                         transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.01]"
              variants={listItemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <item.icon size={18} className="sm:size-6" />
              </div>
              <span className="ml-3 sm:ml-4 text-sm sm:text-base font-medium text-gray-800">
                {item.title}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContinuousLearning;