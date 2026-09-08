import { HttpError } from 'http-errors';
import multer from 'multer';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      message: err.message,
    });
    return;
  }

  if (err instanceof multer.MulterError) {
    res.status(400).json({
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
};
