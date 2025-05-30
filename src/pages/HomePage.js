import React from 'react';
import BreweryHeader from '../components/BreweryHeader';
import BreweryAbout from '../components/BreweryAbout';
import BreweryMissionVision from '../components/BreweryMissionVision';

const HomePage = () => {
  return (
    <div className="font-sans bg-white">
      <BreweryHeader />
      <BreweryAbout />
      <BreweryMissionVision />
    </div>
  );
};

export default HomePage;