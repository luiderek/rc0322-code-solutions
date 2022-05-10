const express = require('express');
const app = express();
const PORT = 3000;

let nextId = 1;
const notes = {};

const JSONparser = express.json();
app.use(JSONparser);

app.get('/api/notes/:id', (req, res) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[req.params.id]) {
    res.status(200).send(notes[req.params.id]);
  } else {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.get('/api/notes/', (req, res) => {
  res.send(noteArray(notes));
});

app.post('/api/notes', (req, res) => {
  if (!Object.keys(req.body).includes('content')) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    try {
      notes[nextId] = {
        content: req.body.content,
        id: nextId
      };
      res.status(201).send(notes[nextId]);
      nextId++;
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'an unexpected error occured' });
    }
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[req.params.id]) {
    delete notes[req.params.id];
    res.sendStatus(204);
  } else {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!Object.keys(req.body).includes('content')) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (!notes[req.params.id]) {
    res.status(404).send({
      error: `cannot find note with id ${req.params.id}`
    });
  } else {
    try {
      notes[req.params.id].content = req.body.content;
      res.status(200).send(notes[req.params.id]);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'an unexpected error occured' });
    }
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${PORT}`);
});

function noteArray(noteObj) {
  const out = [];
  for (const key in noteObj) {
    out.push(noteObj[key]);
  }
  return out;
}
