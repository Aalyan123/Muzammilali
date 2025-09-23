import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img1 from '../assets/ProductPost2.jpg';
import img2 from '../assets/Realestate5.jpg';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

export default function AdditionalServices() {
  // Reference for the section to detect when it comes into view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Animation variants for cards with stagger
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  return (
    <section className="bg-[#F9FAFB] py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Poppins' }}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Additional Services
          </motion.h2>
          <motion.p
            className="mt-3 text-lg md:text-xl text-[#4A5D6E]"
            style={{ fontFamily: 'Outfit' }}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Specialized offerings to support your complete design needs
          </motion.p>
        </div>

        {/* Cards container: stacks on small screens, row on md+ */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-start">
          {/* Card 1 */}
          <motion.article
            className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <img
              src={img1}
              alt="Brand identity"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>
                Brand Identity Development
              </h3>
              <p className="mt-4 text-base md:text-[17px] text-[#845565]" style={{ fontFamily: 'Outfit' }}>
                Build a strong, cohesive brand identity that sets you apart from the competition. Complete visual system including logo, colors, typography, and guidelines.
              </p>
              <Link to="/portfolio" className="inline-flex items-center mt-5 text-blue-500 font-semibold hover:text-blue-700">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src={arrow} alt="arrow" className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            <img
              src={img2}
              alt="Creative marketing"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>
                Creative Marketing Strategy
              </h3>
              <p className="mt-4 text-base md:text-[17px] text-[#845565]" style={{ fontFamily: 'Outfit' }}>
                Tailored marketing plans designed to amplify your brand presence and engage your target audience effectively across all platforms.
              </p>
              <Link to="/portfolio" className="inline-flex items-center mt-5 text-blue-500 font-semibold hover:text-blue-700">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src={arrow} alt="arrow" className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}