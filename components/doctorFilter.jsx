import React, { useState } from 'react';

const DoctorFilter = ({ search }) => {
  const [name, setName] = useState('');
  return (
    <div className="flex flex-row mb-4 justify-center w-full">
      <form
        className="flex md:flex-row justify-between w-full md:space-x-3 space-y-3 md:space-y-0 md:justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          search(name);
        }}
      >
        <div className="font-medium text-xl mr-2 hidden md:inline-flex">Search</div>
        <div className=" relative ">
          <input
            type="text"
            id='"form-subscribe-Filter'
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-72 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            search(name);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default DoctorFilter;
