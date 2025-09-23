import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Hook for in-view detection
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full bg-white px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
        className="flex flex-col justify-center items-center py-12 text-center"
      >
        <h1 className="text-black text-2xl sm:text-3xl font-bold" style={{ fontFamily: "Poppins" }}>
          Tailored Solutions for Every Need
        </h1>
        <p className="text-[#5B6874] text-base sm:text-lg md:text-[19px] py-4 max-w-4xl" style={{ fontFamily: "Outfit" }}>
          I offer a full range of graphic design services, each tailored to help
          you achieve your specific goals. From brand identity development to
          digital marketing materials, I combine creative expertise with
          strategic thinking to deliver designs that not only look exceptional
          but also drive real business results.
        </p>
      </motion.div>
    </div>
  );
};

export default About;