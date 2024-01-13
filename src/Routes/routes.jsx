import { Routes, Route, } from 'react-router-dom';
import LtlSearch from '../Pages/Shipments/LTL-search';

const SideNavRoutes= () => {
    return (
        <Routes>
            <Route path="/ltl_search" element={<LtlSearch />} />
            <Route path="/sub-menu/item2" element={<div>Sub Menu Item 2</div>} />
          </Routes>
    )
}

export default SideNavRoutes;