const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previous, current) => previous + current, 0);
const product = numbers.reduce((previous, current) => previous * current);

const balance = account.reduce((previous, current) => {
  if (current.type === 'deposit') {
    previous += current.amount;
  } else if (current.type === 'withdrawal') {
    previous -= current.amount;
  }
  return previous;
}, 0);

const composite = traits.reduce((previous, current) => {
  Object.assign(previous, current);
  return previous;
}, {});
