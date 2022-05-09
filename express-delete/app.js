const express = require('express');
const app = express();
const PORT = 3000;

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res, next) => {
  res.json(gradeArray(grades));
});

app.delete('/api/grades/:id', (req, res, next) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening at port ${PORT}`);
});

function gradeArray(gradeObj) {
  const out = [];
  for (const key in gradeObj) {
    out.push(gradeObj[key]);
  }
  return out;
}
