"use client";

import { performRequest } from "../helpers";
import axioInstance from "../axiosInstance";

const authAPI = {
  logIn: (data: any) => performRequest(axioInstance.post, "/auth/login", data),
  logOut: () => performRequest(axioInstance.post, "/auth/logout"),
  checkSession: () => performRequest(axioInstance.get, "/auth/checkSession"),
};

export default authAPI;
