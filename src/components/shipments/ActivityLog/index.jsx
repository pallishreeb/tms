/** @format */

import React, { useState } from "react";
import {
  FaTimes,
  FaShippingFast,
  FaDollarSign,
  FaClipboard,
  FaEnvelope,
  FaPlus,
  FaList,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { IconButton, Tooltip } from "@mui/material";
import SearchOptions from "./SearchOptions";
import AssignmentForm from "./AssignmentForm";
import ActivityForm from "./ActivityForm";

const ActivityLog = ({ isOpen, onClose }) => {
  // const [statusChanges, setStatusChanges] = useState([])
  const [isVisibleSearchOptions, setVisibleSearchOptions] = useState(false);
  const [isVisibleAssignmentForm, setVisibleAssignmentForm] = useState(false);
  const [isVisibleActivityForm, setVisibleActivityForm] = useState(false);
  const actionIcons = [
    {
      title: "Assign To My Self",
      icon: <FaClipboard />,
      handleClick: () => {},
    },
    {
      title: "Send Message",
      icon: <FaEnvelope />,
      handleClick: () => {},
    },
  ];
  const filterIcons = [
    {
      title: "Filter by All Activity",
      icon: <FaList />,
      handleClick: () => {},
      active: true,
    },
    {
      title: "Filter by General Activity",
      icon: <CiStickyNote />,
      handleClick: () => {},
      active: false,
    },
    {
      title: "Filter by Pricing Activity",
      icon: <FaDollarSign />,
      handleClick: () => {},
      active: false,
    },
    {
      title: "Filter by Operation Activity",
      icon: <FaShippingFast />,
      handleClick: () => {},
      active: false,
    },
    {
      title: "Filter by Email Activity",
      icon: <FaEnvelope />,
      handleClick: () => {},
      active: false,
    },
    {
      title: "Filter by User Activity",
      icon: <FaUser />,
      handleClick: () => {},
      active: false,
    },
  ];
  const statusChanges = [
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "General",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Receiveable",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Payable",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Receiveable",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Payable",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "General",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "General",
      icon: FaDollarSign,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
    {
      activityType: "Status Change",
      icon: FaShippingFast,
      type: "private",
      timeStamp: new Date().toISOString(),
      message: "  Additional notes for this status change.",
      user: "Bill Joy",
    },
  ];

  const modalClasses = isOpen
    ? "py-12 bg-black bg-opacity-50 flex items-center justify-center bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0  w-full"
    : "hidden";
  return (
    <div className={modalClasses}>
      <div className="bg-white rounded-lg   shadow-xl  sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12  overflow-y-scroll">
        {/* Modal Header */}
        <div className="text-gray-800 bg-inherit  py-4 px-6 bg-opacity-90  border-b border-b-gray-300 flex justify-between items-center ">
          <h1 className="text-2xl font-semibold ">
            Activity Log for 123456789{" "}
          </h1>
          <FaTimes onClick={onClose} className="cursor-pointer" />
        </div>

        {/* Modal Body */}
        <div className="px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                className={`border-blue-500 rounded-md  text-blue-500 text-sm px-2 py-1 border   flex items-center gap-1  ${
                  isVisibleSearchOptions
                    ? " bg-blue-500 text-slate-100"
                    : "hover:bg-blue-500 hover:text-slate-100"
                }`}
                onClick={() => setVisibleSearchOptions((prev) => !prev)}
              >
                <FaSearch />
                Search by Options
              </button>
              <div className="flex space-x-1 items-center text-blue-600">
                {filterIcons.map(
                  ({ title, icon, handleClick, active }, index) => (
                    <Tooltip
                      key={index}
                      placement="top"
                      title={title}
                      sx={{
                        color: `${active ? "whitesmoke" : "rgba(37, 99, 235)"}`,
                        backgroundColor: `${active ? "rgba(37, 99, 235)" : "inherit"}`,
                        width: "2rem",
                        padding: "2px 9px",
                        borderRadius: "5px",
                        border: "1px solid rgb(37 99 235) ",
                        "&:hover": {
                          backgroundColor: "rgba(37, 99, 235)",
                          color: "whitesmoke",
                        },
                      }}
                      onClick={() => handleClick()}
                    >
                      <IconButton>{icon}</IconButton>
                    </Tooltip>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className=" bg-gray-500 rounded-md  text-white text-sm px-3 py-2 border border-gray-300  flex items-center gap-1 opacity-90 hover:opacity-100"
                onClick={() => {
                  setVisibleActivityForm(false);
                  setVisibleAssignmentForm(true);
                }}
              >
                <FaPlus />
                Assignment
              </button>
              <button
                className=" bg-gray-500 rounded-md  text-white text-sm px-3 py-2 border border-gray-300  flex items-center gap-1 opacity-90 hover:opacity-100"
                onClick={() => {
                  setVisibleAssignmentForm(false);
                  setVisibleActivityForm(true);
                }}
              >
                <FaPlus />
                Activity
              </button>
            </div>
          </div>
          {isVisibleSearchOptions ? <SearchOptions /> : null}
          {isVisibleAssignmentForm ? (
            <AssignmentForm
              closeAssignmentForm={() => setVisibleAssignmentForm(false)}
            />
          ) : isVisibleActivityForm ? (
            <ActivityForm
              closeActivityForm={() => setVisibleActivityForm(false)}
            />
          ) : null}

          {/* Status Changes List */}
          <div className="py-3 max-h-[85vh] overflow-y-scroll">
            <hr />
            {statusChanges.map(
              (
                { activityType, icon: Icon, type, user, message, timeStamp },
                index
              ) => (
                <div
                  className="mb-2 text-gray-700 border-b border-gray-300 py-2 px-2 hover:bg-gray-200"
                  key={index}
                >
                  <div className="flex justify-between items-center mb-2 ">
                    <p className="text-xs flex items-center gap-2">
                      <Icon />
                      <span className=" text-sm font-semibold">
                        {activityType}
                      </span>
                      <span>by {user} -</span>

                      <span className="text-blue-500">{type}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      10/26/2023 22:08
                    </p>
                  </div>
                  <div className=" flex items-center justify-between">
                    <p className="text-sm">{message}</p>
                    <div className="flex space-x-1 items-center text-blue-600">
                      {actionIcons.map(
                        ({ title, icon, handleClick }, index) => (
                          <Tooltip
                            key={index}
                            placement="top"
                            title={title}
                            sx={{
                              color: "rgb(37 99 235)",
                              width: "2rem",
                              padding: "2px 9px",
                              borderRadius: "5px",
                              border: "1px solid rgb(37 99 235) ",
                              "&:hover": {
                                backgroundColor: "rgba(37, 99, 235)",
                                color: "whitesmoke",
                              },
                            }}
                            onClick={() => handleClick()}
                          >
                            <IconButton>{icon}</IconButton>
                          </Tooltip>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
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
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
