import { Response } from 'express';

const jsonResponse = ({
  res,
  status,
  message,
  data,
}: JsonResponseI): Response => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};

interface JsonResponseI {
  status: number;
  res: Response;
  message: string;
  data: Array<object>;
}

export default jsonResponse;
