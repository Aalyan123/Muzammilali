import React from "react";

const Topbanner = () => {
  return (
    <div
      className="relative mt-8 sm:mt-12 grid place-items-center min-h-[16rem] sm:min-h-[20rem] w-full 
      overflow-hidden 
      bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_25%,#ddd6fe_60%,#fbcfe8_100%)] 
      px-3 sm:px-6 text-center rounded-b-[5rem] shadow-md"
    >
      {/* Floating Radial Lights */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-6 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-12 right-6 w-36 h-36 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Banner Content */}
      <div className="relative z-10 px-2">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-4 sm:mb-6 leading-snug"
          style={{ fontFamily: "Poppins" }}
        >
          About Muzammil Ali </h1>
          <br />
          <span className="font-semibold text-lg sm:text-2xl text-black" style={{ fontFamily: "Poppins" }}>
            Passionate{" "}
            <span className="text-white rounded bg-gradient-to-b from-blue-800 via-purple-700">
              designer, strategic thinker, creative
            </span>{" "}
            problem solver
          </span>
       
      </div>
    </div>
  );
};

export default Topbanner;
