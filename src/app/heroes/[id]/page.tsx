import HeroInfoContainer from "@/app/components/container/heroInfoContainer/heroInfoContainer";
import { HeroInfoProps } from "@/types";
import { FC } from "react";

const hero = {
    id: 1,
    nickname: "Superman",
    real_name: "Clark Kent",
    origin_description: "Born on the planet Krypton, sent to Earth as a baby.",
    superpowers: "Super strength, flight, x-ray vision, heat vision, super speed, invulnerability.",
    catch_phrase: "Up, up and away!",
    images: [
        "/backgrounds/superhero.png",
        "/icons/favicon.svg"
    ]
}

const HeroInfo: FC<HeroInfoProps> = async ({params}) => {
    const {id} = await params;
    return (
        <div className="w-full min-h-[calc(100vh-140px)] flex items-center p-8">
            <HeroInfoContainer hero={hero} id={+id}/>
        </div>
    );
}

export default HeroInfo;