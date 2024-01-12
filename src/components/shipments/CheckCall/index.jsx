/** @format */

import React, { useState } from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaTruck,
  FaShippingFast,
  FaHome,
  FaEye,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { CiHome } from "react-icons/ci";
const Breadcrumb = () => {
  return (
    <nav className="mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 border-b-4  border-b-blue-500">
        <li className="text-gray-500">Quote</li>
        <li className="mx-2 text-blue-500">&#62;</li>
        <li className="text-gray-500">Committed</li>
        <li className="mx-2 text-blue-500">&#62;</li>
        <li className="text-gray-500">Dispatched</li>
        <li className="mx-2 text-blue-500">&#62;</li>
        <li className="text-gray-500">In Transit</li>
        <li className="mx-2 text-blue-500">&#62;</li>
        <li className="bg-blue-500 px-2 py-1 text-white rounded-t-md">
          Delivered
        </li>
      </ol>
    </nav>
  );
};
const CheckCall = ({ isOpen, onClose }) => {
  // const [statusChanges, setStatusChanges] = useState([])
  const [activeInfo, setActiveInfo] = useState("Carrier_Info");
  const statusChanges = [
    {
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
  ];
  const GetInfoInput = () => {
    switch (activeInfo) {
      case "Carrier_Info":
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              PRO Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Pro Number"
            />
          </div>
        );
      case "fpickup_Info":
        return (
          <div>
            <div className="mb-4 grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:col-span-6 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Pickup Appointment Date
                </label>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Begin Time
                </label>
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  End Time
                </label>
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Pickup Ready Date
                </label>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Pickup Ready Time
                </label>
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        );
      case "lpickup_Info":
        return (
          <div>
            <div className="mb-4 grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:col-span-6 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Proof of Delivery Date
                </label>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Arrival
                </label>
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Departure
                </label>
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-9 flex flex-col">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Proof of Delivery Signed By
                </label>
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  // const modalClasses = isOpen
  //   ? "fixed inset-0  overflow-y-auto   flex items-center justify-center bg-opacity-50 bg-black"
  //   : "hidden";
  const modalClasses = isOpen
    ? "py-12 bg-black bg-opacity-50 flex items-center justify-center bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 overflow-scroll"
    : "hidden";
  return (
    <div className={modalClasses}>
      <div className="bg-white rounded-lg   shadow-xl  sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 ">
        {/* Modal Header */}
        <div className="text-gray-800 bg-inherit  py-4 px-6 bg-opacity-90  border-b border-b-gray-300 flex justify-between items-center ">
          <h1 className="text-2xl font-semibold ">Check Call</h1>
          <FaTimes onClick={onClose} className="cursor-pointer" />
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="flex gap-4 mb-2 items-center">
            <p className="text-xl font-bold">LTL:123456789</p>
            <Breadcrumb />
          </div>
          <div className="grid grid-cols-12 gap-8 mb-4">
            <div
              className={`col-span-12 lg:col-span-6  border  rounded-md   ${
                activeInfo === "Carrier_Info"
                  ? "bg-gray-100 hover:shadow-none transition duration-150 ease-in-out transform"
                  : " shadow-lg hover:bg-gray-100 hover:shadow-none"
              }`}
              onClick={() => setActiveInfo("Carrier_Info")}
            >
              <div className="mb-2 border-b-2 p-4 bg-gray-200 text-[#007bff] border-b-gray-300 flex justify-between items-center ">
                <h2 className="text-lg font-semibold">GONZALEZ TRANSPORT</h2>
                <p className="text-sm font-medium cursor-pointer flex items-center hover:underline">
                  Terminal Info
                  <FaExternalLinkAlt />
                </p>
              </div>
              <div className="mb-2 px-8 py-4">
                <h3 className="text-md py-2 font-medium text-gray-500 flex items-center gap-2">
                  <FaTruck /> Linehoul
                </h3>
                <div className="flex  items-center justify-between">
                  <ul className="text-md font-semibold">
                    <li>Status</li>
                    <li>Service Level</li>
                    <li> Total Weight</li>
                  </ul>
                  <ul className="text-sm text-gray-800">
                    <li>Delivered</li>
                    <li>Normal</li>
                    <li>44000lbs</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 border-t-2 border-b-gray-300 bg-gray-100">
                <p
                  className={` cursor-pointer  flex items-center gap-2 ${
                    activeInfo === "Carrier_Info"
                      ? "text-slate-800"
                      : "text-[#007bff] hover:underline"
                  } `}
                >
                  {activeInfo === "Carrier_Info" ? (
                    <FaArrowAltCircleDown />
                  ) : (
                    <FaEye />
                  )}
                  View carrier Information
                </p>
              </div>
            </div>
            <div
              className={`col-span-12 lg:col-span-3  border border-gray-300 rounded-md relative  hover:shadow-none ${
                activeInfo === "fpickup_Info"
                  ? "bg-gray-100 hover:shadow-none transition duration-150 ease-in-out transform"
                  : " shadow-lg hover:bg-gray-100 hover:shadow-none"
              }`}
              onClick={() => setActiveInfo("fpickup_Info")}
            >
              <div className="mb-2 border-b-2 p-4 bg-gray-200 text-gray-500 border-b-gray-300 flex items-center gap-2">
                <FaHome className="text-xl" />
                <h2 className="text-lg font-semibold">First Pickup</h2>
              </div>
              <div className="mb-2 px-8 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              </div>
              <div
                className={`p-4 border-t-2 absolute bottom-0 w-full border-b-gray-300 bg-gray-100  text-center cursor-pointer  flex items-center gap-2 ${
                  activeInfo === "fpickup_Info"
                    ? "text-slate-800"
                    : "text-[#007bff] hover:underline"
                } `}
              >
                {activeInfo === "fpickup_Info" ? (
                  <FaArrowAltCircleDown />
                ) : (
                  <FaEye />
                )}{" "}
                View First Pick Up Info
              </div>
            </div>
            <div
              className={`col-span-12 lg:col-span-3  border border-gray-300 rounded-md relative   ${
                activeInfo === "lpickup_Info"
                  ? "bg-gray-100 hover:shadow-none transition duration-150 ease-in-out transform"
                  : " shadow-lg hover:bg-gray-100 hover:shadow-none"
              }`}
              onClick={() => setActiveInfo("lpickup_Info")}
            >
              <div className="mb-2 border-b-2 p-4 bg-gray-200 text-gray-500 border-b-gray-300 flex items-center gap-2 ">
                <CiHome className="text-xl" />
                <h2 className="text-lg font-semibold">Last Drop</h2>
              </div>
              <div className="mb-2 px-8 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              </div>
              <div
                className={`p-4 border-t-2 absolute bottom-0 w-full border-b-gray-300 bg-gray-100  text-center cursor-pointer  flex items-center gap-2 ${
                  activeInfo === "lpickup_Info"
                    ? "text-slate-800"
                    : "text-[#007bff] hover:underline"
                } `}
              >
                {activeInfo === "lpickup_Info" ? (
                  <FaArrowAltCircleDown />
                ) : (
                  <FaEye />
                )}
                View Last Drop Info
              </div>
            </div>
          </div>

          <GetInfoInput />
          <div className="mb-4 grid grid-cols-12 gap-4">
            <div className="col-span-6 sm:col-span-6 flex flex-col">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Location
              </label>
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Location"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 flex flex-col">
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Last Location
              </label>
              <input
                type="text"
                className=" px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Last Location"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className=" flex gap-4 mb-2">
              <label className="block text-sm font-medium text-gray-600">
                Additional Notes
              </label>

              <div className=" flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="public"
                  />
                  <span className="ml-2">Public</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="private"
                  />
                  <span className="ml-2">Private</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="admin"
                  />
                  <span className="ml-2">Admin</span>
                </label>
              </div>
            </div>

            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="Enter additional notes..."
            ></textarea>
          </div>

          {/* Status Changes List */}
          <div className="max-h-44 overflow-scroll">
            <hr />
            {statusChanges.map((item, index) => (
              <div
                className="mb-2 text-gray-700 border-b border-gray-300 py-3 px-2"
                key={index}
              >
                <div className="flex justify-between items-center mb-2 ">
                  <p className="text-xs flex items-center gap-2">
                    <FaShippingFast />
                    <span className=" text-sm font-semibold">
                      Status Change
                    </span>{" "}
                    by {item.user} - {item.type}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">10/26/2023 22:08</p>
                </div>
                <p className="text-sm">{item.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-100 py-4 px-6 flex justify-end">
          <button
            className="mr-2 text-gray-700 p-2 border border-gray-300 rounded-sm"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>
          <button
            className="mr-2 text-gray-700 p-2 border border-gray-300 rounded-sm flex items-center gap-1"
            onClick={() => console.log("Attach Document clicked")}
          >
            <FaArrowAltCircleUp />
            Attach Document
          </button>
          <button
            className="mr-2 bg-blue-500 text-white p-2 rounded-sm"
            onClick={() => console.log("Out for Delivery clicked")}
          >
            Out for Delivery
          </button>
          <button
            className="mr-2 bg-green-500 text-white p-2 rounded-sm"
            onClick={() => console.log("Complete Shipment clicked")}
          >
            Complete Shipment
          </button>
          <button
            className="bg-yellow-500 text-white p-2 rounded-sm"
            onClick={() => console.log("Update clicked")}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckCall;
