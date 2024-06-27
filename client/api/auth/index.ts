'use client';

import { performRequest } from '../helpers';
import axioInstance from '../axiosInstance';

const authAPI = {
  logIn: async (data: any) => {
    return performRequest(axioInstance.post, '/auth/login', data);
  },
  logOut: async () => {
    return performRequest(axioInstance.post, '/auth/logout');
  },
  signUp: async () => {
    return performRequest(axioInstance.post, '/auth/signup');
  },
};

export default authAPI;
