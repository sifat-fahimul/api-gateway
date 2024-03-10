import { NextFunction, Request, Response } from 'express';
import { RoomService } from './room.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const RoomController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB
};
