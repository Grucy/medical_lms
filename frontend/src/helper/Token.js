import { httpClient } from "../config/axiosConfig";

let ACCESS_TOKEN = "";

export const setAccesstoken = (token) => {
  ACCESS_TOKEN = token;
};
export const getAccessToken = () => ACCESS_TOKEN;

export const refreshAccessToken = async () => {
  const response = await httpClient.get("/auth/refresh");

  const { accessToken } = response.data;
  return accessToken;
};