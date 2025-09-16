
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-2">{label}</label>
      <input
        className="w-full rounded-md p-3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        {...props} // тут RHF сам підкине value, onChange, onBlur, name, ref
      />
    </div>
  );
};

