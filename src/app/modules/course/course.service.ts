import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/course', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response.data;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const updateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/course/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const deleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const assignFaculties = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.post(
    `/course/${id}/assign-faculties`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response.data;
};
const deleteFaculties = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/course/${id}/remove-faculties`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

export const CourseService = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
  assignFaculties,
  deleteFaculties
};
