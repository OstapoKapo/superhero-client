import { HeroImgPaginationProps } from "@/types";
import { FC } from "react";

const HeroImgPagination: FC<HeroImgPaginationProps> = ({ heroImages, currentImageIndex, setCurrentImageIndex }) => {
    return (
        <div className="flex gap-2">
            {heroImages.map((_,index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full ${currentImageIndex === index ? "bg-[#ffcc00]" : "bg-[#9ca3af]"}`}
                />
            ))}
        </div>
    );
}

export default HeroImgPagination;