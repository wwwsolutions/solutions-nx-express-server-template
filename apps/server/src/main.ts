import app from './app/app';

import { logError, logErrorObject, logSuccess } from '@server/utils';

import { environment } from '@shared/environments';

// GLOBAL ERROR HANDLER - CATCH UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
  logError(err.name), logError(err.message);
  logError(`UNCAUGHT EXCEPTION! Shutting down...`);
  process.exit(1);
});

// SERVER
const protocol = `http`;
const ip = `localhost`;
const port = environment.port || 5000;
const server = app.listen(port, () => {
  logSuccess(`Listening at ${protocol}://${ip}:${port}`);
});

// GLOBAL ERROR HANDLER - CATCH ASYNC EXCEPTIONS
process.on('unhandledRejection', (err) => {
  logErrorObject(err);
  logError('UNHANDLED REJECTION! Shutting down...');

  server.close(() => {
    process.exit(1);
  });
});
