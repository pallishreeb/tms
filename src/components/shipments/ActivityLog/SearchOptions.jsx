/** @format */

import React from "react";

const SearchOptions = () => {
  const activityOptions = [
    "All",
    "Audit",
    "Claims",
    "Email",
    "General",
    "Operation",
    "Payable",
    "Pricing",
    "Receivable",
    "Status Chnage",
  ];
  return (
    <div className=" py-2 pl-10 grid grid-cols-12 gap-4">
      <div className="col-span-6 sm:col-span-4 flex flex-col">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Description
        </label>
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Description"
        />
      </div>
      <div className="col-span-6 sm:col-span-2 flex flex-col">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Activity Type
        </label>
        <select className="px-4 py-2 border border-gray-300 rounded-md" name="activityType">
          {activityOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2 flex flex-col">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Date Start
        </label>
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-2 flex flex-col">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Date End
        </label>
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-2 flex justify-start items-end py-1">
        <button
          type="submit"
          className="inline-flex  px-4 py-2 text-base 
                text-white bg-blue-500 rounded-md
                "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchOptions;
