import { NextFunction, Request, Response } from 'express';

const asyncHandler = (cb: CbI) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    await cb(req, res, next);
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'error',
      error: JSON.stringify(err),
    });
  }
};

interface CbI {
  (req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export default asyncHandler;
