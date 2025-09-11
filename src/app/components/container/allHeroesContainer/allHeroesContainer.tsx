'use client';
import { AllHeroesProps } from "@/types";
import { FC, useState } from "react";
import Pagination from "../../ui/pagination/pagination";
import { chunkArray } from "@/hooks/chuckArray";
import { motion } from "framer-motion";
import HeroCard from "../../ui/heroCard/heroCard";


const AllHeroesContainer: FC<AllHeroesProps> = ({ heroes }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const heroesPerPage = 5;    
    const [search, setSearch] = useState<string>("");

    const pages = chunkArray(heroes, heroesPerPage);

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
            {heroes.length === 0 ? <div className="w-full text-center"><p className="text-4xl text-bold">No heroes found.</p></div> : (
            <div className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-bold">All Heroes:</h1>
                <section className={`flex flex-wrap justify-center items-center gap-10 min-h-110`}>
                    {pages[currentPage - 1]?.map((hero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))}
                </section>
                <Pagination currentPage={currentPage} pages={pages} onPageChange={setCurrentPage} />
            </div>
            )}
        </motion.main>
    );
};
export default AllHeroesContainer;