require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  let hashedpass;
  // Hash the user's password with `argon2.hash()`
  try {
    hashedpass = await argon2.hash(password);
  } catch (err) {
    console.error(err);
  }
  // Insert the user's "username" and "hashedPassword" into the "users" table.
  const sql = `
    insert into "users" ("username", "hashedPassword")
    values ($1, $2)
    returning "userId", "username", "createdAt"
  `;
  const params = [username, hashedpass];
  db.query(sql, params)
    .then(result => {
      // Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
      res.status(201).json(result.rows);
    })
    // Catch any errors.
    .catch(err => next(err));
  // to solve it without async await, you call db.query inside of hashedpass's then method
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
