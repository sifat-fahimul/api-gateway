import { NextFunction, Request, Response } from 'express';
import { BuildingService } from './building.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB
};
