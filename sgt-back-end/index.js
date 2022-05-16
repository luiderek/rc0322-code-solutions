const pg = require('pg');
const express = require('express');

const PORT = 3000;
const app = express();
const JSONparser = express.json();
app.use(JSONparser);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);

  const errMessage = inputChecks(req, res, ['id']);
  if (errMessage) {
    res.status(400).json({
      error: errMessage
    });
    return;
  }

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const params = [gradeId];
  // https://node-postgres.com/features/queries#parameterized-query
  db.query(sql, params)
    .then(result => {
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId = ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/', (req, res, next) => {
  // checks to break if unnecessary params perhaps?
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result;
      res.status(200).json(grade.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res, next) => {

  const errMessage = inputChecks(req, res, ['name', 'course', 'score']);
  if (errMessage) {
    res.status(400).json({
      error: errMessage
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {

  const errMessage = inputChecks(req, res, ['id', 'name', 'course', 'score']);
  if (errMessage) {
    res.status(400).json({
      error: errMessage
    });
    return;
  }

  const sql = `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
     where "gradeId" = $1
     returning *;
  `;

  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const params = [gradeId, name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId = ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {

  const errMessage = inputChecks(req, res, ['id']);
  if (errMessage) {
    res.status(400).json({
      error: errMessage
    });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;

  const gradeId = Number(req.params.gradeId);
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId = ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at port ${PORT}`);
});

// based on an array of optional options flags, returns an string of errors.
function inputChecks(req, res, options) {
  const errors = [];
  if (options.includes('id')) {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || req.params.gradeId <= 0) {
      errors.push('gradeId must be positive integer');
    }
  }
  if (options.includes('name')) {
    if (!req.body.name) {
      errors.push('name must exist');
    }
    if (typeof req.body.name !== 'string') {
      errors.push('name must be a string');
    }
  }
  if (options.includes('course')) {
    if (!req.body.course) {
      errors.push('course must exist');
    }
    if (typeof req.body.course !== 'string') {
      errors.push('course must be a string');
    }
  }
  if (options.includes('score')) {
    if (!req.body.score) {
      errors.push('score must exist');
    }
    if (typeof req.body.score !== 'number') {
      errors.push('score must be a number');
    }
    if (req.body.score < 0 || req.body.score > 100) {
      errors.push('score must be between 0 and 100');
    }
  }
  if (errors !== []) {
    return errors.join(', ');
  }
}
