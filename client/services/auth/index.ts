import axioInstance from '../axiosInstance';
import { performRequest } from '../helpers';

export const services = {
  logIn: async () => {
    return performRequest(axioInstance.post, '/login');
  },
  logOut: async () => {
    return performRequest(axioInstance.post, '/logout');
  },
  signUp: async () => {
    return performRequest(axioInstance.post, '/signup');
  },
};
