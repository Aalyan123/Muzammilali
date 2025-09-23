import React from 'react'
import muzammil from "../assets/Muzammil.jpeg"
import { motion } from "framer-motion"

const Designjourney = () => {
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
      className="min-h-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Text Section */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={childVariants}
          >
            <h2 
              className="text-xl sm:text-5xl font-bold mb-6 lg:mb-8 leading-tight"
              style={{fontFamily:"Poppins"}}
            >
              My Design{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-xl text-[#4c4d54] leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{fontFamily:"Outfit"}}
            >
               I help brands and businesses go from concept to polished visuals without the stress. From logos and social media posts to ad creatives and product designs, I make sure everything is consistent, engaging, and tailored to your audience. I focus on practical design solutions, quick turnarounds, and yes — a good cup of chai + music keeps me going while I work.
            <br/><br/>
               Outside design, I enjoy traveling, trying new flavors, and reflecting on the wonders of creation that inspire my creativity.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            variants={childVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <img
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                src={muzammil}
                alt="Muzammil"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Designjourney