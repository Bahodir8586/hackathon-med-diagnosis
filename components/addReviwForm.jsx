import { useState } from 'react';
import InputComponent from './inputComponent';
import TextareaComponent from './textareaComponent';
import SelectComponent from './selectComponent';

const ratings = [
  {
    value: '1',
    name: 1,
  },
  {
    value: '2',
    name: 2,
  },
  {
    value: '3',
    name: 3,
  },
  {
    value: '4',
    name: 4,
  },
  {
    value: '5',
    name: 5,
  },
];

export default function EmployeeForm({ submitForm }) {
  const [rating, setRating] = useState(ratings[0].value);
  const [review, setReview] = useState('');
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(rating, review);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <h3 className="text-xl text-center leading-6 font-medium text-gray-900">
            Leave a review
          </h3>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <SelectComponent
              label={'Role'}
              options={ratings}
              value={rating}
              onChange={(value) => setRating(value)}
            />
            <TextareaComponent
              input={{
                label: 'Review',
                placeholder: 'Type here...',
                value: review,
              }}
              onChange={(val) => setReview(val)}
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
              submitForm(rating, review);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}