import app from './app/application';
// import mongoose from 'mongoose';
// import { plugin, set, connect } from 'mongoose';

import { environment } from '@shared/environments';

// https://stackoverflow.com/questions/50011091/how-to-create-item-if-not-exists-and-return-an-error-if-exists
// set('debug', true);
// mongoose.Promise = global.Promise;

// ERROR HANDLER - GLOBAL EXCEPTIONS
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

// // GLOBAL PLUGIN (setRunValidators fix)
// function setRunValidators() {
//   this.setOptions({ runValidators: true });
// }

// plugin((schema) => {
//   schema.pre('findOneAndUpdate', setRunValidators);
//   schema.pre('updateMany', setRunValidators);
//   schema.pre('updateOne', setRunValidators);
//   schema.pre('update', setRunValidators);
// });

// const db: string = environment.mongoConfig.dbCloudConnectionStr;

// connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// }).then(() => {
//   console.log('Database connection successful!');
// });

// SERVER
const port = environment.port || 5000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);

// ERROR HANDLER - PROMISE EXCEPTIONS
process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
