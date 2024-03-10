import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const OfferedCourseController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB
};
