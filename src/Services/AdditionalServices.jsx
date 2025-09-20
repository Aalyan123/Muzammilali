import React from 'react'
import img1 from '../assets/ProductPost2.jpg'
import img2 from '../assets/Realestate5.jpg'
import arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'

export default function AdditionalServices() {
  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins' }}>
            Additional Services
          </h2>
          <p className="mt-3 text-lg md:text-xl text-[#4A5D6E]" style={{ fontFamily: 'Outfit' }}>
            Specialized offerings to support your complete design needs
          </p>
        </div>

        {/* Cards container: stacks on small screens, row on md+ */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-start">

          {/* Card 1 */}
          <article className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <img
              src={img1}
              alt="Brand identity"
              className="w-full h-48 md:h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>
                Brand Identity Development
              </h3>

              <p className="mt-4 text-base md:text-[17px] text-[#845565]" style={{ fontFamily: 'Outfit' }}>
                Build a strong, cohesive brand identity that sets you apart from the competition. Complete visual system including logo, colors, typography, and guidelines.
              </p>

              <Link to="/portfolio" className="inline-flex items-center mt-5 text-blue-500 font-semibold hover:text-blue-700">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src={arrow} alt="arrow" className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2">
            <img
              src={img2}
              alt="Creative marketing"
              className="w-full h-48 md:h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins' }}>
                Creative Marketing Strategy
              </h3>

              <p className="mt-4 text-base md:text-[17px] text-[#845565]" style={{ fontFamily: 'Outfit' }}>
                Tailored marketing plans designed to amplify your brand presence and engage your target audience effectively across all platforms.
              </p>

              <Link to="/portfolio" className="inline-flex items-center mt-5 text-blue-500 font-semibold hover:text-blue-700">
                <span className="flex items-center gap-2">
                  Learn More
                  <img src={arrow} alt="arrow" className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
