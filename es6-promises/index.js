const takeAChance = require('./take-a-chance');

const chancePromise = takeAChance('Derek')
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err.message);
  });
