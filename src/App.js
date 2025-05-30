import React, { useState } from 'react';
import BreweryNavbar from './components/BreweryNavbar';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import ContactPage from './pages/ContactPage';
import UsPage from './pages/UsPage';
import BreweryFooter from './components/BreweryFooter';
import ReturnPolicy from './pages/ReturnPolicy';
import TestimonialPage from './pages/TestimonialPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'store':
        return <StorePage />;
      case 'contact':
        return <ContactPage />;
      case 'us':
        return <UsPage />;
      case 'policy':
        return <ReturnPolicy />;
      case 'testimonials':
        return <TestimonialPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans bg-white flex flex-col min-h-screen">
      <BreweryNavbar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <BreweryFooter />
    </div>
  );
};

export default App;

// DONE