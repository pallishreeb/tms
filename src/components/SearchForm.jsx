import { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const SearchForm = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleToggleAdvanced = () => {
    setTimeout(() => {
      setShowAdvanced(!showAdvanced);
    }, 800);
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="text-3xl mt-1 font-medium">Shipment Search</h2>
        </div>
        <div className="flex justify-between  w-[60%]">
          <div>
            <button className="bg-gray-200 border-solid border-t border-l border-b  border-neutral-300 py-1.5 px-3 rounded-l">
              Saved Searches
            </button>

            <input
              className="w-[55%] border-solid border border-neutral-300  bg-gray-100 py-1.5 px-3"
              placeholder="Type to search..."
              type="text"
            />
          </div>
          <button className="px-14 py-2 rounded bg-green-600 text-white">
            Add New Shipment
          </button>
        </div>
      </div>
      <div className="rounded border-solid border-2  py-6 bg-white">
        <div className="card-body ">
          <form className=" card-text">
            {/* first row */}
            <div className="row flex px-1 ">
              {/* first col */}
              <div className="ml-[-1%]">
                <div className="row flex gap-4 text-center mb-5">
                  <div className=" w-[26%] text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Carrier
                    </label>
                  </div>

                  <div className="col-md-8">
                    <input
                      className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                      type="text"
                      placeholder="type to search carriers..."
                    />
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className="w-[26%] text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Office
                    </label>
                  </div>

                  <div className="col-md-8">
                    <input
                      className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                      type="text"
                      placeholder="type to search office..."
                    />
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className="w-[90px] text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Customer
                    </label>
                  </div>

                  <div className="col-md-8">
                    <input
                      className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                      type="text"
                      placeholder="type to search customers..."
                    />
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className=" w-[26%] text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Assignment
                    </label>
                  </div>
                  <div className="border-solid border border-neutral-300  bg-gray-100 rounded">
                    <select
                      name="shipmentFavoritedByType"
                      className="form-control w-60 h-8 px-4 bg-gray-100 focus:border-blue-500"
                    >
                      <option value="" selected="selected">
                        {" "}
                        -- Select --{" "}
                      </option>
                      <option value="number:1">All Assigned</option>
                      <option value="number:0">Assigned to Staff</option>
                      <option value="number:3">My Assignments</option>
                      <option value="number:2">Not Assigned</option>
                    </select>
                  </div>
                </div>
                {showAdvanced && (
                  <>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-[26%] text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Date Type
                        </label>
                      </div>
                      <div className=" rounded">
                        <select
                          name="shipmentFavoritedByType"
                          className="form-control w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 focus:border-blue-500"
                        >
                          <option value="" selected="selected">
                            {" "}
                            -- Select --{" "}
                          </option>
                          <option value="">Entry Date</option>
                          <option value="">Ship Date</option>
                          <option value="">Delivery ate</option>
                        </select>
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-[26%] text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Sales Person
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                          placeholder="type to search"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* second colu */}
              <div className="ml-[-1%]">
                <div className="row flex gap-4 text-center mb-5">
                  <div className=" w-32 text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Shipment IDs
                    </label>
                  </div>

                  <div className="col-md-8">
                    <input
                      className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className=" w-32 text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      Shipment Type
                    </label>
                  </div>
                  <div className="border-solid border border-neutral-300  bg-gray-100 rounded">
                    <select
                      name="shipmentFavoritedByType"
                      className="form-control w-60 h-8 px-4 bg-gray-100 focus:border-blue-500"
                    >
                      <option value="" selected="selected">
                        {" "}
                        --All--{" "}
                      </option>
                      <option value="">Small Package</option>
                      <option value="" selected>
                        LTL
                      </option>
                      <option value="">Truckload</option>
                      <option value="">Domestic Freight</option>
                      <option value="">Cartage</option>
                      <option value="">Drayage</option>
                    </select>
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className="w-32 text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Status
                    </label>
                  </div>
                  <div className="border-solid border border-neutral-300  bg-gray-100 rounded">
                    <select
                      name="shipmentFavoritedByType"
                      className="form-control w-60 h-8 px-4 bg-gray-100 focus:border-blue-500"
                    >
                      <option value="" selected="selected">
                        -- Select --{" "}
                      </option>
                      <option value="">Quote</option>
                      <option value="">Committed</option>
                      <option value="">Ready</option>
                      <option value="">Sent</option>
                      <option value="">Dispatched</option>
                      <option value="">In Transit</option>
                      <option value="">Out for Delivery</option>
                      <option value="">Delivered</option>
                      <option value="">Complete</option>
                      <option value="">Canceled</option>
                    </select>
                  </div>
                </div>
                <div className="row flex gap-4 text-center mb-5">
                  <div className=" w-32 text-right">
                    <label className="col-form-label col-md-4 text-right text-[14px]">
                      {" "}
                      Alerts
                    </label>
                  </div>
                  <div className="border-solid border border-neutral-300  bg-gray-100 rounded">
                    <select
                      name="shipmentFavoritedByType"
                      className="form-control w-60 h-8 px-4  bg-gray-100 focus:border-blue-500"
                    >
                      <option value="" selected="selected">
                        -- Select --{" "}
                      </option>
                      <option value="">Advanced Payment</option>
                      <option value="">Appointment Date</option>
                      <option value="">Available for Delivery</option>
                      <option value="">Carrier Blocked</option>
                    </select>
                  </div>
                </div>

                {showAdvanced && (
                  <div className="row flex gap-4 text-center mb-5">
                    <div className=" w-32 text-right">
                      <label className="col-form-label col-md-4 text-right text-[14px]">
                        {" "}
                        Date Range
                      </label>
                    </div>
                    <div className="border-solid border border-neutral-300  bg-gray-100 rounded">
                      <select
                        name="shipmentFavoritedByType"
                        className="form-control w-60 h-8 px-4  bg-gray-100 focus:border-blue-500"
                      >
                        <option value="">Next 7 days</option>
                        <option value="">Next 14 days</option>
                        <option value="">Next 30 days</option>
                        <option value="">Next 90 days</option>
                        <option value="">Today</option>

                        <option value="">Yesterday</option>
                        <option value="">This Month</option>
                        <option value="">This Quarter</option>
                        <option value="">Last 7 days</option>
                        <option value="">Last 14 days</option>
                        <option value="">Last 30 days</option>
                        <option value="" selected>
                          Last 90 days
                        </option>

                        <option value="">Last Month</option>
                        <option value="">Last Quarter</option>
                        <option value="">Custom Date Range</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
              {/* thrid col */}
              <div className="mt-1 mr-8 ml-8  ">
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Guaranteed Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    White Glove Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Insured Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Hot Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Marketplace Only
                  </label>
                </div>
                {showAdvanced && (
                  <div className="form-check mt-11 ">
                    <input
                      className=" w-32 text-sm border-solid border border-neutral-300  bg-gray-100 px-2  rounded mt-1"
                      type="date"
                    />
                  </div>
                )}
              </div>
              {/* fourth col */}
              <div className="mt-1">
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Active Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Search Hierarchy
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Over Credit Limit Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    Volume Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input mr-1" type="checkbox" />
                  <label className="form-check-label ml-3 text-[14px]">
                    {" "}
                    No POD Only
                  </label>
                </div>

                {showAdvanced && (
                  <div className="form-check mt-11 ">
                    <input
                      className=" w-32 text-sm border-solid border border-neutral-300  bg-gray-100 px-2  rounded mt-1"
                      type="date"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* second row */}
            {showAdvanced && (
              <div className="flex justify-between px-3 mt-6 mb-4">
                <div className="w-1/3">
                  <div className="ml-4">
                    <h1 className="text-2xl">All Stops</h1>
                    <div className="border-b-2"></div>
                  </div>
                  <div className="mt-2">
                    <div className="row flex gap-4 text-center mb-5">
                      <div className=" w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          Company
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Zip Code
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="ml-1">
                    <h1 className="text-2xl">Shipment Information</h1>
                    <div className="border-b-2"></div>
                  </div>
                  <div className="mt-2">
                    <div className="row flex gap-4 text-center mb-5">
                      <div className=" w-[120px] text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Reference Type
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <select className="w-[30%] px-2 border-solid border border-neutral-300  bg-gray-100 rounded">
                          <option selected className="">
                            Any
                          </option>
                        </select>
                        <input
                          className="h-8 w-[65%] px-2 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className=" w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          PRO Numbers
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Customer PO
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Shipper Ref
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Tariff Name
                        </label>
                      </div>

                      <div className="col-md-8">
                        <input
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row flex gap-4 text-center mb-5">
                      <div className="w-32 text-right">
                        <label className="col-form-label col-md-4 text-right text-[14px]">
                          {" "}
                          Service Level
                        </label>
                      </div>

                      <div className="col-md-8">
                        <select
                          className="w-60 h-8 px-4 border-solid border border-neutral-300  bg-gray-100 rounded focus:border-blue-500"
                          type="text"
                        >
                          <option>--Select--</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* third row */}
            <div className="flex row justify-between text-center px-8 mb-4">
              <div className="flex items-center">
                <p className="text-[14px] text-center">
                  Shipments shown for last
                  <span className="text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:cursor-pointer ml-1">
                    Last 90 Days
                  </span>
                  <span className="text-blue-500 hover:cursor-pointer">
                    <CalendarMonthIcon
                      className="ml-1"
                      style={{ fontSize: 20 }}
                    />
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center w-[60%] ">
                <div className="flex items-center space-x-1">
                  <span className="text-blue-500  hover:cursor-pointer">
                    <FileDownloadIcon className="w-6 h-6" />
                  </span>
                  <span className="text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:cursor-pointer">
                    Export to Excel
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <span className="text-blue-500 hover:cursor-pointer">
                    <BorderColorIcon className="w-6 h-6" />
                  </span>
                  <span className="text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:cursor-pointer">
                    Clear Fields
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <span className="text-blue-500  hover:cursor-pointer mr-1">
                    {showAdvanced ? (
                      <VisibilityOffIcon className="w-6 h-6" />
                    ) : (
                      <VisibilityIcon className="w-6 h-6" />
                    )}
                  </span>
                  <span
                    className="text-blue-500 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:cursor-pointer"
                    onClick={handleToggleAdvanced}
                  >
                    {showAdvanced ? "Hide Advanced" : "Show Advanced"}
                  </span>
                </div>

                <button className="py-2 px-16 bg-blue-500 rounded text-white">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
