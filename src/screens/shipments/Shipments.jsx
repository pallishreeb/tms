import React from 'react'
import DataTable from '../../components/shipments/DataTable';
import SearchForm from "../../components/SearchForm"
const Shipments = () => {
  const data = [
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City AAAA',
      fromState: 'SA',
      toCity: 'City BBBB',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City A',
      fromState: 'SA',
      toCity: 'City B',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City A',
      fromState: 'SA',
      toCity: 'City B',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City A',
      fromState: 'SA',
      toCity: 'City B',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City A',
      fromState: 'SA',
      toCity: 'City B',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    {
      shipmentId: '12345678',
      customerName: 'Greenovative U',
      shipDate: '20/02/23',
      deliveryDate: '25/02/23',
      fromCity: 'City A',
      fromState: 'SA',
      toCity: 'City B',
      toState: 'SB',
      carrierName: 'Carrier..',
      linehaulCarrierProNumber: 'PRO-456',
      tariff: 'Standard',
      alerts: 'None',
      status: 'In Transit',
      lastOpsUpdate: 'a month ago',
      actions: 'View/Edit',
    },
    // Add more rows as needed
  ];
  
  return (
    <div>

      <SearchForm />
      <DataTable data={data} />
      
      </div>
  )
}

export default Shipments