import { FC } from "react";

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaField: FC<TextAreaFieldProps> = ({ label, name, value, onChange, onBlur, required = false, rows = 4 }) => (
  <div className="flex flex-col gap-2">
    <label className={"text-lg font-semibold text-[#ffcc00]"} htmlFor={name}>★ {label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`px-4 py-2 w-full border border-[#9ca3af] rounded focus:outline-none focus:border-[#ffcc00] bg-gray-900 text-white h-${rows * 7} resize-none`}
      required={required}
    />
  </div>
);
