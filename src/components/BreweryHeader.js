import React from 'react';

const BreweryHeader = () => {
  return (
    <header className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img 
        src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0HkJ3nZRcSojWGwvDPb4hl1EOXpnTeqzCZR0g" 
        alt="Fábrica Cold Brew" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">COLD BREW S.A.</h1>
        <p className="text-xl text-white max-w-2xl">Desde 1971, elaborando excelencia en cada sorbo</p>
      </div>
    </header>
  );
};

export default BreweryHeader;