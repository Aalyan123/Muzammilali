import React from 'react';
import { Star, Target, Users, Code } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Innovative design solutions that push creative boundaries while maintaining professional standards and brand consistency.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Thinking",
      description: "Every design decision is backed by research and strategy, ensuring your visual identity aligns with business goals and market positioning.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused Approach",
      description: "Collaborative partnership approach with clear communication, regular updates, and unlimited revisions until you're completely satisfied.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Tools & Techniques",
      description: "Proficient in industry-standard software including Adobe Creative Suite and Canva Pro, staying current with design trends and technologies.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F6FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-6" style={{fontFamily:"Poppins"}}>
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Muzammil Ali</span>?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{fontFamily:"Outfit"}}>
            Combining creative excellence with strategic thinking to deliver design solutions that not only look amazing but also achieve your business objectives.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16 rounded-full"></div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon with Gradient */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 style={{fontFamily:"Poppins"}} className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-md" style={{fontFamily:"Outfit"}}> 
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section (Optional) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" >
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
    </section>
  );
};

export default WhyChooseUs;