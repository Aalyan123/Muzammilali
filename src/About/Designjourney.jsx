import React from 'react'
import muzammil from "../assets/Muzammil.jpeg"
 const Designjourney = () => {
  return (
    <div className="min-h-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
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
              I discovered my passion for design in college, fascinated by how visuals spark emotion 
              and connection. Since then, I've helped startups and brands share their stories through 
              thoughtful, problem-solving design. With a degree in Visual Communications, I bring a 
              strong foundation in color, typography, and strategy to every project.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <img
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                src={muzammil}
                alt="Muzammil"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Designjourney