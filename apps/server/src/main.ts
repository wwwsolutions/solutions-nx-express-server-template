import app from './app/app';
import colors from 'colors';

import { environment } from '@shared/environments';

// GLOBAL ERROR HANDLER - CATCH UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

// SERVER
const port = environment.port || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`.yellow.bold);
});

// GLOBAL ERROR HANDLER - CATCH ASYNC EXCEPTIONS
process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
