import app from './app/app';

// UTILS
import { logError, logErrorObject, logSuccess } from '@server/utils';

// SHARED
import { environment } from '@shared/environments';

// GLOBAL ERROR HANDLER - CATCH UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
  logError(err.name);
  logError(err.message);
  logError(`UNCAUGHT EXCEPTION! Shutting down...`);
  process.exit(1);
});

// SERVER
const protocol = environment.url.protocol || 'http';
const ip = environment.url.port || 'localhost';
const port = environment.url.port || 5000;

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
