import React from "react";
import { ArrowRight } from "lucide-react";

const Herosection = () => {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden 
      bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_33%,#ddd6fe_66%,#fbcfe8_100%)]"
    >
      {/* Subtle floating radial lights */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-200 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-200 opacity-15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl w-full">
          {/* Elegant heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gray-800 font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug"
            style={{ fontFamily: "Poppins" }}
          >
            Transforming Ideas Into
            <br />
            <span className="font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Visual Brilliance
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 md:mt-8 font-light tracking-wide leading-relaxed px-2 sm:px-4"
            style={{ fontFamily: "Outfit" }}
          >
            Where innovation meets elegance in digital design
          </p>

          {/* Accent line */}
          <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto mt-4 sm:mt-6 rounded-full"></div>

          {/* Buttons Container - Moved up on mobile */}
          <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-none mx-auto">
            {/* Primary Button */}
            <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
              px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base
              rounded-lg sm:rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 
              flex items-center justify-center w-full sm:w-auto"
              style={{ fontFamily: "Poppins" }}
            >
              View All Skills
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button
              className="group px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base
              rounded-lg sm:rounded-full border-2 border-black 
              bg-transparent transition-all duration-300 hover:scale-105 transform 
              hover:bg-black hover:shadow-lg w-full sm:w-auto"
            >
              <span
                className="text-black font-medium tracking-wider 
                transition-colors duration-300 group-hover:text-white"   
                style={{ fontFamily: "Poppins" }}
              >
                Let's Work Together
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Herosection;