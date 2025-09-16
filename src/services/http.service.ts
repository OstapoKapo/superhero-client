import { AxiosInstance } from "axios";

export class HttpService {
  private readonly httpClient: AxiosInstance;
  private readonly baseUrl: string;

  constructor(httpClient: AxiosInstance, baseUrl: string) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    const res = await this.httpClient.get(`${this.baseUrl}/${url}`, { params });
    return res.data;
  }

  public async post<T>(url: string, body: unknown, config?: object): Promise<T> {
    const res = await this.httpClient.post(`${this.baseUrl}/${url}`, body, config);
    return res.data;
  }

  public async put<T>(url: string, body: unknown, config?: object): Promise<T> {
    const res = await this.httpClient.put(`${this.baseUrl}/${url}`, body, config);
    return res.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const res = await this.httpClient.delete(`${this.baseUrl}/${url}`);
    return res.data;
  }
}
