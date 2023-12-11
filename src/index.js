import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ShipmentsScreen from './screens/shipments/Shipments';
import AddShipmentsScreen from './screens/shipments/AddShipments';
import ShipmentDetailsScreen from './screens/shipments/ShipmentDetails';

import store from './redux/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<ShipmentsScreen />} />
      <Route path='/addshipments' element={<AddShipmentsScreen />} />
      <Route path='/details' element={<ShipmentDetailsScreen />} />   
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
