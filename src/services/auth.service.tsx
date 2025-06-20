import { API } from "@/configurations/global.config";
import { httpClient } from "@/configurations/http.client";
import { getToken, removeToken, setToken } from "@/services/local-storage.service";
import { redirect } from "next/navigation";

export const login = async (username: string, password: string) => {
  const response = await httpClient.post(API.LOGIN, {
    username,
    password,
  });
  // console.log(response.data.data.token);
  const token = response?.data?.data?.token;
  const expiryTime = response?.data?.data?.expiryTime;

  setToken(token, expiryTime);

  return response.data;
};

export const logout = async () => {
  const token = await getToken();

  await httpClient.post(API.LOGOUT, {
    token,
  });

  removeToken();

  redirect("/login");
};
