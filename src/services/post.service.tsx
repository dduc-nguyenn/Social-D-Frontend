import { API } from "@/configurations/global.config";
import { httpClient } from "@/configurations/http.client";
import { getToken } from "./local-storage.service";

export const getMyPosts = async (page: number) => {
  const token = await getToken();

  return await httpClient.get(API.MY_POST, {
    params: {
      page: page,
      size: 5,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPost = async (data: FormData) => {
  const token = await getToken();

  return await httpClient.post(API.CREATE_POST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
};
