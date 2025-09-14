'use client';
import { useForm } from "@/hooks/useForm";
import { HeroForm } from "@/types";
import useCreateHeroMutation from "@/hooks/useCreateHeroMutation";
import Form from "../components/ui/form";

const CreateHeroPage = () => {
    const { form, revokeAllPreviews, errors, handleChange, validateAll, handleBlur, handleImageUpload, removeImageAt } = useForm({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [] as File[],
        previews: [] as string[],
    } as HeroForm, "create");

    const createHeroMutation = useCreateHeroMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
        if(key === "images"){
            (value as File[]).forEach((file) => data.append("images", file));
        }else{
            data.append(key, value as string)
        }
    })
    createHeroMutation.mutate(data);
    revokeAllPreviews();
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-140px)] p-8">
      <h1 className="text-3xl font-bold text-[#ffcc00] mb-8">Create a New Hero</h1>
      <Form 
        handleSubmit={handleSubmit}
        form={form}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleImageUpload={handleImageUpload}
        removeImageAt={removeImageAt}
        errors={errors}
        type="create"
      />
    </main>
  );
};

export default CreateHeroPage;
