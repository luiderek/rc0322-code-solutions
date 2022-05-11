const data = require('./data.json');
const fs = require('fs');
const express = require('express');

const PORT = 3000;
const app = express();
const JSONparser = express.json();
app.use(JSONparser);

app.get('/api/notes/:id', (req, res) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  } else {
    res.status(200).send(data.notes[req.params.id]);
  }
});

app.get('/api/notes/', (req, res) => {
  const noteArray = [];
  for (const id in data.notes) {
    noteArray.push(data.notes[id]);
  }
  res.status(200).send(noteArray);
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = {
      content: req.body.content,
      id: data.nextId
    };
    fs.writeFile('data.json', JSON.stringify(data), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
      } else {
        res.status(201).send(data.notes[data.nextId]);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  } else {
    delete data.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify(data), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  if (+req.params.id !== ~~req.params.id || +req.params.id <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!Object.keys(req.body).includes('content')) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).send({
      error: `cannot find note with id ${req.params.id}`
    });
  } else {
    data.notes[req.params.id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'an unexpected error occured' });
      } else {
        res.status(200).send(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${PORT}`);
});
