import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight, FaBeer, FaPlus, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TestimonialChatInteractive = ({ initialTestimonials, title = 'Lo que dicen nuestros clientes' }) => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    location: '',
    comment: '',
    rating: 5,
    icon: '🍺'
  });
  const formRef = useRef(null);

  // Efecto para el efecto de typing
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    
    const testimonialText = testimonials[currentTestimonial].comment;
    let i = -1;
    
    const typingInterval = setInterval(() => {
      if (i < testimonialText.length) {
        setDisplayedText(prev => prev + testimonialText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentTestimonial, testimonials]);

  // Efecto para cerrar el formulario al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNext = () => {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    } else {
      setCurrentTestimonial(0);
    }
  };

  const handlePrev = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    } else {
      setCurrentTestimonial(testimonials.length - 1);
    }
  };

  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.comment) {
      const testimonialToAdd = {
        ...newTestimonial,
        date: new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }),
        featured: false
      };

      setTestimonials([...testimonials, testimonialToAdd]);
      setNewTestimonial({
        name: '',
        location: '',
        comment: '',
        rating: 5,
        icon: '🍺'
      });
      setShowForm(false);
      setCurrentTestimonial(testimonials.length); // Muestra el nuevo testimonio
    }
  };

  const renderRating = (rating, interactive = false, onChange) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < rating ? 'text-amber-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
        onClick={interactive ? () => onChange(i + 1) : undefined}
      />
    ));
  };

  return (
    <div className="container max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden p-6 relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
          <FaBeer className="mr-2 text-amber-600" /> {title}
        </h2>
        <p className="text-gray-500">Navega por los testimonios y deja el tuyo</p>
      </div>

              {/* Botón flotante para agregar testimonio */}
        <div className="text-center mb-6">
          <button onClick={() => setShowForm(true)} className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
            <FaPlus className="mr-2" /> Añadir Testimonio
          </button>
          </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Header del chat */}
        <div className="flex items-center border-b border-gray-100 pb-4 mb-4">
          <div className="bg-amber-100 p-3 rounded-full">
            {testimonials[currentTestimonial].icon ? (
              <span className="text-2xl">{testimonials[currentTestimonial].icon}</span>
            ) : (
              <FaUser className="text-amber-600 text-xl" />
            )}
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h3>
            <p className="text-gray-500 text-sm">
              {testimonials[currentTestimonial].location}
              {testimonials[currentTestimonial].date && ` • ${testimonials[currentTestimonial].date}`}
            </p>
          </div>
          <div className="ml-auto flex">
            {renderRating(testimonials[currentTestimonial].rating || 5)}
          </div>
        </div>

        {/* Burbuja de chat */}
        <div className="bg-amber-50 rounded-xl p-4 mb-6 relative">
          <FaQuoteLeft className="absolute top-3 left-3 text-amber-200 text-xl" />
          <p className="text-gray-700 pl-6 pr-2 min-h-20">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>
        </div>

        {/* Controles de navegación */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <button 
            onClick={handlePrev}
            className="flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Anterior
          </button>
          
          <span className="text-gray-500 text-sm">
            {currentTestimonial + 1} / {testimonials.length}
          </span>
          
          <button 
            onClick={handleNext}
            className="flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            Siguiente <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {/* Formulario para agregar testimonio */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
          <div 
            ref={formRef}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Añade tu testimonio</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Tu nombre*</label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Ubicación (opcional)</label>
                <input
                  type="text"
                  value={newTestimonial.location}
                  onChange={(e) => setNewTestimonial({...newTestimonial, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Ej. Guadalajara, Jal."
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Icono representativo</label>
                <div className="flex space-x-2">
                  {['🍺', '🍻', '🍷', '🍹', '🍸', '🥃'].map((icon) => (
                    <button
                      key={icon}
                      onClick={() => setNewTestimonial({...newTestimonial, icon})}
                      className={`text-2xl p-2 rounded-full ${newTestimonial.icon === icon ? 'bg-amber-100' : 'hover:bg-gray-100'}`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Calificación</label>
                <div className="flex space-x-2 text-2xl">
                  {renderRating(newTestimonial.rating, true, (rating) => 
                    setNewTestimonial({...newTestimonial, rating})
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Tu testimonio*</label>
                <textarea
                  value={newTestimonial.comment}
                  onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-32"
                  placeholder="Cuéntanos tu experiencia con Coldbrew..."
                  required
                />
              </div>

              <button
                onClick={handleAddTestimonial}
                disabled={!newTestimonial.name || !newTestimonial.comment}
                className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 disabled:bg-amber-300 transition-colors"
              >
                Publicar Testimonio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Indicador de testimonio especial */}
      {testimonials[currentTestimonial].rating == 5 && (
        <div className="mt-4 text-center text-sm bg-amber-100 text-amber-800 py-2 px-4 rounded-full inline-block">
          ⭐ Testimonio destacado
        </div>
      )}
    </div>
  );
};

TestimonialChatInteractive.propTypes = {
  initialTestimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      location: PropTypes.string,
      icon: PropTypes.string,
      rating: PropTypes.number,
      featured: PropTypes.bool,
      date: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string
};

export default TestimonialChatInteractive;