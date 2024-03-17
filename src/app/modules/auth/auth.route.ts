import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthenticationController.loginUser
);
router.post(
  '/refreshToken',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthenticationController.refreshToken
);
router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthenticationController.changePassword
);

export const AuthenticationRoute = router;
