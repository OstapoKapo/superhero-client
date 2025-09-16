'use client';
import useCreateHeroMutation from "@/hooks/useCreateHeroMutation";
import Form from "../components/ui/form";

const CreateHeroPage = () => {
  const createHeroMutation = useCreateHeroMutation();

  const handleSubmit = async (data: any) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        (value as File[]).forEach(file => formData.append("images", file));
      } else {
        formData.append(key, value as string);
      }
    });

    createHeroMutation.mutate(formData);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-140px)] p-8">
      <h1 className="text-3xl font-bold text-[#ffcc00] mb-8">Create a New Hero</h1>
      <Form onSubmit={handleSubmit} type="create" />
    </main>
  );
};

export default CreateHeroPage;
