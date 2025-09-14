'use client'
import { createContext, ReactNode, useContext, useState } from "react";

interface IHeroListContext {
    updateOpen: boolean;
    setUpdateOpen: (open: boolean) => void;
}

const HeroListContext = createContext<IHeroListContext | undefined>(undefined);

export const HeroListProvider = ({ children }: { children: ReactNode }) => {
    const [updateOpen, setUpdateOpen] = useState(false);

    return (
        <HeroListContext.Provider value={{ updateOpen, setUpdateOpen }}>
            {children}
        </HeroListContext.Provider>
    );
};

export const useHeroList = () => {
    const context = useContext(HeroListContext);
    if (!context) {
        throw new Error("useHeroList must be used within a HeroListProvider");
    }
    return context;
};