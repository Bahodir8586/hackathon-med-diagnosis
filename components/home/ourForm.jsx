import React, { useState } from 'react';
import Body from './body';

const OurForm = ({ submitForm }) => {
  const [bodyParts, setBodyParts] = useState([]);
  const addBodyPart = (val) => {
    console.log(val);
    const newBoydParts = [...bodyParts];
    newBoydParts.push(val);
    setBodyParts(newBoydParts);
  };
  return (
    <form
      className="max-w-3xl mx-auto space-y-8 divide-y divide-gray-200 border p-8 bg-gray-50 shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(bodyParts);
      }}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <h3 className="mb-6 text-3xl font-bold text-center">Add symptoms</h3>
        <div className="pt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div className="flex justify-between">
            <div>
              {bodyParts?.map((el) => (
                <div key={el}>{el}</div>
              ))}
            </div>
            <Body onClick={(val) => addBodyPart(val)} />
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
              submitForm(bodyParts);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default OurForm;
