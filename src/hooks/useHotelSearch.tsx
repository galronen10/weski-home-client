import { useContext } from 'react';
import { HotelSearchContext } from '../hotelSearchContext';

export const useHotelSearch = () => {
  const context = useContext(HotelSearchContext);
  if (!context)
    throw new Error('useHotelSearch must be used within HotelSearchProvider');
  return context;
};
