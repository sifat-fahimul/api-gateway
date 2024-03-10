import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/semester-registration', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response.data;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/semester-registration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
const updateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/semester-registration/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response.data;
};
const deleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/semester-registration/get-my-semester-courses`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response.data;
};

const startRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response.data;
};

const mySemesterRegistrationCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `semester-registration/get-my-semester-courses`,
    {
      headers: { Authorization: req.headers.authorization }
    }
  );
  return response.data;
};

const enrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    'semester-registration/enroll-into-course',
    req.body,
    {
      headers: { Authorization: req.headers.authorization }
    }
  );
  return response.data;
};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    'semester-registration/withdraw-from-course',
    req.body,
    {
      headers: { Authorization: req.headers.authorization }
    }
  );
  return response.data;
};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    'semester-registration/confirm-my-registration',
    req.body,
    {
      headers: { Authorization: req.headers.authorization }
    }
  );
  return response.data;
};

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.post(
    `semester-registration/${id}/start-new-semester`,
    req.body,
    {
      headers: { Authorization: req.headers.authorization }
    }
  );
  return response.data;
};

export const SemesterRegistrationService = {
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
