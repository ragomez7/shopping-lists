import React from 'react';
import Box from '@mui/material/Box';
import ListItemCount from './ListItemCount';
import SidebarMenu from './SidebarMenu';

const SideBar = () => {
    return (
        <Box
            className="h-[907px] w-[94px] flex items-center justify-between py-[35px] flex-col">
            <Box className="w-[42px] h-[42px] rounded-[20px]"
                component="img" 
                src="https://res.cloudinary.com/dg8htxonw/image/upload/v1658148625/j3uemdpx4kopjufnivni.jpg" 
            />
                <SidebarMenu />
            <ListItemCount />
        </Box>
    )
};

export default SideBar;