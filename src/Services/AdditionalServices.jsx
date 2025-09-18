import img1 from '../assets/additionalimg.jpg'
import img2 from '../assets/additionalimg2.png'
import arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'

const AdditionalServices = () => {
  return (
    <div className='h-190 bg-[#F9FAFB] '>
      <div className="flex flex-col w-auto h-auto">
      <span className='flex flex-col items-center '>
        <h2 className="text-3xl md:text-4xl md:font-bold font-bold mt-8" style={{fontFamily:"Poppins"}}>
          Additional Services
        </h2>
        <p className="mt-3 text-xl text-[#4A5D6E]" style={{fontFamily:"Outfit"}}>
          Specialized offerings to support your complete design needs
        </p>
        </span>
       {/* Cards Container */}
<div className="flex">
  
  {/* Card 1 */}
  <div className='ml-33 mt-20'>
    <div className="h-136 w-150 bg-white rounded-3xl shadow-xl shadow-gray-200 transform transition duration-300 hover:-translate-y-2">
      <img className='rounded-2xl' src={img1} />
      <h3 className="text-2xl font-bold ml-7" style={{fontFamily:"Poppins"}}>Brand Identity Development</h3>
      <p className="text-[17px] text-[#845565] ml-7 mt-6" style={{fontFamily:"Outfit"}}>
        Build a strong, cohesive brand identity that sets you apart from the competition. Complete visual system including logo, colors, typography, and guidelines.
      </p>
      <Link to='/portfolio'>
      <button className='mt-5 ml-7 text-blue-500 font-semibold hover:text-blue-700 cursor-pointer'>
        <span className='flex'>
          Learn More
          <img className='size-4 mt-1.5 ml-2' src={arrow} />
        </span>
      </button>
      </Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className='ml-10 mt-20'>
    <div className=" h-136 w-150 bg-white rounded-3xl shadow-xl shadow-gray-200 transition duration-300 hover:-translate-y-2">
      <img className='h-80 w-150 rounded-tl-3xl rounded-tr-3xl' src={img2} />
      <h3 className="text-2xl font-bold mt-4 ml-7" style={{fontFamily:"Poppins"}}>Creative Marketing Strategy</h3>
      <p className="text-[17px] text-[#845565] ml-7 mt-6" style={{fontFamily:"Outfit"}}>
        Tailored marketing plans designed to amplify your brand presence and engage your target audience effectively across all platforms.
      </p>
       <Link to='/portfolio'>
      <button className='mt-11 ml-7 text-blue-500 font-semibold hover:text-blue-700 cursor-pointer'>
        <span className='flex'>
          Learn More
          <img className='size-4 mt-1.5 ml-2' src={arrow} />
        </span>
      </button>
      </Link>
    </div>
  </div>

</div>

        
      </div>
    </div>
  )
}

export default AdditionalServices