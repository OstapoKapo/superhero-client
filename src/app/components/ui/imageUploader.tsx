import { FC } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  images: string[];
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImageAt: (index: number) => void;
}

export const ImageUploader: FC<ImageUploaderProps> = ({ images, onUpload, removeImageAt }) => (
  <div className="flex flex-col gap-2">
    <label className={"text-lg font-semibold text-[#ffcc00]"} htmlFor="images">★ Images</label>
    <input
      id="images"
      type="file"
      accept="image/*"
      multiple
      onChange={onUpload}
      className="text-white"
    />
    <div className="flex flex-wrap gap-4 mt-4">
      {images.map((img, index) => (
        <div key={index} className="p-1 flex flex-col items-center justify-between w-35 h-35 border-2 border-[#ffcc00] rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-24 h-24 rounded-xl shadow-lg overflow-hidden">
            <Image src={img} alt={`preview-${index}`} className="object-cover" fill />
          </div>
          <button  type="button" onClick={() => removeImageAt(index)}>Remove</button>
        </div>
      ))}
    </div>
  </div>
);
