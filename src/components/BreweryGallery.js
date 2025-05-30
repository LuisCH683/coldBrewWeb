import React from 'react';

const BreweryGallery = () => {
  const images = [
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0dSw9a9GmOcYyX10bjsZMu7Wi9At5EN3G4gTf",
    "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc06dAFDLVFtni9pklCcebwvoumN4D1UEQ3aHWZ"
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-12">NUESTRA FÁBRICA</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-xl h-64">
              <img 
                src={img} 
                alt={`Fábrica Cold Brew ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="px-6 py-2 bg-amber-400 text-gray-900 font-bold rounded-full">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreweryGallery;