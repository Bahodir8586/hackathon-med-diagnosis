import { useState } from 'react';
import SelectComponent from '../selectComponent.jsx';

const chests = [
  {
    name: 'Breast enlargement in man',
    value: '1',
  },
  {
    name: 'Chest pain',
    value: '2',
  },
  {
    name: 'Heartburn',
    value: '3',
  },
  {
    name: 'Cough',
    value: '4',
  },
  {
    name: 'Shortness of breath',
    value: '5',
  },
  {
    name: 'Accelerated breathing',
    value: '6',
  },
  {
    name: 'Chest injury',
    value: '7',
  },
];
const abdomens = [
  {
    name: 'Stomach pain',
    value: '1',
  },
  {
    name: 'Colic stomach pain',
    value: '2',
  },
  {
    name: 'Lump in stomach',
    value: '3',
  },
  {
    name: 'Bloating',
    value: '4',
  },
  {
    name: 'Diarrhea',
    value: '5',
  },
  {
    name: 'Vomiting',
    value: '6',
  },
];

export default function NextOurForm({ submitForm }) {
  const [chest, setChest] = useState(chests[0]);
  const [midAbdomen, setMidAbdomen] = useState(abdomens[0]);
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(chest.value, midAbdomen.value);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <h3 className="text-xl text-center leading-6 font-medium text-gray-900">Add Symptoms</h3>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <SelectComponent
              label={'Chest'}
              options={chests}
              value={chest}
              onChange={(value) => setChest(value)}
            />
            <SelectComponent
              label={'Mid Abdomen'}
              options={abdomens}
              value={midAbdomen}
              onChange={(value) => setMidAbdomen(value)}
            />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              submitForm(chest.value, midAbdomen.value);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
