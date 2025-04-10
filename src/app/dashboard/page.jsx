import React from 'react';
import BentoGridThirdDemo from '@/Components/BentoGrid';
import { FaHome, FaCar, FaSearch, FaBars } from "react-icons/fa";
import TemporaryDrawer from '@/Components/Sidebar';
import Header from '@/Components/ui/DashboardHeader';

const Dashboard = () => {
  return (
    <div className="min-h-screen max-h-screen  flex flex-row justify-center bg-gray-50 ">
      <div className='hidden md:flex'>

    <TemporaryDrawer/>
      </div>

    <div className='block lg:hidden absolute top-0 left-0'>
    <TemporaryDrawer/>

    </div>

    <div className='flex w-full flex-col h-screen overflow-scroll bg-gray-300 '>
      
      <Header/>
     <BentoGridThirdDemo/>
      </div>      

    </div>
  );
};

export default Dashboard