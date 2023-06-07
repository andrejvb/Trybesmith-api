import { Request, Response } from 'express';
import loginService from '../services/login.service';

const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const { status, data } = await loginService.userLogin(username, password);
  if (status === 'UNAUTHORIZED') return res.status(401).json(data);

  return res.status(200).json(data);
};

export default { loginUser };
