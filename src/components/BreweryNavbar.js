import React from 'react';

const BreweryNavbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-amber-400">
            COLD BREW
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="hover:text-amber-400 transition">
              Inicio
            </button>
            <button 
              onClick={() => setCurrentPage('store')}
              className="hover:text-amber-400 transition">
              Tienda
            </button>
            <button 
              onClick={() => setCurrentPage('us')}
              className="hover:text-amber-400 transition">
              Nosotros
            </button>
            <button 
              onClick={() => setCurrentPage('testimonials')}
              className="hover:text-amber-400 transition">
              Testimonios
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:text-amber-400 transition">
              Contacto
            </button>
            <button 
              onClick={() => setCurrentPage('policy')}
              className="hover:text-amber-400 transition">
              Politicas y Términos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BreweryNavbar;