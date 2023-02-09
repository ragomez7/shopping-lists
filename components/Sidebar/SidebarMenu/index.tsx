import React from 'react';
import Box from '@mui/material/Box';
import HistoryMenuItem from './HistoryMenuItem';
import ListMenuItem from './ListMenuItem';
import StatisticsMenuItem from './StatisticsMenuItem';
const SidebarMenu = () => {
    return (
        <Box className="h-[270px] w-[100%]">
            <ListMenuItem />
            <HistoryMenuItem />
            <StatisticsMenuItem />
        </Box>
    )
};

export default SidebarMenu;