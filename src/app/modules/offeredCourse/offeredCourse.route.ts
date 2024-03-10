import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseController } from './offeredCourse.controller';

const router = express.Router();
router.get('/', OfferedCourseController.getAllFromDB);
router.get('/:id', OfferedCourseController.getSingleFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.deleteFromDB
);

export const OfferedCourseRoute = router;
