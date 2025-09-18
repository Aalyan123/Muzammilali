import React from "react";
import muzammil from "../assets/Muzammil.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";


const OwnerIntro = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <img
          className="w-56 sm:w-72 md:w-80 lg:w-[22rem] object-contain"
          src={muzammil}
          alt="Muzammil Ali"
        />

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{fontFamily:"Poppins"}}>
            Meet Muzammil Ali
          </h2>

          <p className="text-base sm:text-xl mt-6 leading-relaxed text-gray-700"  style={{fontFamily:"Outfit"}}>
            With over a year of dedicated experience in graphic design, I've had
            the privilege of working with diverse clients across various
            industries. My journey began with a passion for visual storytelling
            and has evolved into a comprehensive design practice focused on
            creating meaningful connections between brands and their audiences.
          </p>

          <p className="text-base sm:text-xl mt-6 leading-relaxed text-gray-700"  style={{fontFamily:"outfit"}}>
            I believe that great design goes beyond aesthetics—it solves
            problems, communicates effectively, and creates emotional
            connections. Every project is an opportunity to blend creativity with
            strategy, ensuring that your visual identity not only looks
            exceptional but also drives real business results.
          </p>

          {/* Learn More */}
          <Link to="/about">
          <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer mt-8">
            <p className="text-blue-600 font-medium">
              Learn More About My Journey
            </p>
            <img className="w-4 h-4 mt-1" src={arrow} alt="Arrow" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerIntro;
