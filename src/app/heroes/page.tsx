import { GetAllHeroesRes, IHero } from "@/types";
import AllHeroesContainer from "./components/container/allHeroesContainer";
import { heroService } from "@/services/hero.service";

const HeroesPage = async () => {

    let result: GetAllHeroesRes | null = null;

    try{
        result = await heroService.getAll({page: 1, perPage: 5});
        console.log(result)
    }catch(error: unknown){
        return null;
    }

    return (
        <div className="min-h-[calc(100vh-140px)] w-full p-8 ">
            {result && <AllHeroesContainer initialData={result} />}
        </div>
    );
};

export default HeroesPage;