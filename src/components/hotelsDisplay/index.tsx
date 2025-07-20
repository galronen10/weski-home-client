import React from 'react';
import { useHotelSearch } from '../../hooks/useHotelSearch';
import { HotelCard } from '../hotelCard';
import './hotelDisplay.scss';
import { resortMap } from '../../types/resorts.interface';
import { formatDateRange } from '../../helpers';

export const HotelsDisplay: React.FC = () => {
  const { hotels, hotelDTO } = useHotelSearch();

  return (
    <div className="app-container">
      <div className="header-section">
        <h1 className="header-title">Select your ski trip</h1>
        {hotelDTO ? (
          <p className="header-subtitle">
            {hotels.length} ski trips options •
            {resortMap.get(hotelDTO.ski_site)} •{' '}
            {formatDateRange(hotelDTO.from_date, hotelDTO.to_date)} •
            {hotelDTO.group_size} people
          </p>
        ) : (
          <></>
        )}
      </div>

      <div className="hotel-list-container">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
