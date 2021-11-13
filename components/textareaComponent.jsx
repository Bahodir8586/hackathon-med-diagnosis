import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default function TextareaComponent({ input, onChange }) {
  const { label, value, placeholder } = input;
  return (
    <div className="flex items-center justify-between">
      <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
      <div className="w-2/3 mt-1 relative rounded-md">
        <textarea
          name={label}
          rows={5}
          className={`w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 block sm:text-sm border-gray-300 rounded-md`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
