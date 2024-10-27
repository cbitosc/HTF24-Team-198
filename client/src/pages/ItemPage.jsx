import React from 'react';

const ItemPage = () => {
  return (
    <div>
      <h1 className='text-center text-red-500 text-lg'>Our Products</h1>

      {/* Main Flex Container */}
      <div className="flex flex-wrap justify-center mt-10">

        {/* Left Section - Product Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10">
          <h1 className='text-lg text-center'>Natural and Toxin-Free Cream</h1>
          <hr className="my-2 w-full" />
          <p className='mt-4 text-center'>
            Mamaearth products are marketed as being free of harmful chemicals like parabens, sulfates, mineral oil, and artificial fragrances.
            The brand uses natural ingredients, such as turmeric, neem, aloe vera, and onion, which are popular in Indian skincare for their effectiveness and cultural resonance.
          </p>
        </div>

        {/* Right Section - Product Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10">
          <img src='https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-cream1.jpg' className='h-64 object-contain' alt="Natural and Toxin-Free Cream" />
        </div>

          {/* Repeat Right Section - Product Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10">
          <img src='https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-cream1.jpg' className='h-64 object-contain' alt="Natural and Toxin-Free Cream" />
        </div>
        {/* Repeat Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10">
          <h1 className='text-lg text-center'>Natural and Toxin-Free Cream</h1>
          <hr className="my-2 w-full" />
          <p className='mt-4 text-center'>
            Mamaearth products are marketed as being free of harmful chemicals like parabens, sulfates, mineral oil, and artificial fragrances.
            The brand uses natural ingredients, such as turmeric, neem, aloe vera, and onion, which are popular in Indian skincare for their effectiveness and cultural resonance.
          </p>
        </div>
        {/* Left Section - Product Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-10">
          <h1 className='text-lg text-center'>Natural and Toxin-Free Cream</h1>
          <hr className="my-2 w-full" />
          <p className='mt-4 text-center'>
            Mamaearth products are marketed as being free of harmful chemicals like parabens, sulfates, mineral oil, and artificial fragrances.
            The brand uses natural ingredients, such as turmeric, neem, aloe vera, and onion, which are popular in Indian skincare for their effectiveness and cultural resonance.
          </p>
        </div>

        {/* Right Section - Product Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10">
          <img src='https://images.mamaearth.in/catalog/product/v/i/vit-c-glow-cream1.jpg' className='h-64 object-contain' alt="Natural and Toxin-Free Cream" />
        </div>

       

      </div>
    </div>
  );
};

export default ItemPage;
