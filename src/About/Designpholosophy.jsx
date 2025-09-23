import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/philosophyimg.jpg";

const Designphilosophy = () => {
  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation variants for text subsections
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 }
    })
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Hooks for in-view detection
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="px-4 sm:px-8 lg:px-16 bg-[#F9FAFB] py-12">
      {/* Heading */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={headerVariants}
        className="text-center"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          My Design{" "}
          <span
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            style={{ fontFamily: "Poppins" }}
          >
            Philosophy
          </span>
        </h2>
        <p
          className="text-center mt-3 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
          style={{ fontFamily: "Outfit" }}
        >
          The principles that guide every design decision I make
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-12 gap-10 md:gap-16">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="max-w-lg"
        >
          {[
            {
              title: "Clarity",
              description: "Ensuring that the message is communicated clearly and efficiently. Whether it's a logo that instantly conveys a brand's personality or a website layout that guides users intuitively through their journey, clarity is paramount."
            },
            {
              title: "Impact",
              description: "The emotional and psychological effect of the design. Great design doesn't just inform – it inspires, motivates, and creates lasting impressions. I strive to create designs that not only catch the eye but also touch the heart and mind."
            },
            {
              title: "Authenticity",
              description: "Every design truly represents the client's unique identity and values. I don't believe in one-size-fits-all solutions. Instead, I take the time to understand each client's story, goals, and audience."
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={textVariants}
              className="mt-8 first:mt-0"
            >
              <h4
                className="font-bold text-xl sm:text-2xl"
                style={{ fontFamily: "Poppins" }}
              >
                {section.title}
              </h4>
              <p
                className="mt-2 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
                style={{ fontFamily: "Outfit" }}
              >
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md shadow-black"
            src={img}
            alt="Design philosophy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400/e5e7eb/9ca3af?text=Image+Not+Found';
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Designphilosophy;