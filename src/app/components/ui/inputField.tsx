import { FC } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

export const InputField: FC<InputFieldProps> = ({ label, name, value, onChange, required = false, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className={"text-lg font-semibold text-[#ffcc00]"} htmlFor={name}>★ {label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={"px-4 py-2 w-full border border-[#9ca3af] rounded focus:outline-none focus:border-[#ffcc00] bg-gray-900 text-white"}
      required={required}
    />
  </div>
);
