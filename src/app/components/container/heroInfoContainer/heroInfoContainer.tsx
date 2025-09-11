'use client'
import { FC, useState } from "react";
import Image from "next/image";
import { HeroInfoContainerProps } from "@/types";
import HeroDescription from "../../ui/heroDescription/heroDescription";
import HeroImgPagination from "../../ui/heroImgPagination/heroImgPagination";

const HeroInfoContainer: FC<HeroInfoContainerProps> = ({ hero, id }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <main className="w-full min-h-[100%] flex flex-col items-center gap-20">
            <div className="flex flex-col items-center gap-4 justify-center">
                <Image
                    src={hero.images[currentImageIndex]}
                    alt={`${hero.nickname} image ${currentImageIndex + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <HeroImgPagination 
                currentImageIndex={currentImageIndex} 
                heroImages={hero.images} 
                setCurrentImageIndex={setCurrentImageIndex} 
                />
            </div>

           <HeroDescription hero={hero} />
        </main>
    )
}

export default HeroInfoContainer;