import { HeroDescriptionProps } from "@/types"
import { FC } from "react"

const HeroDescription: FC<HeroDescriptionProps> = ({ hero }) => {
    return (
         <div className="flex text-white flex-col items-center gap-3">
                <h2 className="text-4xl font-bold text-[#ffcc00]">{hero.nickname}</h2>
                <p><span className="text-[#ff5733] font-semibold">Real Name:</span> {hero.real_name}</p>
                <p><span className="text-[#ff5733] font-semibold">Origin:</span> {hero.origin_description}</p>
                <p><span className="text-[#ff5733] font-semibold">Superpowers:</span> {hero.superpowers}</p>
                <p className="italic text-[#9ca3af]">"{hero.catch_phrase}"</p>
            </div>
    );
};

export default HeroDescription;