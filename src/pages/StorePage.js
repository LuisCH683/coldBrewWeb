import React, { useState } from 'react';
import { products } from '../mock/products';
import CheckoutPage from '../components/CheckoutPage';

const StorePage = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const categories = [...new Set(products.map(product => product.category))];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  if (showCheckout) {
    return <CheckoutPage cartItems={cart} onBackToStore={() => setShowCheckout(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">NUESTRAS CERVEZAS</h1>
          <button 
            onClick={() => setShowCheckout(true)}
            className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
            <span className="mr-2">Ver Carrito</span>
            {cart.length > 0 && (
              <span className="bg-amber-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-amber-600">Categorías</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button className="hover:text-amber-500 transition">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <p className="text-gray-700 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-600">${product.price}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition"
                      >
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;

// DONE