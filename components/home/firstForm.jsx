import { useState } from 'react';
import SelectComponent from '../selectComponent.jsx';

const options = [
  {
    name: 'Yes',
    value: true,
  },
  {
    name: 'No',
    value: false,
  },
];
export default function FirstForm({ submitForm }) {
  const [chosenValue, setChosenValue] = useState(options[0]);
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(chosenValue.value);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <SelectComponent
            label={'Do you know your illness'}
            options={options}
            value={chosenValue}
            onChange={(value) => setChosenValue(value)}
          />
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              submitForm(chosenValue.value);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
