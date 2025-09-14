'use client';
import { AllHeroesProps, IHero } from "@/types";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import HeroCard from "../ui/heroCard";
import Pagination from "../ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { getAllHeroesAPI } from "@/api/superheroAPI";


const AllHeroesContainer: FC<AllHeroesProps> = ({ initialData }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const heroesPerPage = 5;    
    const [search, setSearch] = useState<string>("");
    const { data, isLoading, error } = useQuery({
        queryKey: ['heroes', currentPage, heroesPerPage], 
        queryFn: () => getAllHeroesAPI({ page: currentPage, perPage: heroesPerPage }), 
        initialData: currentPage === 1 ? initialData : undefined,
        staleTime: 1000 * 60 ,
    }); 

    if (isLoading && !error) return <div>Loading...</div>;

    return (
        <motion.main
            layout
            className="flex min-h-[100%] w-full"
            transition={{ type: "spring",        
                stiffness: 150,        
                damping: 20,       
                mass: 1 
            }}
        >
            {data.heroes.length === 0 ? <div className="w-full text-center"><p className="text-4xl text-bold">No heroes found.</p></div> : (
            <div className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-bold">All Heroes:</h1>
                <section className={`flex flex-wrap justify-center items-center gap-10 min-h-110`}>
                    {data.heroes.map((hero: IHero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </section>
                <Pagination currentPage={currentPage} pages={data.totalPages} onPageChange={setCurrentPage} />
            </div>
            )}
        </motion.main>
    );
};
export default AllHeroesContainer;