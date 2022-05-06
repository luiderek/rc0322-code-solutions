const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('string');
});

app.listen(3000, () => {
  // console.log('server is listening at port 3000');
});
