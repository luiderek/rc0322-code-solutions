const fs = require('fs');

const filelist = process.argv.slice(2);

const anyItemsRemain = () => filelist.length > 0;

function recurseRead(filelist, output = '') {
  if (anyItemsRemain()) {
    fs.readFile(filelist.shift(), 'utf-8', (err, data) => {
      if (err) throw err;
      output += data;
      recurseRead(filelist, output);
    });
  } else {
    console.log(output);
  }
}

recurseRead(filelist);
