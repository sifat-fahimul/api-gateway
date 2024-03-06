import axios, { AxiosInstance } from 'axios';
import config from '../config';

const httpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => config,
    (err) => err
  );
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
};

const authService = httpService(config.authServiceUrl);
const coreService = httpService(config.coreServiceUrl);

export { authService, coreService, httpService };
