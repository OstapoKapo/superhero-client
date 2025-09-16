import { HeroCardProps } from "@/types";
import { FC } from "react";
import Link from "next/link";
import HeroImage from "@/app/components/ui/HeroImage";
import {X} from "lucide-react";
import { useRouter } from "next/navigation";
import useDeleteHeroMutation from "@/hooks/useDeleteHeroMutation";

const HeroCard: FC<HeroCardProps> = ({hero, currentPage, setCurrentPage, heroesPerPage}) => {

    const router = useRouter();
    const deleteMutation = useDeleteHeroMutation(currentPage, setCurrentPage, heroesPerPage);

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        deleteMutation.mutate(hero.id);
    }

    const handleOpenHero = () => {
        router.push(`/heroes/${hero.id}`);
    }

    return (
            <div onClick={handleOpenHero} className="cursor-pointer p-4 w-70 h-75 gap-3 bg-gray-900 border-2 border-[#ffcc00] rounded-xl shadow-2xl flex flex-col items-center justify-between transition duration-300 hover:scale-105"
                key={hero.id}
            >
                <div className="w-full flex justify-end">
                    <X onClick={handleDelete} className="w-8 h-8"/>
                </div>
                <HeroImage
                    url={hero.images?.[0]?.url || '/placeholder.png'}
                    alt={`${hero.nickname} image`}
                    width={180}
                    height={180}
                />
                <h2 className="text-2xl">{hero.nickname}</h2>
            </div>
    );
};

export default HeroCard;
