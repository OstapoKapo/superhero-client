import { GetAllHeroesRes, IHero } from "@/types";
import AllHeroesContainer from "./components/container/allHeroesContainer";
import { getAllHeroesAPI } from "@/api/superheroAPI";

const HeroesPage = async () => {

    let result: GetAllHeroesRes | null = null;

    try{
        result = await getAllHeroesAPI({page: 1, perPage: 5});
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