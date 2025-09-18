import React from "react";
import { Hammer, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";


 

const WhatDrivesMe = () => {
  return (
    <div className="bg-[#F9FAFB] w-full py-16 px-6 sm:px-10">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          What{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Drives
          </span>{" "}
          Me
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl mt-3 text-[#4c4d54]"
          style={{ fontFamily: "Outfit" }}
        >
          My mission is to help businesses and individuals communicate their
          unique value through exceptional visual design.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="px-4 text-center">
          <Hammer className="w-12 h-12 mx-auto text-blue-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Excellence in Craft
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Continuously improving my skills and staying current with design
            trends and technologies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="px-4 text-center">
          <TrendingUp className="w-12 h-12 mx-auto text-green-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Client Success
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Measuring my success by the results my clients achieve with their
            new designs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="px-4 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto text-purple-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Ethical Practice
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Maintaining honesty, transparency, and integrity in all client
            relationships.
          </p>
        </div>

        {/* Card 4 */}
        <div className="px-4 text-center">
          <Sparkles className="w-12 h-12 mx-auto text-pink-600" />
          <h3
            className="text-xl sm:text-2xl font-semibold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Creative Innovation
          </h3>
          <p
            className="text-base sm:text-lg text-[#4c4d54] mt-3"
            style={{ fontFamily: "Outfit" }}
          >
            Pushing creative boundaries while respecting proven design
            principles.
          </p>
        </div>
      </div>
          {/* Stats Section (Optional) */}
        <div className="mt-20 h-40 rounded-xl grid grid-cols-2 items-center md:grid-cols-4 gap-8 text-center
" >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">96%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1.5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">6+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </div>
    </div>
  );
};

export default WhatDrivesMe;
