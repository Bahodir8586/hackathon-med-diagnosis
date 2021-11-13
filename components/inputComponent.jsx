import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default function InputComponent({ input, onChange }) {
  const { label, value, placeholder, type } = input;
  return (
    <div className="flex items-center justify-between">
      <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label>
      <div className="w-2/3 mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={label}
          className={`w-full border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 placeholder-gray-300 focus:outline-none  sm:text-sm rounded-md`}
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
