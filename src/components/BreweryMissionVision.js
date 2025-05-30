import React from 'react';

const BreweryMissionVision = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">NUESTRA MISIÓN</h2>
            <p className="text-gray-700 leading-relaxed">
              Producir cervezas de la más alta calidad, innovando constantemente en sabores y procesos para satisfacer las expectativas de nuestros consumidores. Nos comprometemos con la sostenibilidad, implementando prácticas responsables en toda nuestra cadena de valor y promoviendo el consumo responsable de alcohol.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">NUESTRA VISIÓN</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser la cervecería más reconocida en el mercado por su calidad, innovación y compromiso con la sustentabilidad. Aspiramos a expandir nuestra presencia en mercados internacionales y convertirnos en un referente en la industria cervecera global.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreweryMissionVision;