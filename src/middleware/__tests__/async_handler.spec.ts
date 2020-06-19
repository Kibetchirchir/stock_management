import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../async_handler';

describe('async handler', () => {
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;
  test('async handler', () => {
    const cb = jest.fn();

    asyncHandler(cb(req, res, next));

    expect(cb).toHaveBeenCalled();
  });
});
