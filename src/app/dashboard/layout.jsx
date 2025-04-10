"use client";

import React from 'react';
import { FaHome, FaCar, FaSearch, FaBars } from "react-icons/fa";
import TemporaryDrawer from '@/Components/Sidebar';
import Header from '@/Components/DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen max-h-screen flex flex-row justify-center bg-gray-50">
      {/* Sidebar */}
      <div className='hidden md:flex'>
        <TemporaryDrawer />
      </div>

      {/* Mobile Sidebar */}
      <div className='block lg:hidden absolute top-0 left-0'>
        <TemporaryDrawer />
      </div>

      {/* Main content */}
      <div className='flex w-full flex-col h-screen overflow-scroll bg-gray-300'>
        <Header />
        {children} {/* Dynamic page rendering here */}
      </div>
    </div>
  );
};

export default DashboardLayout;
