import { API } from "@/configurations/global.config";
import { httpClient } from "@/configurations/http.client";

export const getMyInfo = async () => {
  const response = await httpClient.get(API.MY_INFO);
  return response.data;
};
