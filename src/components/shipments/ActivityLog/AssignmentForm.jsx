/** @format */

import React from "react";

const AssignmentForm = ({ closeAssignmentForm }) => {
  const assignmnetTypeOptions = [
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
    <form>
      <div className=" py-2 pl-10 grid grid-cols-12 gap-4">
        <div className="col-span-6 sm:col-span-6 flex flex-col">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Type
          </label>
          <select
            className="px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            name="activityType"
          >
            {assignmnetTypeOptions.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 sm:col-span-6 flex flex-col">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Privacy
          </label>
          <select
            className="px-4 py-2 border bg-gray-100 border-gray-300 rounded-md"
            name="activityType"
          >
            <option value={"Private"}>Private</option>
            <option value={"Public"}>Public</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-12 flex flex-col">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Description
          </label>
          <textarea
            className="px-4 py-2 border border-gray-300 bg-gray-100 rounded-md"
            rows="3"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <div className="col-span-6 sm:col-span-6 flex flex-col">
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Assign To
          </label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 bg-gray-100 rounded-md"
            defaultValue={"MySelf"}
          />
        </div>
        <div className="col-span-6 flex justify-start items-end py-1 gap-2">
          <button
            type="button"
            onClick={closeAssignmentForm}
            className="inline-flex  px-4 py-2 text-base 
                 border-gray-500 border rounded-md hover:bg-gray-500 hover:text-white
                "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex  px-4 py-2 text-base 
                text-white bg-blue-500 rounded-md hover:opacity-90
                "
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AssignmentForm;
