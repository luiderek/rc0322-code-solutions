const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// Unary plus for type conversion.
const x = +process.argv[2];
const y = +process.argv[4];
const operation = process.argv[3];

if (process.argv.length > 5) {
  console.log('calculate.js only takes 3 arguments.');
} else {
  switch (operation) {
    case '+': case 'plus':
      console.log(add(x, y));
      break;
    case '-': case 'minus':
      console.log(subtract(x, y));
      break;
    // I couldn't use case '*' because it seems like node treats that as:
    //   "List all available modules in argv"
    case 'x': case 'times':
      console.log(multiply(x, y));
      break;
    case '/': case 'divide':
      console.log(divide(x, y));
      break;
    default:
      console.log(`${operation} expression not recognized.`);
  }
}
