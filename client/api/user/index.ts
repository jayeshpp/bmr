import { performRequest } from '../helpers';
import axioInstance from '../axiosInstance';
import {
  IUserProfileResponse,
  IProfileResponse,
} from '@/interfaces/user.interface';

const userAPI = {
  register: async () => {
    return performRequest(axioInstance.post, '/users');
  },
  getProfileByUserId: async (id: string): Promise<IProfileResponse> => {
    const response = await performRequest<IUserProfileResponse>(
      axioInstance.get,
      `/users/${id}/profile`
    );
    return response.data.profile;
  },
};

export default userAPI;
