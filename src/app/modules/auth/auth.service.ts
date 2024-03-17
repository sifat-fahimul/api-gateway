import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const loginUser = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/login', req.body);
  return response.data;
};

const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await AuthService.post('/auth/refresh-token', req.body, {
    headers: { cookie: `refreshToken=${refreshToken}` }
  });
  return response.data;
};

const changePassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/change-password', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
export const AuthenticationService = { loginUser, refreshToken, changePassword };
