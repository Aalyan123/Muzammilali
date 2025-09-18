import React, { useState } from 'react'
import FiverrGig1 from "../assets/FiverrGig1.jpg"
import FiverrGig2 from "../assets/FiverrGig2.jpg"
import FiverrGig3 from "../assets/FiverrGig3.jpg"
import FiverrGig4 from "../assets/FiverrGig4.jpg"
import Social1 from "../assets/SocialmediaDesign1.jpg"
import Social2 from "../assets/SocialmediaDesign2.jpg"
import Social3 from "../assets/SocialmediaDesign3.jpg"
import Social4 from "../assets/SocialmediaDesign4.jpg"
import Social5 from "../assets/SocialmediaDesign5.jpg"
import Social6 from "../assets/SocialmediaDesign6.jpg"
import Social7 from "../assets/SocialmediaDesign7.jpg"
import real1 from "../assets/Realestate1.jpg"
import real2 from "../assets/Realestate2.jpg"
import real3 from "../assets/Realestate3.jpg"
import real4 from "../assets/Realestate4.jpg"
import real5 from "../assets/Realestate5.jpg"
import real6 from "../assets/RealEstate6.jpg"
import real7 from "../assets/Realestate7.jpg"
import product1 from "../assets/ProductPost1.jpg"
import product2 from "../assets/ProductPost2.jpg"
import product3 from "../assets/ProductPost3.jpg"
import product4 from "../assets/ProductPost4.jpg"
import product5 from "../assets/ProductPost5.jpg"
import reastaurant1 from "../assets/FoodDesign1.jpg"
import reastaurant2 from "../assets/Fooddesign2.jpg"
import reastaurant3 from "../assets/FoodDesign3.jpg"
import reastaurant4 from "../assets/FoodDesign4.jpg"
import reastaurant5 from "../assets/FoodDesign5.jpg"

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);

  // Define your images with descriptions for each category
  const imageData = {
    All: [
      // One representative image from each category
      { image: product1, title: 'Product Advertisement', description: 'Professional product advertisement design with compelling visuals' },
      { image: Social1, title: 'Social Media Post', description: 'Engaging Instagram post design' },
      { image: real1, title: 'Property Showcase', description: 'Luxury property marketing design' },
      { image: reastaurant1, title: 'Restaurant Menu Design', description: 'Elegant restaurant menu with appetizing food photography' },
       { image: product4, title: 'Clothing Post Design', description: 'Engaging Instagram post with modern aesthetics' },
       { image: Social3, title: 'Story Template Design', description: 'Creative Instagram story template for engagement' },
        { image: reastaurant2, title: 'Chicken Biryani Post Design', description: 'Engaging Instagram post with modern aesthetics' },
         { image: reastaurant5, title: 'Restaurant Post Design', description: 'Engaging Instagram post with modern aesthetics' },
    ],
    'Product design': [
      { image: product1, title: 'Headphone Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: product2, title: 'Sneaker Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: product3, title: 'Headphone Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: product4, title: 'Clothing Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: product5, title: 'Ice-Cream Post Design', description: 'Engaging Instagram post with modern aesthetics' },
    ],
    'Social Media design': [
      { image: Social1, title: 'Instagram Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: Social2, title: 'Facebook Cover Design', description: 'Professional Facebook cover with brand elements' },
      { image: Social3, title: 'Story Template Design', description: 'Creative Instagram story template for engagement' },
      { image: Social4, title: 'Social Media Banner', description: 'Eye-catching banner for social platforms' },
      { image: Social5, title: 'Brand Post Design', description: 'Branded social media post with call-to-action' },
      { image: Social6, title: 'Social Content Design', description: 'Professional social media content layout' },
      { image: Social7, title: 'Food Post Design', description: 'Professional social media content layout' }
    ],
    'Real State': [
      { image: real1, title: 'Luxury Property Showcase', description: 'High-end property marketing material' },
      { image: real2, title: 'Property Listing Flyer', description: 'Professional real estate listing design' },
      { image: real3, title: 'Real Estate Brochure', description: 'Elegant property brochure with details' },
      { image: real4, title: 'Modern Home Listing', description: 'Contemporary home presentation design' },
      { image: real5, title: 'Real Estate Marketing', description: 'Professional property marketing banner' },
      { image: real6, title: 'Property Portfolio', description: 'Complete real estate portfolio design' },
      { image: real7, title: 'Property Marketing Post', description: 'Complete real estate portfolio design' }
    ],
    'Restaurant': [
      { image: reastaurant1, title: 'Pizza Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: reastaurant2, title: 'Chicken Biryani Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: reastaurant3, title: 'Biryani Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: reastaurant4, title: 'Pizza Post Design', description: 'Engaging Instagram post with modern aesthetics' },
      { image: reastaurant5, title: 'Restaurant Post Design', description: 'Engaging Instagram post with modern aesthetics' },
    ],
    'Fiverr Gig': [
      { image: FiverrGig1, title: 'Professional Gig Design', description: 'Eye-catching Fiverr gig thumbnail design' },
      { image: FiverrGig2, title: 'Service Gig Layout', description: 'Professional service presentation for Fiverr' },
      { image: FiverrGig3, title: 'Creative Gig Template', description: 'Modern Fiverr gig design template' },
      { image: FiverrGig4, title: 'Business Gig Design', description: 'Professional business service gig layout' }
    ]
  };

  const categories = [
    'All',
    'Product design',
    'Social Media design',
    'Real State',
    'Restaurant',
    'Fiverr Gig'
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const openPreview = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  // --- UPDATED: show only the images in imageData['All'] when activeCategory === 'All'
  const getImagesToShow = () => {
    if (activeCategory === 'All') {
      return imageData['All'] || [];
    }
    return imageData[activeCategory] || [];
  };

  return (
    <div className='min-h-screen w-full bg-gray-50'>
      {/* Categories Section */}
      <div className='w-full pt-8'>
        <div className='grid grid-cols-2 px-7 gap-4 md:flex md:flex-row md:gap-5 items-center md:justify-center mt-10'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`group font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
              }`}
              style={{ fontFamily: "Poppins" }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Images Gallery Section */}
      <div className='w-full px-7 py-12'>
        <h2 className='text-4xl font-bold text-center mb-8 text-gray-800 ' style={{fontFamily: "Poppins"}}>
          {activeCategory} Portfolio
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {getImagesToShow().map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer'
              onClick={() => openPreview(item.image)}
            >
              <div className='aspect-square overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/e5e7eb/9ca3af?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-gray-800 mb-2' style={{fontFamily: "Poppins"}}>
                  {item.title}
                </h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Overlay - Amazon Style */}
      {previewImage && (
        <div 
          className='fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex items-center justify-center z-50 p-4'
          onClick={closePreview}
        >
          {/* Blurred Background Content */}
          <div className='absolute inset-0 overflow-hidden'>
            <div className='w-full h-full bg-gray-50 opacity-30'></div>
          </div>
          
          <div className='relative max-w-5xl max-h-full z-10'>
            {/* Close Button */}
            <button
              onClick={closePreview}
              className='absolute -top-16 right-0 bg-white rounded-full p-3 shadow-lg text-gray-600 text-xl font-bold hover:text-gray-800 hover:shadow-xl transition-all duration-200'
              style={{fontFamily: "Poppins"}}
            >
              ✕
            </button>
            
            {/* Enlarged Image */}
            <div className='bg-black rounded-lg shadow-2xl p-4'>
              <img
                src={previewImage}
                alt="Preview"
                className='max-w-full max-h-[80vh] object-contain rounded-lg'
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/e5e7eb/9ca3af?text=Image+Not+Found';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;