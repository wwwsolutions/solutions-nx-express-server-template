import path from 'path';
import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
// import rateLimit from 'express-rate-limit';
// import sanitizer from 'express-mongo-sanitize';
// import xss from 'xss-clean';
// import hpp from 'hpp';
// import helmet from 'helmet';

import { logData } from '@server/utils';

// ERROR MIDDLEWARE
import { errorMiddleware } from '@server/middleware';
import { HttpException } from '@shared/exceptions';

// ROUTES
import { userRouter } from '@server/routes';

// ENVIRONMENT
import { environment } from '@shared/environments';

// CREATE EXPRESS APPLICATION
const app: Application = express();

// HELMET - SET SECURITY HTTP HEADERS
// app.use(helmet());

// LOGGING - APPLY IN DEVELOPMENT
if (!environment.production) {
  app.use(morgan('dev'));
}

// RATE LIMITER - LIMIT REQUESTS FROM SAME API
// const globalLimiter = rateLimit({
//   windowMs: 60 * 60 * 1000,
//   max: 100,
//   message: `To many requests from this IP, please try again in an hour!`,
// });

// RATE LIMITER - APPLY IN PRODUCTION
// if (environment.production) {
//   app.use('/api', globalLimiter);
// }

// URL ENCODER
app.use(express.urlencoded({ extended: false }));

// BODY PARSER
app.use(express.json({ limit: '10kb' }));

// DATA SANITIZER - AGAINST NOSQL QUERY INJECTIONS
// app.use(sanitizer());

// XSS - AGAINST XSS ATTACKS
// app.use(xss());

// HPP - PREVENT HTTP PARAMETER POLLUTION
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsAverage',
//       'ratingsQuantity',
//       'maxGroupSize',
//       'difficulty',
//       'price',
//     ],
//   })
// );

// SERVE STATIC RESOURCES
app.use(express.static(path.join(__dirname, '/public')));
console.log(path.join(__dirname, '/public'));

// TESTING MIDDLEWARE
app.use((req: Request, res: Response, next: NextFunction): void => {
  req.requestTime = new Date().toISOString();
  logData('req.headers', req.headers);
  next();
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUTING
////////////////////////////////////////////////////////////////////////////////////////////////////

// USERS ROUTER
app.use('/api/v1/users', userRouter);
//...

////////////////////////////////////////////////////////////////////////////////////////////////////

// ERROR HANDLER - INVALID ROUTES
app.all('*', (req: Request, res: Response, next: NextFunction): void => {
  next(new HttpException(`Can't find ${req.originalUrl} on this server!`, 404));
});

// ERROR HANDLER - GLOBAL ERRORS
app.use(errorMiddleware);

export default app;
