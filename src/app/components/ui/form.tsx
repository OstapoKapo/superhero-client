import { FC } from "react";
import { useHeroForm } from "@/hooks/useHeroForm";
import { InputField } from "./inputField";
import { TextAreaField } from "./textAreaField";
import { ImageUploader } from "./imageUploader";
import { HeroForm } from "@/types";

interface HeroFormProps {
  onSubmit: (data: any) => void;
  type: "create" | "update";
  defaultValues?: Partial<HeroForm>;
}

const Form: FC<HeroFormProps> = ({ onSubmit, type, defaultValues }) => {
  const { register, handleSubmit, errors, handleImageUpload, removeImageAt, previews } =
    useHeroForm(type, defaultValues || {
      nickname: "",
      real_name: "",
      catch_phrase: "",
      origin_description: "",
      superpowers: "",
      images: [],
      previews: [],
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl"
    >
      <div>
        <InputField label="Nickname" {...register("nickname", { required: "Nickname is required", minLength: { value: 3, message: "Min 3 chars" } })} />
        {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname.message}</p>}
      </div>

      <div>
        <InputField label="Real Name" {...register("real_name", { required: "Real name is required" })} />
        {errors.real_name && <p className="text-red-500 text-sm">{errors.real_name.message}</p>}
      </div>

      <div>
        <InputField label="Catch Phrase" {...register("catch_phrase")} />
      </div>

      <div>
        <TextAreaField label="Origin Description" rows={6} {...register("origin_description", { required: "Description is required" })} />
        {errors.origin_description && <p className="text-red-500 text-sm">{errors.origin_description.message}</p>}
      </div>

      <div>
        <TextAreaField label="Superpowers" rows={4} {...register("superpowers")} />
      </div>

      <div>
        <ImageUploader images={previews} onUpload={handleImageUpload} removeImageAt={removeImageAt} />
        {errors.images && <p className="text-red-500 text-sm">{errors.images.message as string}</p>}
      </div>

      <div className="flex gap-5 justify-end">
        <button
          type="submit"
          className="px-6 py-3 rounded text-xl transition-colors bg-[#ff5733] text-white hover:bg-[#9ca3af] hover:text-black"
        >
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default Form;
