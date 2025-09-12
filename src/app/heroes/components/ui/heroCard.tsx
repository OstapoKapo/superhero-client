import { HeroCardProps } from "@/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroCard: FC<HeroCardProps> = ({hero}) => {
    return (
        <Link href={`/heroes/${hero.id}`}>
            <div className="cursor-pointer p-4 w-70 h-70 bg-gray-900 border-2 border-[#ffcc00] rounded-xl shadow-2xl flex flex-col items-center justify-between transition duration-300 hover:scale-105"
                key={hero.id}
            >
               
                <h2 className="text-2xl">{hero.nickname}</h2>
            </div>
        </Link>
    );
};

export default HeroCard;
