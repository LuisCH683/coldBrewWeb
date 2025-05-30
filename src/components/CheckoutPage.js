import React, { useState } from 'react';
import PaymentMethods from './PaymentMethods';
import CartSummary from './CartSummary';

const CheckoutPage = ({ cartItems, onBackToStore }) => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handlePaymentSuccess = (message) => {
    setPaymentMessage(message);
    setPaymentCompleted(true);
  };

  if (paymentCompleted) {
    cartItems = cartItems.filter(item => false);
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <svg 
              className="text-green-500 w-16 h-16 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Pago Completado!</h2>
            <p className="text-gray-600 mb-6">{paymentMessage}</p>
            <p className="text-gray-700 mb-6">
              Hemos enviado los detalles de tu pedido a tu correo electrónico.
            </p>
            <button
              onClick={onBackToStore}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition duration-200">
              Volver a la Tienda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Finalizar Compra</h1>
            <PaymentMethods total={total} onPaymentSuccess={handlePaymentSuccess} />
          </div>
          <div className="lg:col-span-1">
            <CartSummary 
              items={cartItems} 
              onCheckout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

// DONE