// TableComponent.js
import React, { useState } from 'react';
import { FaBell, FaCheck, FaExclamation, FaInfo, FaTimes, FaCog } from 'react-icons/fa';

const DataTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (shipmentId) => {
    if (selectedRows.includes(shipmentId)) {
      setSelectedRows(selectedRows.filter((id) => id !== shipmentId));
    } else {
      setSelectedRows([...selectedRows, shipmentId]);
    }
  };

  return (
    <div className="mx-2 mt-8">
    <div className="w-full overflow-x-auto">
    <h5 className="p-2">10 results showing</h5> 
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-800">
          <tr>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-500  tracking-wider">
              {/* Checkbox Column */}
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Shipment Id
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Customer Name
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Ship Date
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Delivery Date
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              From City
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              From State
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              To City
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              To State
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Carrier Name
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Linehaul Carrier Pro Number
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Tariff
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Alerts
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Status
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Last Ops Update
            </th>
            <th scope="col" className="p-2 sm:p-4 text-left text-xs font-medium text-gray-200  tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm">
          {data.map((row) => (
            <tr key={row.shipmentId} className={selectedRows.includes(row.shipmentId) ? 'bg-gray-100' : ''}>
              <td className="p-1 sm:p-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.shipmentId)}
                  onChange={() => handleCheckboxChange(row.shipmentId)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
              </td>
              <td className="p-1 sm:p-2 whitespace-nowrap text-blue-600">{row.shipmentId}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.customerName}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.shipDate}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.deliveryDate}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.fromCity}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.fromState}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.toCity}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.toState}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.carrierName}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.linehaulCarrierProNumber}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">{row.tariff}</td>
              <td className="p-1 sm:p-2 whitespace-nowrap">
        
              <FaBell className="text-gray-600" />
              </td>
              <td className="p-1 sm:p-2 whitespace-nowrap bg-blue-400">{row.status}</td>
              <td className="p-1 sm:p-2  break-words">
                 {row.lastOpsUpdate}
             </td>
              
<td className="p-1 sm:p-2 whitespace-nowrap">
  <div className="flex space-x-1 items-center">
    {/* Assuming all icons are the same, you can adjust accordingly */}
    <FaBell className="text-blue-600" />
    <FaCheck className="text-blue-600" />
    <FaExclamation className="text-blue-600" />
    <FaInfo className="text-blue-600" />
    <FaTimes className="text-blue-600" />
    <FaCog className="text-blue-600" />
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataTable;
