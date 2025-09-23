import React, { useEffect, useRef, useState } from "react";
import Muzammil from "../assets/Muzammil.jpeg"

// Mock assets for demo - replace with your actual imports
const muzammil = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
const arrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233B82F6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='m12 5 7 7-7 7'/%3E%3C/svg%3E";

const OwnerIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full px-6 md:px-16 lg:px-24 py-12"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <img
            className="w-56 sm:w-72 rounded-full md:w-80 lg:w-[22rem] object-contain hover:scale-105 transition-transform duration-500 shadow-lg hover:shadow-xl"
            src={Muzammil}
            alt="Muzammil Ali"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left flex-1">
          {/* Heading */}
          <h2 
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{
              fontFamily: "Poppins",
              transitionDelay: '0.4s'
            }}
          >
            Meet Muzammil Ali
          </h2>

          {/* First Paragraph */}
          <p 
            className={`text-base sm:text-xl mt-6 leading-relaxed text-gray-700 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{
              fontFamily: "Outfit",
              transitionDelay: '0.6s'
            }}
          >
           I help brands and businesses go from concept to polished visuals without the stress. From logos and social media posts to ad creatives and product designs, I make sure everything is consistent, engaging, and tailored to your audience. I focus on practical design solutions, quick turnarounds, and yes — a good cup of chai + music keeps me going while I work.
          </p>

          {/* Second Paragraph */}
          <p 
            className={`text-base sm:text-xl mt-6 leading-relaxed text-gray-700 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{
              fontFamily: "Outfit",
              transitionDelay: '0.8s'
            }}
          >
           Outside design, I enjoy traveling, trying new flavors, and reflecting on the wonders of creation that inspire my creativity.
          </p>

          {/* Learn More Link */}
          <div 
            className={`flex items-center justify-center md:justify-start gap-2 cursor-pointer mt-8 transform transition-all duration-1000 ease-out hover:gap-3 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
            onClick={() => {
              // Replace with your navigation logic
              console.log('Navigate to about page');
            }}
          >
            <p className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
              Learn More About My Journey
            </p>
            <img 
              className="w-4 h-4 mt-1 transform transition-transform duration-200 hover:translate-x-1" 
              src={arrow} 
              alt="Arrow" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default OwnerIntro;