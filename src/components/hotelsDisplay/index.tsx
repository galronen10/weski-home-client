import React from 'react';
import { useHotelSearch } from '../../hooks/useHotelSearch';
import { HotelCard } from '../hotelCard';
import './hotelDisplay.scss';

export const HotelsDisplay: React.FC = () => {
  const { hotels } = useHotelSearch();

  return (
    <div className="app-container">
      <div className="header-section">
        <h1 className="header-title">Select your ski trip</h1>
        <p className="header-subtitle">
          98 ski trips options • La Plagne • Dec 1 - Dec 12 • 4 people
        </p>
      </div>

      <div className="hotel-list-container">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
