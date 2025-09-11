import HeroCard from "@/app/components/ui/heroCard/heroCard";

export interface IHero {
    id: number;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    images: string[];
}

export interface AllHeroesProps {
    heroes: IHero[];
}

export interface PaginationProps {
    currentPage: number;
    pages: IHero[][];
    onPageChange: (page: number) => void;
}

export interface HeroCardProps {
    hero: IHero;
}

export interface HeroInfoContainerProps {
    hero: IHero;
    id: number;
}

export interface HeroInfoProps {
    params: Promise<{ id: string }>;
}

export interface HeroDescriptionProps {
    hero: IHero
}

export interface HeroImgPaginationProps {
    heroImages: string[];
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
}

