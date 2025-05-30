import React from 'react';

const BreweryUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">Responsabilidad Social y Sostenibilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              <div>
                <h3 className="flex items-center text-lg font-semibold">La empresa ha implementado un programa de sostenibilidad que incluye:</h3>
                <ul>
                  <li><span className="font-medium">⁠Uso eficiente del agua y energía en todos los procesos de producción.</span></li>
                  <li><span className="font-medium">Reciclaje y reducción de desechos, minimizando el impacto ambiental.</span></li>
                  <li><span className="font-medium">⁠Apoyo a comunidades locales, promoviendo empleo y capacitación en el sector cervecero.</span></li>
                  <li><span className="font-medium">Promoción del consumo responsable mediante campañas educativas y eventos de sensibilización.</span></li>
                </ul>
              </div>
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2">Valores Corporativos</h2>
            <p className="text-gray-700 leading-relaxed">
              <div>
                <ul>
                  <li><span className="font-medium">Calidad: </span>Compromiso con la excelencia en cada etapa del proceso productivo.</li>
                  <li><span className="font-medium">Innovación: </span>Desarrollo continuo de nuevos sabores y productos.</li>
                  <li><span className="font-medium">⁠Sostenibilidad: </span>Minimización del impacto ambiental y uso responsable de los recursos.</li>
                  <li><span className="font-medium">Trabajo en equipo: </span>Crecimiento basado en la colaboración y el respeto.</li>
                  <li><span className="font-medium">Responsabilidad Social: </span>Apoyo a comunidades locales y promoción del consumo moderado.</li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreweryUs;

// DONE