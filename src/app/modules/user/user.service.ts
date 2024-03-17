import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinayResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinayResponse = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data.data && Array.isArray(academicDepartmentResponse.data.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data.data[0].id;
  }

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse.data.data && Array.isArray(academicFacultyResponse.data.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data.data[0].id;
  }

  const academicSemesterResponse = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data.data && Array.isArray(academicSemesterResponse.data.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return response.data;
};
const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinayResponse = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }
  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data.data && Array.isArray(academicDepartmentResponse.data.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data.data[0].id;
  }

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse.data.data && Array.isArray(academicFacultyResponse.data.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data.data[0].id;
  }

  // console.log('academicDepartmentResponse', academicDepartmentResponse.data);
  // console.log('academicFacultyResponse', academicFacultyResponse.data);

  // console.log('body', req.body);
  const response: IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return response.data;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.admin.profileImage = uploadedProfileImage.secure_url;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response.data;
};
export const UserService = { createStudent, createFaculty, createAdmin };
