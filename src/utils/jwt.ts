import jwt from 'jsonwebtoken';
import { Payload, TokenResponse } from '../types/Payload';

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: Payload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

const tokenValidation = (token: string): TokenResponse => {
  try {
    const payload = jwt.verify(token, secret) as Payload;
    return { authentic: true, payload };
  } catch {
    return { authentic: false };
  }
};
export default { generateToken, tokenValidation };