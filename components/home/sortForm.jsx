import { useState } from 'react';
import SelectComponent from '../selectComponent.jsx';

const ratings = [
  {
    value: '0',
    name: '0 - 5',
  },
  {
    value: '2',
    name: '2 - 5',
  },
  {
    value: '4',
    name: '4 - 5',
  },
];
const distances = [
  {
    name: '0 - 1 km',
    value: '1',
  },
  {
    name: '0 - 5 km',
    value: '5',
  },
  {
    name: '0 - 10 km',
    value: '10',
  },
  {
    name: '10 km +',
    value: '100',
  },
];
const prices = [
  {
    name: '0 - 100 000',
    value: '100000',
  },
  {
    name: '100 000 - 500 000',
    value: '500000',
  },
  {
    name: '500 000 +',
    value: '1000000',
  },
];

export default function SortForm({ submitForm }) {
  const [distance, setDistance] = useState(distances[0]);
  const [rating, setRating] = useState(ratings[0]);
  const [price, setPrice] = useState(prices[0]);
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(rating.value, price.value, distance.value);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <h3 className="text-xl text-center leading-6 font-medium text-gray-900">
            Select your preferences
          </h3>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <SelectComponent
              label={'Distance'}
              options={distances}
              value={distance}
              onChange={(value) => setDistance(value)}
            />
            <SelectComponent
              label={'Price'}
              options={prices}
              value={price}
              onChange={(value) => setPrice(value)}
            />
            <SelectComponent
              label={'Rating'}
              options={ratings}
              value={rating}
              onChange={(value) => setRating(value)}
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
              submitForm(rating.value, price.value, distance.value);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
