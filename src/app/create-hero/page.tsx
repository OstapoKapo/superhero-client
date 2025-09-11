'use client';

import { useState } from "react";
import Image from "next/image";

const baseInput = "px-4 py-2 w-full border border-[#9ca3af] rounded focus:outline-none focus:border-[#ffcc00] bg-gray-900 text-white";
const baseLabel = "text-lg font-semibold text-[#ffcc00]";
const baseBtn = "px-6 py-3 rounded text-xl transition-colors";
const orangeBtn = `${baseBtn} bg-[#ff5733] text-white hover:bg-[#9ca3af] hover:text-black`;

export default function CreateHeroPage() {
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
        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="nickname">★ Nickname</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            value={form.nickname}
            onChange={handleChange}
            className={baseInput}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="real_name">★ Real Name</label>
          <input
            id="real_name"
            name="real_name"
            type="text"
            value={form.real_name}
            onChange={handleChange}
            className={baseInput}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="origin_description">★ Origin</label>
          <textarea
            id="origin_description"
            name="origin_description"
            value={form.origin_description}
            onChange={handleChange}
            className={`${baseInput} h-28 resize-none`}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="superpowers">★ Superpowers</label>
          <textarea
            id="superpowers"
            name="superpowers"
            value={form.superpowers}
            onChange={handleChange}
            className={`${baseInput} h-28 resize-none`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="catch_phrase">★ Catch Phrase</label>
          <input
            id="catch_phrase"
            name="catch_phrase"
            type="text"
            value={form.catch_phrase}
            onChange={handleChange}
            className={baseInput}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={baseLabel} htmlFor="images">★ Images</label>
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="text-white"
          />

          <div className="flex flex-wrap gap-4 mt-4">
            {form.previews.map((img, idx) => (
              <div
                key={idx}
                className="relative w-32 h-32 border-2 border-[#ffcc00] rounded-xl shadow-lg overflow-hidden"
              >
                <Image src={img} alt={`preview-${idx}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-5 justify-end">
          <button type="submit" className={orangeBtn}>Create</button>
        </div>
      </form>
    </main>
  );
}
