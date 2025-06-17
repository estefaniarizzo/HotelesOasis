export const isDateOccupied = (dateString, occupiedDates) => {
  return occupiedDates.includes(dateString);
};

export const calculateTotalPrice = (
  hotel,
  numRooms,
  numPeople,
  roomType,
  seasonType
) => {
  const roomPrice = hotel.seasons[seasonType][roomType].pricePerRoom;
  const personPrice = hotel.seasons[seasonType][roomType].pricePerPerson;
  const total = (roomPrice * numRooms) + (personPrice * numPeople);
  return total;
};

export const getSeason = (date) => {
  const month = new Date(date).getMonth() + 1;
  // Ejemplo simple: Diciembre-Febrero y Julio-Agosto como temporada alta
  if ((month >= 12 || month <= 2) || (month >= 7 && month <= 8)) {
    return 'high';
  }
  return 'low';
};