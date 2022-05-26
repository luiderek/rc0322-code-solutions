require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }

    const getUserIdHashPassFromUserSQL = `
      SELECT "userId", "hashedPassword"
      FROM users
      WHERE username=$1;
    `;
    // Query the database to find the "userId" and "hashedPassword" for the "username"
    const result = await db.query(getUserIdHashPassFromUserSQL, [username]);
    const [user] = result.rows;
    // If no user is found: throw a 401 invalid login
    if (!user) {
      throw new ClientError(401, 'invalid login');
    } else {
      // If a user is found: confirm the provided password matches the hashed pass
      const isMatch = await argon2.verify(user.hashedPassword, password);
      // If the password does not match, throw a 401 invalid login
      if (!isMatch) {
        throw new ClientError(401, 'invalid login');
      } else {
        // Otherwise, make a payload containing UserID and Username
        const payload = {
          userId: user.userId,
          username: username
        };
          // And sign it with TOKEN_SECRET
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        // Send the client a 200 response containing the payload and the token.
        res.status(200).json(token);
      }
    }
  } catch (err) {
    return next(err);
  }

  // Attempting the solution without async await.
  // db.query(getUserIdHashPassFromUserSQL, [username])
  //   .then(result => {
  //     const [user] = result.rows;
  //     if (!user) {
  //       throw new ClientError(401, 'invalid login');
  //     } else {
  //       argon2
  //         .verify(user.hashedPassword, password)
  //         .then(isMatch => {
  //           if (isMatch) {
  //             const payload = { userId: user.userId, username: username };
  //             const token = jwt.sign(payload, process.env.TOKEN_SECRET);
  //             res.status(200).json(token);
  //           } else {
  //             throw new ClientError(401, 'invalid login');
  //           }
  //         })
  //         .catch(err => next(err));
  //     }
  //   })
  //   .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
