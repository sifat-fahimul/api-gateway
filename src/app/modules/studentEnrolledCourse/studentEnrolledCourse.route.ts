import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();
router.get('/', StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', StudentEnrolledCourseController.getSingleFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseController.deleteFromDB
);

export const StudentEnrolledCourseRoute = router;
