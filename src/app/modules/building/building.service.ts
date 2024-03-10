import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/building', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response.data;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/building', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/building/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const updateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/building/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const deleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/building/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

export const BuildingService = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB
};
