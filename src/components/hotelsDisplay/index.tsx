import React from 'react';
import { useHotelSearch } from '../../hooks/useHotelSearch';

export const HotelsDisplay: React.FC = () => {
  const { hotels } = useHotelSearch();

  return (
    <div>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="p-2 border-b">
          <h3>{hotel.name}</h3>
          <p>
            {hotel.beds} beds • Rating: {hotel.rating} • ${hotel.price}
          </p>
          <img src={hotel.images[0]} alt={hotel.name} className="w-64" />
        </div>
      ))}
    </div>
  );
};
