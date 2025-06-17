export const hotelsData = [
  {
    id: 'h3',
    name: 'Hotel Sol Caribe',
    location: 'Barranquilla, Colombia',
    maxCapacity: 120,
    availableRooms: 33,
    roomTypes: {
      standard: { count: 30, basePrice: 90, maxPeople: 4 },
      premium: { count: 3, basePrice: 190, maxPeople: 4 },
    },
    seasons: {
      high: {
        standard: { pricePerPerson: 55, pricePerRoom: 110 },
        premium: { pricePerPerson: 95, pricePerRoom: 230 },
      },
      low: {
        standard: { pricePerPerson: 38, pricePerRoom: 75 },
        premium: { pricePerPerson: 65, pricePerRoom: 160 },
      },
    },
    occupiedDates: [
      '2024-12-01', '2024-12-02'
    ]
  },
  {
    id: 'h4',
    name: 'Hotel Valle Esmeralda',
    location: 'Cali, Colombia',
    maxCapacity: 150,
    availableRooms: 22,
    roomTypes: {
      premium: { count: 20, basePrice: 210, maxPeople: 6 },
      vip: { count: 2, basePrice: 420, maxPeople: 6 },
    },
    seasons: {
      high: {
        premium: { pricePerPerson: 110, pricePerRoom: 260 },
        vip: { pricePerPerson: 220, pricePerRoom: 520 },
      },
      low: {
        premium: { pricePerPerson: 75, pricePerRoom: 190 },
        vip: { pricePerPerson: 160, pricePerRoom: 380 },
      },
    },
    occupiedDates: [
      '2025-01-10', '2025-01-11'
    ]
  },
  {
    id: 'h5',
    name: 'Hotel Ciudad Amurallada',
    location: 'Cartagena, Colombia',
    maxCapacity: 80,
    availableRooms: 11,
    roomTypes: {
      standard: { count: 10, basePrice: 110, maxPeople: 8 },
      premium: { count: 1, basePrice: 250, maxPeople: 8 },
    },
    seasons: {
      high: {
        standard: { pricePerPerson: 70, pricePerRoom: 140 },
        premium: { pricePerPerson: 120, pricePerRoom: 300 },
      },
      low: {
        standard: { pricePerPerson: 45, pricePerRoom: 90 },
        premium: { pricePerPerson: 80, pricePerRoom: 200 },
      },
    },
    occupiedDates: [
      '2024-12-30', '2024-12-31'
    ]
  },
  {
    id: 'h6',
    name: 'Hotel Capital Suites',
    location: 'Bogotá, Colombia',
    maxCapacity: 250,
    availableRooms: 42,
    roomTypes: {
      standard: { count: 20, basePrice: 95, maxPeople: 6 },
      premium: { count: 20, basePrice: 200, maxPeople: 6 },
      vip: { count: 2, basePrice: 410, maxPeople: 6 },
    },
    seasons: {
      high: {
        standard: { pricePerPerson: 60, pricePerRoom: 120 },
        premium: { pricePerPerson: 105, pricePerRoom: 260 },
        vip: { pricePerPerson: 210, pricePerRoom: 520 },
      },
      low: {
        standard: { pricePerPerson: 40, pricePerRoom: 85 },
        premium: { pricePerPerson: 70, pricePerRoom: 190 },
        vip: { pricePerPerson: 155, pricePerRoom: 390 },
      },
    },
    occupiedDates: [
      '2024-11-20', '2024-11-21'
    ]
  },
];

// DONE