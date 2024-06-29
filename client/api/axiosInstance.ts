import axios from "axios";
import { BASE_URL } from "@/constants/app";

// Create a new Axios instance
const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL, // Your API base URL
});

// Interceptors for request and response
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors gracefully
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
      // Request was made but no response was received
      console.error('Error: No response received from server');
  } else {
      // Something else happened while setting up the request
      console.error(`Error: ${error.message}`);
  }
    return Promise.reject(error);
  },
);

export default instance;
