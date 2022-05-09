const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  res.json(gradeArray(grades));
});

const parser = express.json();
app.use(parser);

app.post('/api/grades', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.sendStatus(404);
  } else {
    const newObject = req.body;
    newObject.id = nextId;
    grades[nextId] = newObject;
    nextId++;
    res.status(201).send(newObject);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening at port 3000');
});

function gradeArray(gradeObj) {
  const out = [];
  for (const key in gradeObj) {
    out.push(gradeObj[key]);
  }
  return out;
}
