import { HeroInfoProps, IHero } from "@/types";
import { FC } from "react";
import HeroInfoContainer from "./components/container/heroInfoContainer";
import { heroService } from "@/services/hero.service";

const HeroInfo: FC<HeroInfoProps> = async ({params}) => {
    let result: IHero | null = null
    const {id} = await params;
    try{
        result = await heroService.getById(+id);
        console.log(result)
    }catch(error: unknown){
        return null;
    }


    return (
        <div className="w-full min-h-[calc(100vh-140px)] flex items-center p-8">
            {result && <HeroInfoContainer initialHero={result} id={+id}/>}
        </div>
    );
}

export default HeroInfo;