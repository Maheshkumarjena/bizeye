import React from 'react';
import CubeIcon from '@mui/icons-material/ViewInAr'; // Assuming you have CubeIcon imported
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';



const SidebarContent = () => {
const navItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Message', icon: <EmailIcon /> },
    { text: 'Services', icon: <MiscellaneousServicesIcon /> },
    { text: 'Reports', icon: <AssessmentIcon /> },
    { text: 'Talk To Expert', icon: <SupportAgentIcon /> },
    { text: 'Bizo AI', icon: <SmartToyIcon /> },
  ];

  const secondaryNavItems = [
    // { text: 'Business Data', icon: <DatabaseIcon className="w-5 h-5" /> },
    // { text: 'Setting', icon: <CogIcon className="w-5 h-5" /> },
  ];

  const bottomNavItems = [
    { text: 'Help', icon: <HelpIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
  ];


  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2 px-4 py-5">
        <CubeIcon className="w-6 h-6" />
        <span className="text-lg font-medium">AgroVision</span>
      </div>

      <hr className="border-gray-700" />

      {/* Main Navigation */}
      <nav className="flex-1">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-800">
                <span className="inline-flex items-center justify-center w-6 mr-3">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>

        {secondaryNavItems.length > 0 && (
          <>
            <hr className="border-gray-700 my-1" />

            {/* Secondary Navigation */}
            <ul>
              {secondaryNavItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-800">
                    <span className="inline-flex items-center justify-center w-6 mr-3">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <hr className="border-gray-700 my-2" />
          </>
        )}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto">
        <ul>
          {bottomNavItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-800">
                <span className="inline-flex items-center justify-center w-6 mr-3">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarContent;