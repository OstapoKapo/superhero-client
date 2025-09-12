'use client';

import { useState } from "react";
import { InputField } from "../components/ui/inputField";
import { TextAreaField } from "../components/ui/textAreaField";
import { ImageUploader } from "../components/ui/imageUploader";

const  CreateHeroPage = () => {
  const [form, setForm] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",
    images: [] as File[],
    previews: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    const previews = filesArray.map((file) => URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...filesArray],
      previews: [...prev.previews, ...previews],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nickname", form.nickname);
    data.append("real_name", form.real_name);
    data.append("origin_description", form.origin_description);
    data.append("superpowers", form.superpowers);
    data.append("catch_phrase", form.catch_phrase);

    form.images.forEach((file) => data.append("images", file));

   
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-140px)] p-8">
      <h1 className="text-3xl font-bold text-[#ffcc00] mb-8">Create a New Hero</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl"
      >
        <InputField  label="Nickname" name="nickname" value={form.nickname} onChange={handleChange} required />
        <InputField  label="Real Name" name="real_name" value={form.real_name} onChange={handleChange} required />
        <InputField  label="Catch Phrase" name="catch_phrase" value={form.catch_phrase} onChange={handleChange} />
        <TextAreaField label="Origin Description" name="origin_description" value={form.origin_description} onChange={handleChange} required rows={6} />
        <TextAreaField label="Superpowers" name="superpowers" value={form.superpowers} onChange={handleChange} rows={4} />
        <ImageUploader images={form.previews} onUpload={handleImageUpload} />
        <div className="flex gap-5 justify-end">
          <button type="submit" className={"px-6 py-3 rounded text-xl transition-colors bg-[#ff5733] text-white hover:bg-[#9ca3af] hover:text-black"}>Create</button>
        </div>
      </form>
    </main>
  );
};

export default CreateHeroPage;
