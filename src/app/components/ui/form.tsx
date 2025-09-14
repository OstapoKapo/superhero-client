import { HeroForm } from "@/types";
import { FC } from "react";
import { InputField } from "./inputField";
import { TextAreaField } from "./textAreaField";
import { ImageUploader } from "./imageUploader";

interface HeroFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    form: HeroForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeImageAt: (index: number) => void;
    errors: Record<string, string>;
    type: "create" | "update";
}

const Form: FC<HeroFormProps> = ({ handleSubmit, form, handleChange, handleBlur, handleImageUpload, removeImageAt, errors, type }) => {
    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-2xl"
      >
        <div>
          <InputField label="Nickname" name="nickname" value={form.nickname} onBlur={handleBlur} onChange={handleChange} required />
          {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname}</p>}
        </div>

        <div>
          <InputField label="Real Name" name="real_name" value={form.real_name} onBlur={handleBlur} onChange={handleChange} required />
          {errors.real_name && <p className="text-red-500 text-sm">{errors.real_name}</p>}
        </div>

        <div>
          <InputField label="Catch Phrase" name="catch_phrase" value={form.catch_phrase} onBlur={handleBlur} onChange={handleChange} />
          {errors.catch_phrase && <p className="text-red-500 text-sm">{errors.catch_phrase}</p>}
        </div>

        <div>
          <TextAreaField
            label="Origin Description"
            name="origin_description"
            value={form.origin_description}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={6}
          />
          {errors.origin_description && <p className="text-red-500 text-sm">{errors.origin_description}</p>}
        </div>

        <div>
          <TextAreaField
            label="Superpowers"
            name="superpowers"
            value={form.superpowers}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
          />
          {errors.superpowers && <p className="text-red-500 text-sm">{errors.superpowers}</p>}
        </div>

        <div>
          <ImageUploader  removeImageAt={removeImageAt} images={form.previews} onUpload={handleImageUpload}/>
          {errors.images && <p className="text-red-500 text-sm">{errors.images}</p>}
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
    )
}

export default Form;