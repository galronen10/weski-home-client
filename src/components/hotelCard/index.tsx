import React from 'react';
import { Hotel } from '../../types/hotel.interface';
import { RatingDisplay } from '../ratingDisplay';
import './hotelCard.scss';

interface props {
  hotel: Hotel;
}
export const HotelCard: React.FC<props> = ({ hotel }) => {
  return (
    <div className="cardContainer">
      <img
        className="image"
        src={hotel.imageUrl}
        alt={hotel.name}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/600x400/E0E0E0/333333?text=${hotel.name}`;
        }}
      />

      <div className="detailsContainer">
        <div className="detailsData">
          <h2 className="name">{hotel.name}</h2>

          <div className="flex items-center mb-2">
            <RatingDisplay rating={hotel.rating} />
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            {/* <MapPinIcon className="h-5 w-5 text-gray-500 mr-2" />{' '} */}
            <span>La Plagne</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4 md:my-auto"></div>

        <div className="flex justify-end items-baseline mt-auto">
          <span className="text-3xl font-bold text-gray-900">
            £{hotel.price.toLocaleString()}
          </span>
          <span className="text-gray-600 ml-2">/ per person</span>
        </div>
      </div>
    </div>
  );
};
