import { Request, Response, NextFunction } from 'express';
import tkValidation from '../utils/jwt';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const validation = tkValidation.tokenValidation(token);
  if (validation.authentic === false) return res.status(401).json({ message: 'Invalid token' });
  req.body.user = validation;
  console.log('req Validation token =>', req.body.user);  
  next();
};

export default tokenValidation;