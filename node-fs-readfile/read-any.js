const fs = require('fs');

const target = process.argv[2];

fs.readFile(target, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
