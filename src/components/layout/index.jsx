import React from 'react';
import './index.css'
import SideNavRoutes from '../../Routes/routes';
import SideNav from '../navs/SideNav';

 const Layout = () => {
  return (
    <div className="main-container">
          <div className='sideNav-container'><SideNav/></div>
          <div>
            <div className='top-nav'></div>
            <div className='content-layout'><SideNavRoutes/></div>
          </div>
    </div>
  )
}

export default Layout;
