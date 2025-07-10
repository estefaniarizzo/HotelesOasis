import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';
import SearchForm from './components/SearchForm';
import { hotelsData } from './mock/hotels';

const App = () => {
  const [activeView, setActiveView] = useState('list'); // 'list', 'detail', 'search'
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setActiveView('detail');
  };

  const handleBackToList = () => {
    setSelectedHotel(null);
    setActiveView('list');
  };

  const handleNavigateSearch = () => {
    setActiveView('search');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header>
        <LayoutHeader 
          onNavigateHome={handleBackToList} 
          onNavigateSearch={handleNavigateSearch} 
        />
      </header>

      <main className="flex-grow py-8 px-4 sm:px-8">
        {activeView === 'list' && (
          <HotelList hotels={hotelsData} onSelectHotel={handleSelectHotel} />
        )}
        {activeView === 'detail' && selectedHotel && (
          <HotelDetail hotel={selectedHotel} onBack={handleBackToList} />
        )}
        {activeView === 'search' && (
          <SearchForm />
        )}
      </main>

      <footer>
        <LayoutFooter />
      </footer>
    </div>
  );
};

export default App;
