// Layout.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    
    </div>
  );
};

export default Layout;
