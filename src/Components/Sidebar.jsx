'use client'
import React, { useState } from 'react';
import SidebarContent from './sidebarContent';
// Import icons from a simple icon library compatible with Tailwind
import { 
  
  DatabaseIcon, 
  CogIcon, 
  QuestionMarkCircleIcon, 
  LogoutIcon 
} from '@heroicons/react/outline';

export default function AgroVisionSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  const secondaryNavItems = [
    { text: 'Business Data', icon: <DatabaseIcon className="w-5 h-5" /> },
    { text: 'Setting', icon: <CogIcon className="w-5 h-5" /> },
  ];

  const bottomNavItems = [
    { text: 'Help', icon: <QuestionMarkCircleIcon className="w-5 h-5" /> },
    { text: 'Logout', icon: <LogoutIcon className="w-5 h-5" /> },
  ]; 


  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden ">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 z-50">
              <div className="flex justify-end p-2">
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <SidebarContent />
            </div>
          </>
        )}
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 h-screen ">
        <SidebarContent />
      </div>
      
      
    </>
  );
}
