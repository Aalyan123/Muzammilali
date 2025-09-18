import React from 'react'

const Faqs = () => {
  return (
    <div className='bg-white h-auto w-auto' style={{fontFamily:"Poppins"}}>
        <div className='text-center mt-22 '>
            <h2 className='text-4xl font-bold' >Frequently Asked Questions</h2>
            <p className='text-gray-600 text-xl mt-4'>Common questions about my design services</p>
        </div>
         <div className="px-4 py-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            How long does a typical project take?
          </h3>
          <p className="mt-3 text-gray-600">
            Project timelines vary depending on scope and complexity. Simple projects like business cards might take 1-2 weeks,
            while comprehensive brand identity projects can take 4-6 weeks. I'll provide a detailed timeline in your project proposal.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Do you work with small businesses and startups?
          </h3>
          <p className="mt-3 text-gray-600">
            Absolutely! I love working with businesses of all sizes and have experience creating effective designs for startups,
            small businesses, and established companies. I offer flexible packages to accommodate different budgets.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            What if I'm not happy with the initial designs?
          </h3>
          <p className="mt-3 text-gray-600">
            Client satisfaction is my top priority. I include multiple revision rounds in every project and will work with you until
            you're completely happy with the result. Clear communication throughout the process ensures we stay aligned.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Do you provide printing services?
          </h3>
          <p className="mt-3 text-gray-600">
           While I don't print materials myself, I work with trusted printing partners and can coordinate the printing process for you to ensure the best quality results. I'll provide print-ready files with all necessary specifications.
          </p>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Faqs