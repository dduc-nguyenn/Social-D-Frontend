import axios from "axios";
import { CONFIG } from "./global.config";

export const httpClient = axios.create({
  baseURL: CONFIG.API_GATEWAY,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

