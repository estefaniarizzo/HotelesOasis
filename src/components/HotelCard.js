import React from 'react';

const HotelCard = ({ hotel, onSelectHotel }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-2xl p-7 m-4 max-w-sm mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-t-3xl"></div>
      <h3 className="text-3xl font-extrabold text-gray-900 mb-3 mt-2">{hotel.name}</h3>
      <p className="text-gray-700 mb-5 text-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {hotel.location}
      </p>
      <div className="flex justify-between items-center mb-5 text-gray-800">
        <span className="text-base font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          Capacidad: {hotel.maxCapacity}
        </span>
        <span className="text-base font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 110-6 3 3 0 010 6z" />
          </svg>
          Habitaciones: {hotel.availableRooms}
        </span>
      </div>
      <button
        onClick={() => onSelectHotel(hotel)}
        className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 text-lg font-semibold shadow-lg transform hover:-translate-y-1"
      >
        Explorar
      </button>
    </div>
  );
};

export default HotelCard;

// DONE