import { Request, Response, NextFunction } from 'express';

// export interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined };
// }

export type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
