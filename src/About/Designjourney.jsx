import React from 'react'
import muzammil from "../assets/Muzammil.png";

const Designjourney = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16"> {/* overall page padding */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="lg:w-1/2 py-8">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{fontFamily:"Poppins"}}
          >
            My Design <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Journey</span>
          </h2>
          <p 
            className="py-6 text-base sm:text-lg lg:text-xl text-[#4c4d54]"
            style={{fontFamily:"Outfit"}}
          >
            I discovered my passion for design in college, fascinated by how visuals spark emotion 
            and connection. Since then, I’ve helped startups and brands share their stories through 
            thoughtful, problem-solving design. With a degree in Visual Communications, I bring a 
            strong foundation in color, typography, and strategy to every project.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-around">
          <img
            className="w-56 sm:w-72 md:w-96 lg:w-[20rem] object-contain"
            src={muzammil}
            alt="Muzammil"
          />
        </div>
      </div>
    </div>
  )
}

export default Designjourney
