const num1 = 123.2;
const num2 = 432.7;
const num3 = 300.3;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

const heroes = ['superperson', 'superman', 'superwoman', 'superrat'];
console.log('heroes:', heroes);

let randomNumber = Math.random();
randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Horoscopes, Thermonuclear War, and You',
    author: 'Touchee, Hands'
  },
  {
    title: 'Book name two',
    author: 'Lickner, Windo'
  },
  {
    title: 'Unattainable Beauty Standards',
    author: 'Plain, Jayn'
  }
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('library:', library);

const fullName = 'Derek Lui';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
