const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

const fullpath = path.join(__dirname, 'public');
console.log('fullpath:', fullpath);

const staticPath = express.static(fullpath);
app.use(staticPath);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${PORT}`);
});
