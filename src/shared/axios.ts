import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
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

const AuthService = HttpService(config.authServiceUrl);
const CoreService = HttpService(config.coreServiceUrl);

export { AuthService, CoreService, HttpService };
