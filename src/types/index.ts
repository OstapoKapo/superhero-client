import HeroCard from "@/app/heroes/components/ui/heroCard";

export interface IHero {
    id: number;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    images: IHeroImages[];
    createdAt?: string;
}

export interface IHeroImages {
    id: number;
    url: string;
    createdAt?: string;
    heroId: number
}

export interface GetAllHeroesRes{
    heroes: IHero[];
    totalItems: number;
    totalPages: number;
    perPage: number;
}

export interface AllHeroesProps {
    initialData: GetAllHeroesRes | null;
}

export interface PaginationProps {
    currentPage: number;
    pages: number;
    onPageChange: (page: number) => void;
}

export interface HeroCardProps {
    hero: IHero;
}

export interface HeroInfoContainerProps {
    initialHero: IHero;
    id: number;
}

export interface HeroInfoProps {
    params: Promise<{ id: string }>;
}

export interface HeroDescriptionProps {
    hero: IHero
}

export interface HeroImgPaginationProps {
    heroImages: IHeroImages[];
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
}

export interface HeroForm {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: File[];
  previews: string[];
};
