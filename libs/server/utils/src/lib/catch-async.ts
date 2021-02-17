import { Request, Response, NextFunction } from 'express';

import { ExpressMiddleware } from '@shared/data-access-models';

export const catchAsync = (fn): ExpressMiddleware => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
};
