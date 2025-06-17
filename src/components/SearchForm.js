import React, { useState } from 'react';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [roomType, setRoomType] = useState('standard');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setShowResults(false);

    try {
      const queryParams = new URLSearchParams({
        sede: location,
        fecha: checkInDate
      });

      const response = await fetch(`http://localhost:3001/disponibilidad?${queryParams}`);
      const data = await response.json();

      const formattedData = data.map(hotel => ({
        id: hotel.id,
        tipo: hotel.tipo,
        location: location,
        maxCapacity: hotel.capacidadMaxima,
        estimatedPrice: 1000, // Simulado
        season: 'alta' // Simulado
      }));

      setSearchResults(formattedData);
      setShowResults(true);
    } catch (error) {
      console.error("Error al consultar disponibilidad:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Buscar Habitaciones Disponibles</h2>

      <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="location" className="block text-gray-700 text-sm font-semibold mb-2">Ubicación:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ej. Barranquilla, Cali"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label htmlFor="checkInDate" className="block text-gray-700 text-sm font-semibold mb-2">Fecha de Entrada:</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label htmlFor="numPeople" className="block text-gray-700 text-sm font-semibold mb-2">Número de Personas:</label>
            <input
              type="number"
              id="numPeople"
              min="1"
              value={numPeople}
              onChange={(e) => setNumPeople(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label htmlFor="roomType" className="block text-gray-700 text-sm font-semibold mb-2">Tipo de Alojamiento:</label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            >
              <option value="standard">Estándar</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 text-lg font-semibold shadow-md"
        >
          Buscar Disponibilidad
        </button>
      </form>

      {showResults && (
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Resultados de Búsqueda</h3>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Habitación #{hotel.id}</h4>
                  <p className="text-gray-600 mb-2">Ubicación: {hotel.location}</p>
                  <p className="text-gray-700 mb-1">Tipo de Habitación: <span className="font-semibold">{hotel.tipo.charAt(0).toUpperCase() + hotel.tipo.slice(1)}</span></p>
                  <p className="text-gray-700 mb-1">Capacidad Máxima: <span className="font-semibold">{hotel.maxCapacity}</span> personas</p>
                  <p className="text-gray-700 mb-1">Fecha: <span className="font-semibold">{checkInDate}</span></p>
                  <p className="text-gray-700 mb-4">Temporada: <span className="font-semibold">{hotel.season === 'high' ? 'Alta' : 'Baja'}</span></p>
                  <p className="text-3xl font-extrabold text-green-600 mt-4">
                    Precio Estimado: ${hotel.estimatedPrice.toFixed(2)} MXN
                  </p>
                  <button
                    onClick={() => alert(`¡Reserva para habitación #${hotel.id} confirmada! (Simulado)`)}
                    className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-300 text-lg font-semibold shadow-md"
                  >
                    Reservar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-700 text-xl">No se encontraron habitaciones disponibles con los criterios seleccionados.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
