import { IHero } from "@/types";
import AllHeroesContainer from "../components/container/allHeroesContainer/allHeroesContainer";

const allHeroes: IHero[] = [
    {
        id: 1,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    },
    {
        id: 2,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    },
    {
        id: 3,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    },
    {
        id: 4,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    },
    {
        id: 5,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    },
    {
        id: 6,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: ["/backgrounds/superhero.png", "/images/superman2.jpg"]
    }
]
const HeroesPage = () => {
    return (
        <div className="min-h-[calc(100vh-140px)] w-full p-8 ">
            <AllHeroesContainer heroes={allHeroes} />
        </div>
    );
};

export default HeroesPage;