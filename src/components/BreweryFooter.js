import React from 'react';

const BreweryFooter = () => {
  // SVG Icons
  const MapIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const EnvelopeIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">DIRECCIÓN</h3>
            <div className="flex items-start">
              <MapIcon />
              <p>Calle Principal 123, Ciudad de Paris, Francia</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">SITIO WEB</h3>
            <a href="www.Coldbrew.com" className="hover:text-amber-400 transition">www.Coldbrew.com</a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">CONTACTO RÁPIDO</h3>
            <div className="flex items-center mb-2">
              <PhoneIcon />
              <span>+593 98 123 4567</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon />
              <span>info@Coldbrew.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Cold Brew S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default BreweryFooter;

// DONE