import React from 'react';
import Box from '@mui/material/Box';
import ListItemCount from './ListItemCount';
import SidebarMenu from './SidebarMenu';

const SideBar = () => {
    return (
        <Box
            className="SideBar"
            sx={{
                height: '907px',
                width: '94px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingY: '35px',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box 
                component="img" 
                src="https://res.cloudinary.com/dg8htxonw/image/upload/v1658148625/j3uemdpx4kopjufnivni.jpg" 
                sx={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '20px',
                    
                }}
            />
                <SidebarMenu />
            <ListItemCount />
        </Box>
    )
};

export default SideBar;