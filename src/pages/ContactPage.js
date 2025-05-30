import React from 'react';
import BreweryContactCard from '../components/BreweryContactCard';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">CONTACTO</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <BreweryContactCard />
      </div>
    </div>
  );
};

export default ContactPage;