import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FeaturedParksCards from './FeaturedParks';
import HeroImageAndSearch from './HeroImageAndSearch';
import ParkNews from './ParkNews';
import ViewByState from './ViewByState';
import Login from '../Header/Login'

export default function Homepage() {
  return (
    <div>
      <HeroImageAndSearch />
      <FeaturedParksCards />
      <ParkNews />
    </div>
  );
}
