import React from 'react';
import { ArrowRight } from 'lucide-react';
import Photoshop from "../assets/photoshop.png";
import Adobeillustrator from "../assets/adobeillustrator.png";
import Canva from "../assets/canva.png";

const Toolkit = () => {
  const skills = [
    {
      icon: Photoshop, // This should be the imported image path
      name: "Adobe Photoshop",
      shortName: "Ps",
      proficiency: 95,
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Adobeillustrator, // This should be the imported image path
      name: "Adobe Illustrator",
      shortName: "Ai",
      proficiency: 90,
      color: "from-orange-600 to-orange-800"
    },
    {
      icon: Canva, // This should be the imported image path
      name: "Canva Pro",
      shortName: "Canva",
      proficiency: 85,
      color: "from-teal-600 to-teal-800"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily:"Poppins"}}>
            Design <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily:"Outfit"}}>
            Proficient in industry-leading design tools and software, with a strong foundation in 
            design principles and creative problem-solving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
             
             {/* Image with White Background (if filter doesn't work) */}
<div className="w-28 h-16  rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ">
  <img 
    src={skill.icon}
    alt={skill.name}
    className="w-27 h-18 object-contain"
  />
</div>

              {/* Short Name Badge */}
              <div className="text-center mb-4" style={{fontFamily:"Poppins"}}>
                <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {skill.shortName}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6" style={{fontFamily:"Outfit"}}>
                {skill.name}
              </h3>

              {/* Proficiency Bar */}
              <div className="mb-4" style={{fontFamily:"Poppins"}}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Proficiency</span>
                  <span className="text-sm font-bold text-gray-900">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Toolkit;