import React from "react";
import img1 from "../assets/graphicimg.PNG";
import img2 from "../assets/graphicimg2.PNG";
import img3 from "../assets/graphicimg3.PNG";
import img4 from "../assets/graphicimg4.PNG";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Cardssection = () => {
  return (
    <>
      {/* Product Design Section */}
      <div className="w-full bg-[#F9FAFB] px-8 md:px-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 py-12">
          <div className="flex-1">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold" style={{fontFamily:"Poppins"}}>
              Product Design
            </h1>
            <p className="text-[#5B6874] text-base sm:text-lg md:text-[19px] py-4" style={{fontFamily:"Outfit"}}>
              Transform your product concepts into compelling visual realities
              that attract customers and drive sales. My product design services
              encompass everything from initial concept development to final
              production-ready designs.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold" style={{fontFamily:"Poppins"}}>Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-5 list-disc pl-6 text-[#5B6874] marker:text-blue-600 marker:text-lg" style={{fontFamily:"Outfit"}}>
              <li>Concept Development & Research</li>
              <li>Production-Ready Files</li>
              <li>Design Refinement & Iteration</li>
              <li>Market Positioning Strategy</li>
            </ul>
            <Link to='/contact'>
             <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-md text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-2xl shadow-amber-300 drop-shadow-xl"
              src={img1}
              alt="Graphic Design"
            />
          </div>
        </div>
      </div>

      {/* Creative Solutions Section */}
      <div className="w-full bg-[#F9FAFB] px-8 md:px-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 py-12">
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-2xl shadow-gray-300 drop-shadow-xl"
              src={img2}
              alt="Creative Design"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold" style={{fontFamily:"Poppins"}}>
              Web Design
            </h1>
            <p className="text-[#5B6874] text-base sm:text-lg md:text-[19px] py-4" style={{fontFamily:"Outfit"}}>
              Create stunning, responsive websites that engage visitors and
              convert them into customers. My web design services focus on
              combining beautiful aesthetics with intuitive user experience.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold" style={{fontFamily:"Poppins"}}>Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-5 list-disc pl-6 text-[#5B6874] marker:text-blue-600 marker:text-lg" style={{fontFamily:"Outfit"}}>
              <li>Responsive Design</li>
              <li>User Experience Optimization</li>
              <li>SEO-Friendly Structure</li>
              <li>Performance Optimization</li>
            </ul>
               <Link to='/contact'>
           <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-md text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
   </Link>
          </div>
        </div>
      </div>

      {/* Social Media Design Section */}
      <div className="w-full bg-[#F9FAFB] px-8 md:px-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 py-12">
          <div className="flex-1">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold" style={{fontFamily:"Poppins"}}>
              Social Media Design
            </h1>
            <p className="text-[#5B6874] text-base sm:text-lg md:text-[19px] py-4" style={{fontFamily:"Outfit"}}>
              Boost your social media presence with eye-catching graphics that
              stop the scroll and drive engagement. My social media design
              services help you maintain a consistent, professional brand
              presence.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold" style={{fontFamily:"Poppins"}}>Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-5 list-disc pl-6 text-[#5B6874] marker:text-blue-600 marker:text-lg" style={{fontFamily:"Outfit"}}>
              <li>Platform-Optimized Graphics</li>
              <li>Brand Consistency</li>
              <li>Brand Consistency</li>
              <li>Template Creation</li>
            </ul>
            <Link to='/contact'>
            <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-md text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-2xl shadow-gray-300 drop-shadow-xl"
              src={img3}
              alt="Graphic Design"
            />
          </div>
        </div>
      </div>

      {/* Print Materials Section */}
      <div className="w-full bg-[#F9FAFB] px-8 md:px-28">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 py-12">
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-2xl shadow-gray-300 drop-shadow-xl"
              src={img4}
              alt="Creative Design"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold" style={{fontFamily:"Poppins"}}>
              Print Materials
            </h1>
            <p className="text-[#5B6874] text-base sm:text-lg md:text-[19px] py-4" style={{fontFamily:"Outfit"}}>
              Make a lasting impression with professionally designed print
              materials that reflect your brand's quality and attention to
              detail. From business cards to large-format displays.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold" style={{fontFamily:"Poppins"}}>Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-5 list-disc pl-6 text-[#5B6874] marker:text-blue-600 marker:text-lg" style={{fontFamily:"Outfit"}}>
              <li>Print-Ready Files</li>
              <li>Color Management</li>
              <li>Production Coordination</li>
              <li>Quality Assurance</li>
            </ul>
              <Link to='/contact'>
           <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-md text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardssection;