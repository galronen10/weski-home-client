import React, { createContext, useEffect, useRef, useState } from 'react';
import { Hotel, IHotelSearchDTO } from './types/hotel.interface';
import { Socket } from 'socket.io-client';
import socket from './socket';

interface HotelSearchContextValue {
  hotels: Hotel[];
  hotelDTO: IHotelSearchDTO | null;
  search: (query: IHotelSearchDTO) => void;
}

export const HotelSearchContext = createContext<HotelSearchContextValue | null>(
  null,
);

export const HotelSearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [hotelDTO, setHotelDTO] = useState<IHotelSearchDTO | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = socket;

    socket.on('hotel-result', (hotelsFromServer: Hotel[]) => {
      setHotels((prev) =>
        [...prev, ...hotelsFromServer].sort((a, b) => a.price - b.price),
      );
    });

    return () => {
      socket.off('hotel-result');
    };
  }, []);

  const search = (query: IHotelSearchDTO) => {
    if (!socketRef.current) return;

    setHotelDTO(query);
    setHotels([]);
    socketRef.current.emit('hotel-search', query);
  };

  return (
    <HotelSearchContext.Provider value={{ hotels, hotelDTO, search }}>
      {children}
    </HotelSearchContext.Provider>
  );
};
