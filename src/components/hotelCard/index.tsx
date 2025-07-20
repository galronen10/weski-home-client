import React from 'react';
import { Hotel } from '../../types/hotel.interface';
import './hotelCard.scss';
import { RatingDisplay } from '../ratingDisplay';
import { PinRightIcon } from '@radix-ui/react-icons';
import { resortMap } from '../../types/resorts.interface';

interface props {
  hotel: Hotel;
}
export const HotelCard: React.FC<props> = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-card-image-section">
        <img
          src={hotel.imageUrl}
          alt={hotel.name}
          className="hotel-card-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/600x400/E0E0E0/333333?text=${hotel.name}`;
          }}
        />
      </div>

      <div className="hotel-card-details-section">
        <h2 className="hotel-name">{hotel.name}</h2>

        <div className="hotel-rating">
          <RatingDisplay rating={hotel.rating} />
        </div>

        <div className="hotel-location">
          <PinRightIcon className="location-icon" />
          <span>{resortMap.get(hotel.siteId)}</span>
        </div>

        <div className="separator-line"></div>

        <div className="hotel-price-section">
          <span className="hotel-price">£{hotel.price.toLocaleString()}</span>
          <span className="hotel-price-per-person">/ per person</span>
        </div>
      </div>
    </div>
  );
};
