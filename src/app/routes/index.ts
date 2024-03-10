import express from 'express';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemesster.route';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { BuildingRoute } from '../modules/building/building.route';
import { RoomRoute } from '../modules/room/room.route';
import { CourseRoute } from '../modules/course/course.route';
import { OfferedCourseRoute } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseClassScheduleRoute } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { OfferedCourseSectionRoute } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { SemesterRegistrationRoute } from '../modules/semesterRegistration/semesterRegistration.route';
import { StudentEnrolledCourseRoute } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarkRoute } from '../modules/studentEnrolledCourseMarks/studentEnrolledCourseMarks.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoute
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoute
  },
  {
    path: '/academic-faculty',
    routes: academicFacultyRoute
  },
  {
    path: '/building',
    routes: BuildingRoute
  },
  {
    path: '/room',
    routes: RoomRoute
  },
  {
    path: '/course',
    routes: CourseRoute
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoute
  },
  {
    path: '/offered-courses-class-schedule',
    routes: OfferedCourseClassScheduleRoute
  },
  {
    path: '/offered-courses-section',
    routes: OfferedCourseSectionRoute
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoute
  },
  {
    path: '/student-enrolled-courses',
    routes: StudentEnrolledCourseRoute
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
