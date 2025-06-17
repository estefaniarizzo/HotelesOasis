import React, { useState } from 'react';
import { calculateTotalPrice, isDateOccupied, getSeason } from '../utils/helpers';

const HotelDetail = ({ hotel, onBack }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [numPeople, setNumPeople] = useState(1);
  const [roomType, setRoomType] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);

  const handleCalculate = () => {
    if (!selectedDate) {
      alert('Por favor, selecciona una fecha.');
      return;
    }
    const season = getSeason(selectedDate);
    const price = calculateTotalPrice(hotel, numRooms, numPeople, roomType, season);
    setTotalPrice(price);
    setShowCalculation(true);
  };

  const isDateAvailable = selectedDate ? !isDateOccupied(selectedDate, hotel.occupiedDates) : true;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 m-4 max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-gray-600 hover:text-gray-900 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a Hoteles
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">{hotel.name}</h2>
      <p className="text-gray-700 mb-6">{hotel.location}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="date" className="block text-gray-700 text-sm font-semibold mb-2">Fecha de Viaje:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setShowCalculation(false);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isDateAvailable ? 'border-gray-300 focus:ring-black' : 'border-red-500 focus:ring-red-500'}`}
          />
          {!isDateAvailable && <p className="text-red-500 text-xs mt-1">Fecha ocupada. Por favor, elige otra.</p>}
        </div>

        <div>
          <label htmlFor="rooms" className="block text-gray-700 text-sm font-semibold mb-2">Número de Habitaciones:</label>
          <input
            type="number"
            id="rooms"
            min="1"
            max={hotel.availableRooms}
            value={numRooms}
            onChange={(e) => {
              setNumRooms(Math.max(1, Math.min(hotel.availableRooms, parseInt(e.target.value))));
              setShowCalculation(false);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="people" className="block text-gray-700 text-sm font-semibold mb-2">Número de Personas:</label>
          <input
            type="number"
            id="people"
            min="1"
            max={hotel.maxCapacity}
            value={numPeople}
            onChange={(e) => {
              setNumPeople(Math.max(1, Math.min(hotel.maxCapacity, parseInt(e.target.value))));
              setShowCalculation(false);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="roomType" className="block text-gray-700 text-sm font-semibold mb-2">Tipo de Alojamiento:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => {
              setRoomType(e.target.value);
              setShowCalculation(false);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            {Object.keys(hotel.roomTypes).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} ({hotel.roomTypes[type].count} disponibles)
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!selectedDate || !isDateAvailable}
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 text-lg font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calcular Tarifa
      </button>

      {showCalculation && (
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Resumen de Tarifa</h3>
          <p className="text-lg text-gray-700 mb-2">
            Temporada: <span className="font-semibold">{getSeason(selectedDate) === 'high' ? 'Alta' : 'Baja'}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Tipo de Alojamiento: <span className="font-semibold">{roomType.charAt(0).toUpperCase() + roomType.slice(1)}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Habitaciones: <span className="font-semibold">{numRooms}</span>, Personas: <span className="font-semibold">{numPeople}</span>
          </p>
          <p className="text-3xl font-extrabold text-green-600 mt-4">
  Total: {totalPrice.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 3,
    maximumFractionDigits: 6
  })}
</p>

          <button
            onClick={() => alert('¡Reserva realizada con éxito! (Simulado)')}
            className="mt-6 bg-green-600 text-white py-3 px-8 rounded-xl hover:bg-green-700 transition-colors duration-300 text-lg font-semibold shadow-md"
          >
            Confirmar Reserva
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelDetail;