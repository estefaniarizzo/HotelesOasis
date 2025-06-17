import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels, onSelectHotel }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Nuestros Hoteles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onSelectHotel={onSelectHotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;