import { FC } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  images: string[];
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploader: FC<ImageUploaderProps> = ({ images, onUpload }) => (
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
      {images.map((img, idx) => (
        <div key={idx} className="relative w-32 h-32 border-2 border-[#ffcc00] rounded-xl shadow-lg overflow-hidden">
          <Image src={img} alt={`preview-${idx}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  </div>
);
