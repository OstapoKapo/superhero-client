import { useForm as useRHForm } from "react-hook-form";
import { HeroForm } from "@/types";

type HeroFormInputs = HeroForm;

export function useHeroForm(type: "create" | "update", defaultValues?: Partial<HeroForm>) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useRHForm<HeroForm>({
    defaultValues,
  });

  const images = watch("images");
  const previews = watch("previews");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);
    const previewsArray = filesArray.map((file) => URL.createObjectURL(file));

    setValue("images", [...images, ...filesArray]);
    setValue("previews", [...previews, ...previewsArray]);
  };

  const removeImageAt = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...previews];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setValue("images", newImages);
    setValue("previews", newPreviews);
  };

  return {
    register,
    handleSubmit,
    errors,
    handleImageUpload,
    removeImageAt,
    previews,
  };
}
