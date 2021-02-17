import path from 'path';
import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
// import rateLimit from 'express-rate-limit';
// import helmet from 'helmet';
// import sanitizer from 'express-mongo-sanitize';
// import xss from 'xss-clean';
// import hpp from 'hpp';

// import { AppRouter } from '@server/utils';

// import { tourRouter, userRouter } from '@codebase/natoursapi/routes';
// import { errorMiddleware } from '@codebase/natoursapi/middleware';
import { HttpException } from '@shared/exceptions';

import { environment } from '@shared/environments';

// CREATE EXPRESS APPLICATION
const app: Application = express();

// GLOBAL MIDDLEWARE
//--------------------------------------------------------------------------------------------------

// apply helmet - set security HTTP headers
// app.use(helmet());

// LOGGING
if (!environment.production) {
  // apply logging in development
  app.use(morgan('dev'));
}

// generate global instance of rate limiter - limit requests from same API
// const globalLimiter = rateLimit({
//   windowMs: 60 * 60 * 1000,
//   max: 100,
//   message: `To many requests from this IP, please try again in an hour!`,
// });

// apply rate limiter in production
// if (environment.production) {
//   app.use('/api', globalLimiter);
// }

// apply rate limiter
// app.use('/api', globalLimiter);

// apply url encoder
app.use(express.urlencoded({ extended: false }));

// apply body parser
app.use(express.json({ limit: '10kb' }));

// apply data sanitizer - against NoSQL query injection
// app.use(sanitizer());

// apply data sanitizer - against XSS attacks
// app.use(xss());

// apply hpp - prevent http parameter pollution
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

// apply serving static resources
app.use(express.static(path.join(__dirname, '/public')));

// apply test middleware TODO: use for testing
app.use((req: Request, res: Response, next: NextFunction): void => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

// ROUTING
//--------------------------------------------------------------------------------------------------

// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// ERROR HANDLING MIDDLEWARE
//--------------------------------------------------------------------------------------------------

// apply invalid route middleware
app.all('*', (req: Request, res: Response, next: NextFunction): void => {
  next(new HttpException(`Can't find ${req.originalUrl} on this server!`, 404));
});

// apply global error handling middleware
// app.use(errorMiddleware);

export default app;
