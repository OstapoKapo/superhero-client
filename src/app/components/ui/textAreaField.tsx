import { FC, TextareaHTMLAttributes } from "react";

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextAreaField: FC<TextAreaFieldProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-lg font-semibold text-[#ffcc00]" htmlFor={props.name}>
      ★ {label}
    </label>
    <textarea
      {...props}
      className={`px-4 py-2 w-full border border-[#9ca3af] rounded focus:outline-none focus:border-[#ffcc00] bg-gray-900 text-white resize-none`}
    />
  </div>
);
