var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    totalCost: 34.00,
    shipTo: 'JS Masher',
    orderPlaced: Date('Aug 4, 2020'),
    delivered: Date('Aug 8, 2020'),
    orderedItems: [
      {
        itemName: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: Date('Sep 7, 2020'),
        preTax: 31.55
      }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    totalCost: 44.53,
    shipTo: 'JS Masher',
    orderPlaced: Date('Jul 19, 2020'),
    delivered: Date('Jul 20, 2020'),
    orderedItems: [
      {
        itemName: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindow: Date('Aug 19, 2020'),
        preTax: 41.33
      }
    ]
  },
  {
    orderNumber: '114-3941689-8772232',
    totalCost: 17.22,
    shipTo: 'JS Masher',
    orderPlaced: Date('Jul 4, 2020'),
    delivered: Date('Jul 7, 2020'),
    orderedItems: [
      {
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindow: Date('Aug 5, 2020'),
        preTax: 15.98
      }
    ]
  },
  {
    orderNumber: '113-2883177-264248',
    totalCost: 138.93,
    shipTo: 'JS Masher',
    orderPlaced: Date('Jul 3, 2020'),
    delivered: Date('Jul 5, 2020'),
    orderedItems: [
      {
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindow: Date('Aug 4, 2020'),
        preTax: 94.95
      },
      {
        itemName: 'The Art of SQL',
        returnWindow: Date('Aug 4, 2020'),
        author: 'Faroult, Stephanie',
        preTax: 33.99
      }
    ]
  }
];

console.log('orderHistory[0]:', orderHistory[0]);
console.log('orderHistory[2].orderedItems[0].itemName:', orderHistory[2].orderedItems[0].itemName);
