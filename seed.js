const { db, Gardener, Plot, Vegetable } = require('./models');

const database = db.sync({ force: true })
console.log(database);
database
  .then(() => {
    console.log('this was a success');
    db.close()
  })
  .catch((error) => {
    console.log('we failed' + error);
    db.close()
  });

const vegetable = new Vegetable({
  name: 'potato',
  color: 'brown',
  planted_on: new Date()
})
vegetable.save();
console.log('our vegetable is what???', vegetable);
