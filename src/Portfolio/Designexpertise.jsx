import React from "react";
import { Award } from 'lucide-react';
import { motion } from "framer-motion";

const ComprehensiveDesignExpertise = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-5 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-xl xs:max-w-2xl sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* Main Content Card */}
        <motion.div
          className={`bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-lg 
                     p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 
                         w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 
                         bg-gradient-to-br from-purple-100 to-blue-100 rounded-full 
                         -translate-y-6 xs:-translate-y-8 sm:-translate-y-10 md:-translate-y-14 lg:-translate-y-20 
                         translate-x-6 xs:translate-x-8 sm:translate-x-10 md:translate-x-14 lg:translate-x-20 opacity-30"></div>
          
          <div className="absolute bottom-0 left-0 
                         w-10 h-10 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 
                         bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full 
                         translate-y-5 xs:translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-14 
                         -translate-x-5 xs:-translate-x-6 sm:-translate-x-8 md:-translate-x-10 lg:-translate-x-14 opacity-30"></div>

          {/* Header with Icon */}
          <div className="flex flex-col sm:flex-row items-start gap-3 xs:gap-4 sm:gap-6 relative z-10">
            <div className="p-2.5 xs:p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-purple-500 to-pink-500 
                           rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0">
              <Award className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            
            <div className="flex-1 w-full">
              <h2
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 
                          mb-3 xs:mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: 'Poppins' }}
              >
                Comprehensive Design Expertise
              </h2>

              {/* Decorative Line */}
              <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 
                             rounded-full mb-3 xs:mb-4 sm:mb-6"></div>

              {/* Main Description */}
              <p
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 
                          leading-relaxed max-w-prose sm:max-w-3xl lg:max-w-5xl"
                style={{ fontFamily: 'Outfit' }}
              >
                My diverse skill set combines{' '}
                <span className="font-semibold text-blue-600">technical proficiency</span>{' '}
                with{' '}
                <span className="font-semibold text-purple-600">creative vision</span>, 
                enabling me to tackle complex design challenges and deliver professional-quality results. 
                I continuously invest in learning new techniques and staying current with industry trends 
                to provide my clients with{' '}
                <span className="font-semibold text-pink-600">cutting-edge design solutions</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveDesignExpertise;