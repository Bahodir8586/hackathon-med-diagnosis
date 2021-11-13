import { useState } from 'react';
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
const hospitals = [
  {
    name: 'Hospital 1',
    value: 'hos1',
  },
  {
    name: 'Hospital 2',
    value: 'hos2',
  },
  {
    name: 'Hospital 3',
    value: 'hos3',
  },
];
const doctors = [
  {
    name: 'Doctor 1',
    value: 'doc1',
  },
  {
    name: 'Doctor 2',
    value: 'doc2',
  },
  {
    name: 'Doctor 3',
    value: 'doc3',
  },
];

export default function AddReviewForm({ submitForm }) {
  const [hospital, setHospital] = useState(hospitals[0]);
  const [doctor, setDoctor] = useState(doctors[0]);
  const [rating, setRating] = useState(ratings[0]);
  const [review, setReview] = useState('');
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(hospital.value, doctor.value, rating.value, review);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <h3 className="text-xl text-center leading-6 font-medium text-gray-900">
            Leave a review
          </h3>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <SelectComponent
              label={'Hospital'}
              options={hospitals}
              value={hospital}
              onChange={(value) => setHospital(value)}
            />
            <SelectComponent
              label={'Doctor'}
              options={doctors}
              value={doctor}
              onChange={(value) => setDoctor(value)}
            />
            <SelectComponent
              label={'Rating'}
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
              submitForm(hospital.value, doctor.value, rating.value, review);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
