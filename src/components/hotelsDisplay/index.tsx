import React from 'react';
import { useHotelSearch } from '../../hooks/useHotelSearch';
import { HotelCard } from '../hotelCard';

export const HotelsDisplay: React.FC = () => {
  const { hotels } = useHotelSearch();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl mb-8 text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Select your ski trip
        </h1>
        <p className="text-gray-600 text-sm">
          {hotels.length} ski trips options • La Plagne • Dec 1 - Dec 12 • 4
          people
        </p>
      </div>
      <div className="w-full max-w-4xl">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
