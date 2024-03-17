import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/faculty', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/faculty/my-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getMyCourseStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/faculty/my-course-students', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getFacultyProfile = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(`/faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response.data;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.delete(`/faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

export const FacultyService = {
  updateOneInDB,
  getAllFromDB,
  getByIdFromDB,
  getMyCourses,
  getFacultyProfile,
  getMyCourseStudents,
  deleteByIdFromDB
};
