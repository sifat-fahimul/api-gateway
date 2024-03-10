import { NextFunction, Request, Response } from 'express';
import { SemesterRegistrationService } from './semesterRegistration.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getMyRegistration(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const startRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startRegistration(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const mySemesterRegistrationCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.mySemesterRegistrationCourse(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const enrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.enrolledCourse(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const withDrawFromCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.withDrawFromCourse(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const confirmRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.confirmRegistration(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const startNewSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startNewSemester(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const SemesterRegistrationController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourse,
  enrolledCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester
};
