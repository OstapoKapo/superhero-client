'use client'
import { FC, useState } from "react";
import HeroImgPagination from "../ui/heroImgPagination";
import HeroDescription from "../ui/heroDescription";
import HeroImage from "@/app/components/ui/HeroImage";
import { HeroInfoContainerProps, IHero } from "@/types";
import useChangeHeroMutation from "@/hooks/useChangeHeroMutation";
import { useHeroList } from "@/store/heroListContext";
import Form from "@/app/components/ui/form";

const HeroInfoContainer: FC<HeroInfoContainerProps> = ({ initialHero, id }) => {
  const [hero, setHero] = useState(initialHero); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { updateOpen } = useHeroList();
  const updateHeroMutation = useChangeHeroMutation();

  const handleUpdate = async (data: any) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        (value as File[]).forEach(file => formData.append("images", file));
      } else {
        formData.append(key, value as string);
      }
    });

    data.previews?.forEach((url: string) => {
      if (typeof url === "string" && url.startsWith("http")) {
        formData.append("existingImages", url);
      }
    });

    updateHeroMutation.mutate(
      { id, heroData: formData },
      {
        onSuccess: (updatedHero: IHero) => setHero(updatedHero),
      }
    );
  };

  return (
    <main className="w-full min-h-[100%] flex flex-col items-center gap-20">
      {!updateOpen && (
        <div className="flex flex-col items-center gap-4 justify-center">
          <HeroImage
            url={hero.images?.[currentImageIndex]?.url || '/placeholder.png'}
            alt={`${hero.nickname} image`}
            width={300}
            height={300}
          />
          <HeroImgPagination
            currentImageIndex={currentImageIndex}
            heroImages={hero.images || []}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      )}

      <div className="flex flex-col items-center gap-3 w-full max-w-md">
        {updateOpen ? (
          <>
            <h1 className="text-4xl">Change Hero:</h1>
            <Form 
                type="update" 
                onSubmit={handleUpdate} 
                defaultValues={{
                    nickname: hero.nickname,
                    real_name: hero.real_name,
                    catch_phrase: hero.catch_phrase,
                    origin_description: hero.origin_description,
                    superpowers: hero.superpowers,
                    images: [], 
                    previews: hero.images?.map(img => img.url) || [], 
                }}
            />
          </>
        ) : (
          <HeroDescription hero={hero} />
        )}
      </div>
    </main>
  );
};

export default HeroInfoContainer;
