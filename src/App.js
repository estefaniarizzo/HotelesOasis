import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';
import SearchForm from './components/SearchForm';
import { hotelsData } from './mock/hotels';

const App = () => {
  const [currentPage, setCurrentPage] = useState('list'); // 'list', 'detail', or 'search'
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentPage('detail');
  };

  const handleBackToList = () => {
    setSelectedHotel(null);
    setCurrentPage('list');
  };

  const handleNavigateSearch = () => {
    setCurrentPage('search');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader onNavigateHome={handleBackToList} onNavigateSearch={handleNavigateSearch} />
      <main className="flex-grow py-8">
        {currentPage === 'list' && (
          <HotelList hotels={hotelsData} onSelectHotel={handleSelectHotel} />
        )}
        {currentPage === 'detail' && selectedHotel && (
          <HotelDetail hotel={selectedHotel} onBack={handleBackToList} />
        )}
        {currentPage === 'search' && (
          <SearchForm />
        )}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;