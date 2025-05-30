import React from 'react';

const BreweryAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SOBRE COLD BREW S.A.</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            Cold Brew es una empresa líder en la producción, distribución y comercialización de cerveza a nivel nacional e internacional. Fundada en el año 1971, ha experimentado un crecimiento sostenido gracias a su compromiso con la calidad, la innovación y la sostenibilidad.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Nuestras instalaciones en París combinan tecnología de vanguardia con métodos artesanales heredados de generaciones de maestros cerveceros. Cada lote de Cold Brew pasa por rigurosos controles de calidad para garantizar que cada botella cumpla con nuestros estándares de excelencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BreweryAbout;