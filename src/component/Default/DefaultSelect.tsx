type Option = {
  value: string;
  label: string;
};

type DefaultSelectProps = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
};

export default function DefaultSelect({
  title,
  value,
  onChange,
  options,
  placeholder = 'Select',
}: DefaultSelectProps) {
  return (
    <>
      <p className="text-primary-text-dark ps-1">{title}</p>
      <select
        className="bg-white border !border-tertiary-text rounded-xl block w-full p-2 text-primary-text-dark !outline-none !ring-0 placeholder:text-tertiary-text"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}