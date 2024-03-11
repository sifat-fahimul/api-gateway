import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinayResponse, IUploadFile } from '../interfaces/file';
cloudinary.config({
  cloud_name: 'dcck7zapf',
  api_key: '343955192332598',
  api_secret: 'nSaa50sqNPBKCF9vfmQ4BvxiIHc'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinayResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (err: Error, result: ICloudinayResponse) => {
      fs.unlinkSync(file.path);
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelper = { uploadToCloudinary, upload };
