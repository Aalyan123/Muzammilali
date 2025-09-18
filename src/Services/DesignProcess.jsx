import React from "react";

const DesignProcess = () => {
  return (
    <div className="py-19 px-4 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
        My Design Process
      </h2>
      <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mt-6 mx-auto mb-8" style={{fontFamily:"Outfit"}}>
        A proven methodology that ensures exceptional results for every project
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
        {/* Step 01: Discovery */}
        <div className="flex flex-col items-center mt-10">
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
        </div>

        {/* Step 02: Strategy */}
        <div className="flex flex-col items-center mt-10">
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
        </div>

        {/* Step 03: Design */}
        <div className="flex flex-col items-center mt-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>03</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Design
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Creating initial concepts and refining them based on your feedback.
          </p>
        </div>

        {/* Step 04: Delivery */}
        <div className="flex flex-col items-center mt-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-semibold" style={{fontFamily:"Poppins"}}>04</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2" style={{fontFamily:"Poppins"}}>
            Delivery
          </h3>
          <p className="text-gray-600 text-sm sm:text-base w-70" style={{fontFamily:"Outfit"}}>
            Finalizing designs and delivering all files with ongoing support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;