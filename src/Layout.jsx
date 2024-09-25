import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';


const Layout = () => {
  return (
    <div className=' w-full min-h-screen flex flex-col gap-2 absolute'>
        <Header />
        <div className=' w-full h-full flex-grow'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout;
