import { NextFunction, Request, Response } from 'express';
import { CourseService } from './course.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const assignFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.assignFaculties(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteFaculties(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const CourseController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
  assignFaculties,
  deleteFaculties
};
