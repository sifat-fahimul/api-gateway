import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseMarkService } from './studentEnrolledCourseMarks.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getStudentMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.getStudentMarks(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateMarks(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateCourseFinalMarks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseMarkService.updateCourseFinalMarks(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const StudentEnrolledCourseMarkController = {
  getAllFromDB,
  getStudentMarks,
  updateMarks,
  updateCourseFinalMarks
};
