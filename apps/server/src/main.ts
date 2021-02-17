/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request } from 'express';

const app = express();

app.get('/api', (req: Request, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
