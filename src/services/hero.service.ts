import { HttpService } from "./http.service";
import { HttpFactoryService } from "./http-factory.service";
import { GetAllHeroesRes, IHero } from "@/types";

class HeroService {
  private readonly module = "heroes";
  constructor(private readonly httpService: HttpService) {}

  public async getAll({page, perPage}: {page: number, perPage: number}): Promise<GetAllHeroesRes> {
    return this.httpService.get(`${this.module}`, { page, perPage });
  }

  public async getById(id: number): Promise<IHero> {
    return this.httpService.get(`${this.module}/${id}`);
  }

  public async create(heroData: FormData): Promise<IHero> {
    return this.httpService.post(`${this.module}`, heroData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  public async update({id, heroData}: {id: number, heroData: FormData}): Promise<IHero> {
    return this.httpService.put(`${this.module}/${id}`, heroData);
  }

  public async delete(id: number) {
    return this.httpService.delete(`${this.module}/${id}`);
  }
}

export const heroService = new HeroService(
  new HttpFactoryService().createHttpService()
);
