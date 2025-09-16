import axios from "axios";
import { HttpService } from "./http.service";

export class HttpFactoryService {
  createHttpService(): HttpService {
    const axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
      withCredentials: true,
    });

    return new HttpService(axiosInstance, "");
  }
}
