import express from 'express';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemesster.route';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { academicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { BuildingRoute } from '../modules/building/building.route';
import { RoomRoute } from '../modules/room/room.route';

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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
