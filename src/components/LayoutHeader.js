import React from 'react';

const LayoutHeader = ({ onNavigateHome, onNavigateSearch }) => {
  return (
    <header className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-3xl font-extrabold text-gray-900 cursor-pointer hover:text-black transition-colors"
          onClick={onNavigateHome}
        >
          Oasis Digital
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={onNavigateHome}
                className="text-gray-700 hover:text-black transition-colors text-lg font-medium"
              >
                Hoteles
              </button>
            </li>
            <li>
              <button
                onClick={onNavigateSearch}
                className="text-gray-700 hover:text-black transition-colors text-lg font-medium"
              >
                Buscar Habitaciones
              </button>
            </li>
            <li>
              <button
                onClick={() => alert('¡Contáctanos para más información! (Simulado)')}
                className="text-gray-700 hover:text-black transition-colors text-lg font-medium"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;