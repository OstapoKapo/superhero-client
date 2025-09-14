import { HeroForm } from "@/types";
import { useEffect, useRef, useState } from "react";

type Errors = Record<string, string>;

export function useForm(initialState: HeroForm, type: "create" | "update") {
  const [form, setForm] = useState<HeroForm>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const createdUrlsRef = useRef<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateField = (name: string, value: string | any[]) => {
    let message = "";

    if (typeof value === "string") {
      if (!value.trim()) {
        message = `${name.replace("_", " ")} is required.`;
      } else if (value.trim().length < 5) {
        message = `${name.replace("_", " ")} must be at least 5 characters.`;
      }
    }

    if (Array.isArray(value) && value.length === 0) {
      message = "Please upload at least one image.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return !message;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    const previewsArray = filesArray.map((file) => URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...filesArray],
      previews: [...prev.previews, ...previewsArray],
    }));

    if (type === "create") {
      validateField("images", [...form.images, ...filesArray]);
    }
  };

  const validateAll = (): boolean => {
    let valid = true;
    for (const [key, value] of Object.entries(form)) {
      if(type === "update" && key === "images") continue;
      if (!validateField(key, value)) {
        valid = false;
      }
    }
    return valid;
  };

  const removeImageAt = (index: number) => {
    const urlToRevoke = form.previews[index];
    if (urlToRevoke) {
      try { URL.revokeObjectURL(urlToRevoke); } catch (e) { /* ignore */ }

      const idxInRef = createdUrlsRef.current.indexOf(urlToRevoke);
      if (idxInRef !== -1) createdUrlsRef.current.splice(idxInRef, 1);
    }

    setForm((prev) => {
      const newImages = prev.images.slice();
      const newPreviews = prev.previews.slice();
      newImages.splice(index, 1);
      newPreviews.splice(index, 1);
      return { ...prev, images: newImages, previews: newPreviews };
    });
  };

   const revokeAllPreviews = () => {
    createdUrlsRef.current.forEach((u) => {
      try { URL.revokeObjectURL(u); } catch (e) { /* ignore */ }
    });
    createdUrlsRef.current = [];
    setForm((prev) => ({ ...prev, previews: [] }));
  };


  useEffect(() => {
    return () => {
      createdUrlsRef.current.forEach((u) => {
        try { URL.revokeObjectURL(u); } catch (e) {  }
      });
      createdUrlsRef.current = [];
    };
  }, []);


  return {
    form,
    setForm,
    errors,
    handleChange,
    validateField,
    validateAll,
    handleBlur,
    handleImageUpload,
    removeImageAt,
    revokeAllPreviews
  };
}
