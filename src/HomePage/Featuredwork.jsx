import React from 'react'
import printDesign from "../assets/additionalimg.jpg"
import socialpost from "../assets/SocialmediaDesign7.jpg"
import Branding from "../assets/ProductPost3.jpg"
import food from "../assets/ProductPost5.jpg"
import socialMedia from "../assets/SocialmediaDesign6.jpg"
import realstate from "../assets/Realestate7.jpg"
import productDesign from "../assets/ProductPost2.jpg"
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Featuredwork = () => {

  const data = [
    {
      img: Branding,
      field: "Branding",
      title: "Brand Identity for Tech Startup",
      description: "Complete visual identity including logo, color palette, and brand guidelines"
    },
    {
      img: food,
      field: "Food Design",
      title: "Attractive Food Designing",
      description: "Modern, responsive website with seamless user experience"
    },
    {
      img: realstate,
      field: "Print Design",
      title: "Print Design Portfolio",
      description: "Creative and professional print design for marketing campaigns"
    },
    {
      img: productDesign,
      field: "Product Design",
      title: "Product Packaging Design",
      description: "Eye-catching packaging that stands out on retail shelves"
    },
    {
      img: socialMedia,
      field: "Social Media",
      title: "Social Media Campaign",
      description: "Engaging visual content for multi-platform social media presence"
    },
    {
      img: socialpost,
      field: "Social Media Post Design",
      title: "Enganing Social Media Post Designs",
      description: "Social Media Post Designs of the fields and Types."
    }
  ]

  return (
    <div className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold" style={{ fontFamily: "Poppins" }}>Featured Work</h2>
        <p className="text-lg font-normal text-[#364153] mt-4" style={{ fontFamily: "Outfit" }}>
          Explore a selection of recent projects that showcase my design expertise <br />
          and creative problem-solving approach.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Black gradient shadow (only on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text Overlay at Bottom-Left */}
            <div className="absolute bottom-4 left-4 text-white 
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-500 ease-out">
              <span className="text-lg font-medium text-white drop-shadow-md px-4 py-1 bg-blue-700 rounded-3xl">{item.field}</span>
              <h3 className="text-lg font-semibold mt-1 drop-shadow-md">{item.title}</h3>
              <p className="text-sm mt-1 max-w-xs drop-shadow-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button (outside grid) */}
      <div className="flex justify-center mt-14" style={{ fontFamily: "Poppins" }}>
       
        
            <Link to='/portfolio'>
          
             <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "Poppins" }}
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
      </div>
    </div>
  )
}

export default Featuredwork
