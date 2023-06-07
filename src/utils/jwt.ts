import jwt from 'jsonwebtoken';
import { Payload } from 'src/types/Payload';

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: Payload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

// const validateToken = (token: string): string => jwt.verify(token, secret) as Payload;

export default { generateToken };