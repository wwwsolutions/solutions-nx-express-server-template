import { Request, Response } from 'express';

import { catchAsync } from '@server/utils';
// import { User } from '@codebase/natoursapi/models';
// import { HttpException } from '@codebase/shared/exceptions';

export const getUserController = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined.',
  });
};

export const getAllUsersController = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined.',
    });
  }
);
