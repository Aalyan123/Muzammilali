import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import img1 from "../assets/talhaashfaq.jpeg"
import img2 from "../assets/almezan.jpeg"
import img3 from "../assets/zaeemhussain.jpeg"
import img4 from "../assets/mmuzammil.jpeg"
import img5 from "../assets/tacos.jpeg"
import { motion } from "framer-motion"

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Tacos",
      designation: "Pizza Shop",
      comment: "The design makes our pizza look even more irresistible. The colors are vibrant, the layout is clean, and it instantly grabs attention. Exactly what a food brand needs. Feels modern, appetizing, and totally on-brand. Love it!",
      image: img5
    },
    {
      name: "Talha Ishfaq",
      designation: "App Developer",
      comment: "Muzammil designed a post for our institute that was exactly what we needed. Clean, creative, and very professional in every detail. His work made our announcement stand out.",
      image: img1
    },
    {
      name: "Al-Mezan",
      designation: "Banking",
      comment: "He created a unique post for Al-Mezan Banking that looked fresh and engaging. The colors and layout were perfectly balanced. It gave our campaign a modern and classy look.",
      image: img2
    },
    {
      name: "Zaeem Hussain",
      designation: "Video Editor",
      comment: "Really impressive work on the School admission poster. The design feels welcoming, the colors are bright, and the message is instantly clear. It's professional yet friendly and grabs attention right away.",
      image: img3
    },
    {
      name: "M. Muzammil",
      designation: "Frontend Developer",
      comment: "Really clean work! The colors and layout for my Linkedin banner feels balanced, and the text hierarchy is spot on. Super professional but still creative. This definitely stands out on LinkedIn.",
      image: img4
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const sectionVariants = {
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        {/* Header - Improved */}
        <motion.div 
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            style={{fontFamily:"Poppins"}}
          >
            Don't Just <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Take My</span> Words!
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 px-2 sm:px-0"
            style={{fontFamily:"Outfit"}}
          >
            See What <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Are Saying</span> About Their Experience
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100 mx-2 sm:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Quote Icon */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-blue-500/20">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Client Image with Info Below */}
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Client Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {testimonials[currentIndex].designation}
                </p>
              </div>
            </div>

            {/* Comment */}
            <div className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
                "{testimonials[currentIndex].comment}"
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-purple-500/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl translate-y-8 sm:translate-y-12 lg:translate-y-16 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;