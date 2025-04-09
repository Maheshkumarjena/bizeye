'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import CubeIcon from '@mui/icons-material/ViewInAr';
import MenuIcon from '@mui/icons-material/Menu'; // Import the Menu icon
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon

export default function AgroVisionSidebar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const mainNavItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Message', icon: <EmailIcon /> },
        { text: 'Services', icon: <MiscellaneousServicesIcon /> },
        { text: 'Reports', icon: <AssessmentIcon /> },
        { text: 'Talk To Expert', icon: <SupportAgentIcon /> },
        { text: 'Bizo AI', icon: <SmartToyIcon /> },
    ];

    const bottomNavItems = [
        { text: 'Help', icon: <HelpIcon /> },
        { text: 'Logout', icon: <LogoutIcon /> },
    ];

    const DrawerContent = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                backgroundColor: '#1e1e1e',
                color: 'white',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Logo Section */}
            <Box sx={{ p: 2, display: 'flex', width:'full', flexDirection: 'flex-row', alignItems: 'center' , gap: 1 ,justifyContent:'space-between' }}>
                <div className='flex flex-row items-center gap-2'>

                <CubeIcon sx={{ color: 'white' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    AgroVision
                </Typography>

                </div>
                <Button
                className={`flex justify-center  items-center rounded-md p-2 z-20 ${open ? 'bg-gray-600 text-white' : 'bg-blue-500 text-white'
                    }`}
                onClick={toggleDrawer(!open)}
                sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}
            >
                {open ? <CloseIcon /> : <MenuIcon />} {/* Render the appropriate icon */}

            </Button>


            </Box>

            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

            {/* Main Navigation Items */}
            <List sx={{ flexGrow: 1 }}>
                {mainNavItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

            {/* Bottom Navigation Items */}
            <List>
                {bottomNavItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // For demo purposes, we'll show both a button to open the drawer
    // and a permanent sidebar to match the image
    return (
        <div>
            {/* Button to toggle drawer (mobile view) */}
            <Button
                className={`flex  justify-center absolute top-[-15px] left-[-25px] items-center rounded-md p-2 z-20 ${open ? 'bg-gray-600 text-white' : 'bg-blue-500 text-white'
                    }`}
                onClick={toggleDrawer(!open)}
                sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}
            >
                {open ? <CloseIcon /> : <MenuIcon />} {/* Render the appropriate icon */}

            </Button>


            {/* Temporary drawer for mobile */}
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {DrawerContent}
            </Drawer>

            {/* Permanent sidebar (desktop view) to match the image */}
            <Box

                sx={{

                    display: { xs: 'none', md: 'block' },
                    width: 250,
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0
                }}
            >
                {DrawerContent}
            </Box>
        </div>
    );
}