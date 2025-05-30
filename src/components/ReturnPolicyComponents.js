import React from 'react';
import { FaClock, FaLock, FaUserShield, FaCreditCard, FaShoppingBag, FaBirthdayCake, FaBalanceScale, FaCookieBite, FaExclamationTriangle, FaCheckCircle, FaEnvelope} from 'react-icons/fa';

// Encabezado
export const ReturnPolicyHeader = () => (
  <div className="mb-12 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Políticas y Términos</h1>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      En Coldbrew, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
    </p>
  </div>
);

// Contenido principal
export const ReturnPolicyContent = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs border-l-4 border-amber-500">
    <p className="text-gray-700 mb-4">
      En Coldbrew, nuestra prioridad es ofrecer productos de alta calidad y garantizar la satisfacción 
      de nuestros clientes. Debido a la naturaleza perecedera de nuestras cervezas, no aceptamos 
      devoluciones de productos una vez entregados, excepto en los siguientes casos:
    </p>
  </div>
);

// Casos de devolución aceptados
export const ReturnPolicyCases = () => {
  const cases = [
    {
      icon: <FaExclamationTriangle className="text-red-500 text-xl" />,
      title: "Producto dañado",
      description: "El producto llegó dañado o en mal estado."
    },
    {
      icon: <FaCheckCircle className="text-blue-500 text-xl" />,
      title: "Producto equivocado",
      description: "Se entregó un producto diferente al solicitado."
    },
    {
      icon: <FaClock className="text-amber-500 text-xl" />,
      title: "Cantidad incorrecta",
      description: "El pedido no corresponde con la cantidad solicitada."
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Casos aceptados para devolución:</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cases.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-xs border border-gray-100">
            <div className="flex items-center mb-2">
              {item.icon}
              <h3 className="ml-2 font-medium text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sección de recolección de datos
export const DataCollectionSection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs border-l-4 border-blue-500">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <FaLock className="mr-2 text-blue-500" /> Datos que recopilamos
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>Nombre, correo electrónico, teléfono y dirección de entrega</li>
      <li>Información de pago (nunca almacenamos los datos completos de tarjetas de crédito)</li>
    </ul>
  </div>
);

// Sección de propósitos
export const PurposeSection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs border-l-4 border-amber-500">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Finalidad del tratamiento</h2>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>Procesar pedidos y entregas</li>
      <li>Enviar promociones, novedades y contenido relacionado con nuestros productos</li>
      <li>Cumplir con obligaciones legales</li>
    </ul>
  </div>
);

// Sección de compartir datos
export const DataSharingSection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <FaUserShield className="mr-2 text-green-500" /> Compartir datos
    </h2>
    <p className="text-gray-700">
      Tus datos no serán compartidos con terceros, salvo que sea necesario para procesar el envío o por requerimiento legal.
    </p>
  </div>
);

// Sección de derechos del usuario
export const UserRightsSection = () => (
  <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Tus derechos</h2>
    <p className="text-gray-700 mb-4">
      Tienes derecho a: acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales.
    </p>
    <p className="text-gray-700">
      Para ejercer estos derechos, envía un correo a:{' '}
      <a href="mailto:privacidad@coldbrew.com" className="text-blue-600 font-medium hover:underline">
        privacidad@coldbrew.com
      </a>
    </p>
  </div>
);

// Sección de términos y condiciones
export const TermsSection = () => (
  <div className="mb-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Términos y Condiciones de Uso</h2>
    <p className="text-gray-700">
      El uso de este sitio web implica la aceptación plena de los siguientes términos:
    </p>
  </div>
);

// Requisito de edad
export const AgeRequirement = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs flex items-start">
    <FaBirthdayCake className="text-red-500 text-xl mt-1 mr-3" />
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Edad legal</h3>
      <p className="text-gray-600">
        Al comprar en nuestro sitio, declaras tener al menos 18 años.
      </p>
    </div>
  </div>
);

// Sección de productos
export const ProductsSection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs flex items-start">
    <FaShoppingBag className="text-green-500 text-xl mt-1 mr-3" />
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Productos</h3>
      <p className="text-gray-600">
        Las descripciones, precios y disponibilidad pueden cambiar sin previo aviso.
      </p>
    </div>
  </div>
);

// Sección de pagos
export const PaymentsSection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs flex items-start">
    <FaCreditCard className="text-purple-500 text-xl mt-1 mr-3" />
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Pagos</h3>
      <p className="text-gray-600">
        Aceptamos pagos seguros mediante tarjetas bancarias y plataformas autorizadas.
      </p>
    </div>
  </div>
);

// Propiedad intelectual
export const IntellectualProperty = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs">
    <h3 className="font-semibold text-gray-800 mb-2">Propiedad intelectual</h3>
    <p className="text-gray-600">
      Todo el contenido del sitio (textos, imágenes, logotipos) es propiedad de Coldbrew.
    </p>
  </div>
);

// Limitación de responsabilidad
export const LiabilitySection = () => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-xs flex items-start">
    <FaBalanceScale className="text-gray-500 text-xl mt-1 mr-3" />
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Limitación de responsabilidad</h3>
      <p className="text-gray-600">
        No nos hacemos responsables por interrupciones del servicio o errores fuera de nuestro control.
      </p>
      <p className="text-gray-600 mt-2">
        Nos reservamos el derecho de modificar estos términos en cualquier momento.
      </p>
    </div>
  </div>
);

// Sección de cookies
export const CookiesSection = () => (
  <div className="mb-8 bg-purple-50 p-6 rounded-lg border border-purple-100">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <FaCookieBite className="mr-2 text-purple-500" /> Aviso de Cookies
    </h2>
    <p className="text-gray-700 mb-4">
      Este sitio web utiliza cookies propias y de terceros para:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
      <li>Mejorar la experiencia del usuario</li>
      <li>Analizar el tráfico web</li>
      <li>Personalizar contenido publicitario</li>
    </ul>
    <p className="text-gray-700">
      Puedes aceptar o rechazar el uso de cookies en la configuración de tu navegador. Al continuar navegando, aceptas nuestro uso de cookies.
    </p>
  </div>
);

// Pie de página con información de contacto
export const ReturnPolicyFooter = () => (
  <div className="mb-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
    <div className="flex items-start">
      <FaEnvelope className="text-amber-600 text-xl mt-1 mr-3" />
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Procedimiento para devoluciones:</h3>
        <p className="text-gray-700 mb-2">
          En cualquiera de estos casos, el cliente deberá notificarlo dentro de las primeras 48 horas 
          posteriores a la recepción, adjuntando evidencia fotográfica al correo:
        </p>
        <a href="mailto:atencion@coldbrew.com" className="text-amber-600 font-medium hover:underline">
          atencion@coldbrew.com
        </a>
        <p className="text-gray-700 mt-4 font-medium">
          No se aceptarán devoluciones por cambios de opinión.
        </p>
      </div>
    </div>
  </div>
);