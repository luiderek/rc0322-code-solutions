const fs = require('fs');

const target = process.argv[2];
const destination = process.argv[3];

fs.readFile(target, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(destination, data + '\n', err => {
    if (err) throw err;
  });
});
