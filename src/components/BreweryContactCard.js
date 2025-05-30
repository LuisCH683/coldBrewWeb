import React from 'react';

const BreweryContactCard = () => {
  // SVG Icons
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

  const GlobeIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto mt-12 mb-12">
      <h2 className="text-2xl font-bold text-amber-400 mb-6">CONTÁCTANOS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <PhoneIcon /> Teléfonos
          </h3>
          <ul className="space-y-2">
            <li><span className="font-medium">Central:</span> +593 98 123 4567</li>
            <li><span className="font-medium">Ventas:</span> +593 98 765 4321</li>
            <li><span className="font-medium">Servicio al Cliente:</span> +593 98 901 2345</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <EnvelopeIcon /> Correos
          </h3>
          <ul className="space-y-2">
            <li><span className="font-medium">General:</span> info@Coldbrew.com</li>
            <li><span className="font-medium">Ventas:</span> ventas@Coldbrew.com</li>
            <li><span className="font-medium">Soporte:</span> soporte@Coldbrew.com</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <GlobeIcon /> Redes
          </h3>
          <ul className="space-y-2">
            <li>Instagram: @ColdBrewSA</li>
            <li>Facebook: facebook.com/ColdBrewSA</li>
            <li>Twitter: @ColdBrewSA</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <ClockIcon /> Horarios
          </h3>
          <ul className="space-y-2">
            <li>Lunes a Viernes: 9:00 AM - 5:00 PM</li>
            <li>Sábado: 10:00 AM - 2:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreweryContactCard;

// DONE