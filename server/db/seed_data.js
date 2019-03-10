use magic_trick;
db.dropDatabase();

db.cardset.insertMany([
  {
    card: [1, 2, 3, 4, 5],
    containsNumber: false,
    displayOrder: 1
  },
  {
    card: [1, 2, 3, 4, 5],
    containsNumber: false,
    displayOrder: 3
  },
  {
    card: [1, 2, 3, 4, 5],
    containsNumber: true,
    displayOrder: 2
  },
]);
