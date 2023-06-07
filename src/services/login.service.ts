import bcrypt from 'bcryptjs';
import { ServiceResponse } from 'src/types/ServiceResponse';
import { Token } from 'src/types/Token';
import UserModel from '../database/models/user.model';
import utilsJwt from '../utils/jwt';

const userLogin = async (username: string, password: string): Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({
    where: { username },
  });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id } = user.dataValues;

  const token = await utilsJwt.generateToken({
    id, username, 
  });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default { userLogin };