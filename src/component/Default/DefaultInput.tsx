type DefaultInputProps = {
  title?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function DefaultInput({ title, placeholder, value, onChange, required = false }: DefaultInputProps) {
  return (
    <>
        <p className="text-primary-text-dark ps-1">{title}</p>
        <input
            placeholder={placeholder}
            className="bg-white border !border-tertiary-text rounded-xl block w-full p-2 text-primary-text-dark !outline-none !ring-0 placeholder:text-tertiary-text"
            type="text"
            value={value}
            onChange={onChange}
            required={required}
        />
    </>
  );
}