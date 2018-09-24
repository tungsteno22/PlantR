const { db, Gardener, Plot, Vegetable } = require('./models');

const database = db.sync();
console.log(database);
database
  .then(() => {
    console.log('This was a success');
    const vegetable = new Vegetable({
      name: 'potato',
      color: 'brown',
      planted_on: new Date(),
    });
    // vegetable.save();
    return vegetable;
    // db.close();
  })
  .then(vegetable => {
    return vegetable.save();
  })
  .then(() => db.close())
  .catch(error => {
    console.log('We failed' + error);
    db.close();
  });

// const color = index => {
//   switch (index) {
//     case 1:
//       return 'Red';
//     case 2:
//       return 'Orange';
//     case 3:
//       return 'Blue';
//     default:
//       return 'Purple';
//   }
// };
// const newVegArr = [];

// for (let i = 0; i < 100; ++i) {
//   newVegArr.push(
//     new Vegetable({
//       name: `Vegetable ${i}`,
//       color: `${color(i % 4)}`,
//       planted_on: new Date(),
//     })
//   );
// }
// Promise.all(newVegArr.map(x => x.save()));
