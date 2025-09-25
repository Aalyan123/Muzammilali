import React from "react";
import { Eye, Monitor, Palette, Printer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Services = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8 text-blue-400 transition-transform duration-300 group-hover:-translate-x-4 group-hover:scale-102" />,
      title: "Brand Identity Design",
      description: "Create memorable brand identities that resonate with your target audience and differentiate you from competitors.",
      items: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection"],
      gradient: "from-blue-500/10 to-purple-500/10",
      border: "border-blue-400/1"
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-400 transition-transform duration-300 group-hover:-translate-x-4 group-hover:scale-102" />,
      title: "Web Design",
      description: "Design responsive, user-friendly websites that convert visitors into customers and enhance your online presence.",
      items: ["Responsive Design", "UI/UX Optimization", "Landing Pages", "E-commerce Design"],
      gradient: "from-green-500/10 to-cyan-500/10",
      border: "border-green-400/1"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400 transition-transform duration-300 group-hover:-translate-x-4 group-hover:scale-102" />,
      title: "Social Media Design",
      description: "Develop engaging visual content for social platforms that builds community and drives engagement.",
      items: ["Post Templates", "Story Designs", "Ad Creatives", "Profile Optimization"],
      gradient: "from-pink-500/10 to-rose-500/10",
      border: "border-pink-400/1"
    },
    {
      icon: <Printer className="w-8 h-8 text-orange-400 transition-transform duration-300 group-hover:-translate-x-4 group-hover:scale-102" />,
      title: "Print Materials",
      description: "Design professional print collateral that makes a lasting impression and supports your marketing goals.",
      items: ["Business Cards", "Brochures", "Flyers", "Packaging Design"],
      gradient: "from-orange-500/10 to-amber-500/10",
      border: "border-orange-400/1"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
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
    <section className="py-17 px-6 lg:px-20 bg-[#F9FAFB]">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16" style={{ fontFamily: "Poppins" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Our   <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
               Design Services
              </span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto" style={{ fontFamily: "Outfit" }}>
          All stuff from brand identity to digital marketing.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-br-4xl rounded-bl-4xl rounded-tl-4xl backdrop-blur-sm bg-gradient-to-br ${service.gradient} border ${service.border} hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden`}
            variants={childVariants}
          >
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Poppins" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed mb-6" style={{ fontFamily: "Outfit" }}>
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center text-sm">
                    <span className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      
      <div className="flex justify-center mt-14" style={{ fontFamily: "Poppins" }}>
        <Link to='/services'>
         <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
      </div>
     
    </section>
  );
};

export default Services;