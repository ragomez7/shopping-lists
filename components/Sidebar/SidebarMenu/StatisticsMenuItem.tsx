import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Tooltip from '@mui/material/Tooltip';
import { ShoppingDashboardContext } from '../../../pages/shopping';

const StatisticsMenuItem = () => {
    const { setCurrentUI } = useContext(ShoppingDashboardContext);
    return (
        <Box
            sx={{
                height: '90px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Tooltip title="Statistics" placement="right" >
            <IconButton
                onClick={() => setCurrentUI("ListStatistics")}
                sx={{
                    padding: 0,
                    height: '18.5px',
                        width: '15px',
                }}
            >
                <SvgIcon
                    sx={{
                        
                        padding: 0
                    }}
                >
                    <QueryStatsIcon />
                </SvgIcon>
            </IconButton>
            </Tooltip>
        </Box>
    )
};

export default StatisticsMenuItem;