import React from 'react';
import BreweryUs from '../components/BreweryUs';

const UsPage = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">
      <header className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img 
        src="coldBrewUs.jpeg" 
        alt="Nosotros Cold Brew" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">NOSOTROS</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <BreweryUs />
      </div>
    </div>
  );
};

export default UsPage;