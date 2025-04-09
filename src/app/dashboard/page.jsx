import React from 'react';
import BentoGridThirdDemo from '@/Components/BentoGrid';
import { FaHome, FaCar, FaSearch, FaBars } from "react-icons/fa";
import TemporaryDrawer from '@/Components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-row bg-gray-50 p-4 md:p-6">
        
    <TemporaryDrawer/>
     <BentoGridThirdDemo/>
    </div>
  );
};

export default Dashboard