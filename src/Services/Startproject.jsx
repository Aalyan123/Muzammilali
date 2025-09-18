import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Startproject = () => {
  const projectDetails = [
    {
      title: "Email Response",
      value: "Within 24 hours",
    },
    {
      title: "Project Timeline",
      value: "1-2 weeks typical",
    },
    {
      title: "Revisions",
      value: "Unlimited",
    }
  ];

  return (
    <div className="bottom-0 left-0 w-full z-50 text-black py-16 px-6 text-center bg-[linear-gradient(135deg,#ffffff_0%,#e0e7ff_33%,#ddd6fe_66%,#fbcfe8_100%)]">
      <h2 className="text-2xl md:text-3xl font-bold" style={{fontFamily:"Poppins"}}>
        Ready to Start Your Project?
      </h2>
      <p className="mt-4 text-xl max-w-2xl mx-auto" style={{fontFamily:"Outfit"}}>
        Let's discuss your design needs and create something amazing together. Get in touch
        for a free consultation and project quote.
      </p>

      {/* Buttons with Lucide icons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to='/contact'>
        {/* Button 1 */}
        <a
          className="bg-white text-lg text-black font-medium rounded-full px-8 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg" style={{fontFamily:"Poppins"}}
        >
          Start Your Project
          <ArrowRight className="w-5 h-5" />
        </a>
        </Link>

        {/* Button 2 */}
        <Link to='/'>
        <a
          href="mailto:example@email.com"
          className="border text-lg border-black-400 text-black font-medium rounded-full px-8 py-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300" style={{fontFamily:"Poppins"}}
        >
          <Mail className="w-5 h-5" />
          contact@muzammilali.site
        </a>
        </Link>
      </div>

      {/* Project Details - Added under buttons */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {projectDetails.map((detail, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-gray-600 mb-1">{detail.title}</p>
            <p className="text-lg font-semibold text-gray-900">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startproject;
