"use client"
import React from 'react';
import { Typography, InputBase, Badge, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      {/* Welcome Message */}
      <div className="mb-4 md:mb-0">
        <Typography variant="h6" className="font-semibold">
          Welcome 👋, Yogesh Gore
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          Here are today's stats from your Business!
        </Typography>
      </div>

      {/* Search Bar (Responsive) */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-64 mb-4 md:mb-0">
        <SearchIcon className="text-gray-500 mr-2" />
        <InputBase
          placeholder="Search"
          className="flex-grow"
        />
      </div>

      {/* Notifications and Profile */}
      <div className="flex items-center space-x-4">
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <div className="flex items-center space-x-2">
          <Avatar alt="Yogesh Gore" src="/yogesh-gore.jpg" /> {/* Replace with your image path */}
          <DropdownMenu>
  <DropdownMenuTrigger>
    
    <div className='flex flex-row '>

    <p>
      Yogesh Gore
      
      </p>
      <ArrowDropDownIcon />
    </div>


  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
      </div>
    </div>
  );
};

export default Header;