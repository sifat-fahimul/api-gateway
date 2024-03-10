import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();
router.get('/', SemesterRegistrationController.getAllFromDB);
router.get('/:id', SemesterRegistrationController.getSingleFromDB);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.insertIntoDB
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.updateIntoDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.deleteFromDB
);

router.get(
  '/get-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.post(
  '/start-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.startRegistration
);

router.get(
  '/get-my-semester-courses',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.post(
  '/enroll-into-course',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.enrolledCourse
);
router.post(
  '/withdraw-from-course',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.withDrawFromCourse
);
router.post(
  '/confirm-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.confirmRegistration
);
router.post(
  '/:id/start-new-semester',
  auth(ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.startNewSemester
);

export const SemesterRegistrationRoute = router;
