import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon'
import ReplayIcon from '@mui/icons-material/Replay';
import Tooltip from '@mui/material/Tooltip';
import { ShoppingDashboardContext } from '../../../pages/shopping';

const HistoryMenuItem = () => {
    const { setCurrentUI } = useContext(ShoppingDashboardContext);
    const handleHistoryButtonClick = () => {
        if (setCurrentUI) setCurrentUI("ListHistory")
        else {
            document.location.href = `/shopping?redirectToHistory=true`
        }
    }
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
            <Tooltip title="History" placement="right" >
                <IconButton
                    onClick={handleHistoryButtonClick}
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
                        <ReplayIcon />
                    </SvgIcon>
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default HistoryMenuItem;