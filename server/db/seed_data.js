use testCardGame;
db.dropDatabase();

db.cards.insertMany([
  {
    name: "1",
    card: [1, 2, 3, 4, 5],
    containsNumber: false,
  },
  {
    name: "2",
    card: [2, 3, 4, 5, 6],
    containsNumber: true,
  },
  {
    name: "4",
    card: [3, 4, 5, 6, 7],
    contains: false,
  },
]);
