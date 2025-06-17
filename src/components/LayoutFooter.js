import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">© 2024 Oasis Digital. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Mapa del sitio</a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;